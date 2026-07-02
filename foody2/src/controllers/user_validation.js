const userService = require("../services/user_validation");
const productService = require("../services/products");

const sendResult = (res, result) => {
  if (result.success && result.token) {
    res.cookie("token", result.token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  }

  res.status(result.statusCode || (result.success ? 200 : 400)).json(result);
};

const handle = (serviceMethod) => async (req, res, next) => {
  try {
    const result = await serviceMethod(req, res);
    sendResult(res, result);
  } catch (error) {
    next(error);
  }
};

exports.registor = handle(userService.registor);
exports.register = handle(userService.registor);
exports.login = handle(userService.login);

exports.products = handle(productService.products);
exports.productById = handle(productService.productById);
exports.createProduct = handle(productService.createProduct);
exports.updateProduct = handle(productService.updateProduct);
exports.deleteProduct = handle(productService.deleteProduct);

exports.addProduct = handle(productService.addProduct);
exports.getCart = handle(productService.getCart);
exports.removeFromCart = handle(productService.removeFromCart);
