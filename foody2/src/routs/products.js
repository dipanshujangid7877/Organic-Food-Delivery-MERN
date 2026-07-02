const express = require("express");
const router = express.Router();

const {
  products,
  productById,
  createProduct,
  updateProduct,
  deleteProduct,
  addProduct,
  getCart,
  removeFromCart,
} = require("../controllers/user_validation");

router.get("/products", products);
router.get("/products/:id", productById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.post("/add", addProduct);
router.get("/cart/:userId", getCart);
router.delete("/cart", removeFromCart);

module.exports = router;
