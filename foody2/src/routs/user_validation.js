const express = require("express");
const router = express.Router();

const { login, register, registor } = require("../controllers/user_validation");

router.post("/register", register);
router.post("/registor", registor);
router.post("/login", login);

module.exports = router;
