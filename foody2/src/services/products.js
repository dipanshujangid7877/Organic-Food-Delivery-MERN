const mongoose = require("mongoose");
const productModel = require("../models/products");
const userModel = require("../models/user");

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

exports.products = async (req) => {
  const search = req.query.search || "";
  const query = search
    ? {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
        ],
      }
    : {};

  const data = await productModel.find(query).sort({ createdAt: -1 });

  return {
    statusCode: 200,
    success: true,
    count: data.length,
    data,
  };
};

exports.productById = async (req) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return {
      statusCode: 400,
      success: false,
      message: "Invalid product id",
    };
  }

  const data = await productModel.findById(id);

  if (!data) {
    return {
      statusCode: 404,
      success: false,
      message: "Product not found",
    };
  }

  return {
    statusCode: 200,
    success: true,
    data,
  };
};

exports.createProduct = async (req) => {
  const { name, description, image_url, price, discount, quantity } = req.body;

  if (!name || price === undefined) {
    return {
      statusCode: 400,
      success: false,
      message: "Product name and price are required",
    };
  }

  const data = await productModel.create({
    name,
    description,
    image_url,
    price,
    discount,
    quantity,
  });

  return {
    statusCode: 201,
    success: true,
    message: "Product created successfully",
    data,
  };
};

exports.updateProduct = async (req) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return {
      statusCode: 400,
      success: false,
      message: "Invalid product id",
    };
  }

  const data = await productModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    return {
      statusCode: 404,
      success: false,
      message: "Product not found",
    };
  }

  return {
    statusCode: 200,
    success: true,
    message: "Product updated successfully",
    data,
  };
};

exports.deleteProduct = async (req) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return {
      statusCode: 400,
      success: false,
      message: "Invalid product id",
    };
  }

  const data = await productModel.findByIdAndDelete(id);

  if (!data) {
    return {
      statusCode: 404,
      success: false,
      message: "Product not found",
    };
  }

  return {
    statusCode: 200,
    success: true,
    message: "Product deleted successfully",
  };
};

exports.addProduct = async (req) => {
  const { userId, productId, quantity = 1 } = req.body;

  if (!isValidId(userId) || !isValidId(productId)) {
    return {
      statusCode: 400,
      success: false,
      message: "Valid userId and productId are required",
    };
  }

  const product = await productModel.findById(productId);
  if (!product) {
    return {
      statusCode: 404,
      success: false,
      message: "Product not found",
    };
  }

  const user = await userModel.findById(userId);
  if (!user) {
    return {
      statusCode: 404,
      success: false,
      message: "User not found",
    };
  }

  const cartItem = user.products.find((item) => item.product.toString() === productId);

  if (cartItem) {
    cartItem.quantity += Number(quantity) || 1;
  } else {
    user.products.push({ product: productId, quantity: Number(quantity) || 1 });
  }

  await user.save();
  await user.populate("products.product");

  return {
    statusCode: 200,
    success: true,
    message: "Product added to cart",
    data: user.products,
  };
};

exports.getCart = async (req) => {
  const { userId } = req.params;

  if (!isValidId(userId)) {
    return {
      statusCode: 400,
      success: false,
      message: "Invalid user id",
    };
  }

  const user = await userModel.findById(userId).populate("products.product");

  if (!user) {
    return {
      statusCode: 404,
      success: false,
      message: "User not found",
    };
  }

  return {
    statusCode: 200,
    success: true,
    data: user.products,
  };
};

exports.removeFromCart = async (req) => {
  const { userId, productId } = req.body;

  if (!isValidId(userId) || !isValidId(productId)) {
    return {
      statusCode: 400,
      success: false,
      message: "Valid userId and productId are required",
    };
  }

  const user = await userModel.findByIdAndUpdate(
    userId,
    { $pull: { products: { product: productId } } },
    { new: true }
  ).populate("products.product");

  if (!user) {
    return {
      statusCode: 404,
      success: false,
      message: "User not found",
    };
  }

  return {
    statusCode: 200,
    success: true,
    message: "Product removed from cart",
    data: user.products,
  };
};
