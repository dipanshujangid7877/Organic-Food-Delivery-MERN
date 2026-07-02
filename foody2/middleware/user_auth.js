const jwt = require("jsonwebtoken");
const userModel = require("../src/models/user");

module.exports = async function userAuth(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ")
      ? header.slice(7)
      : req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication token is required",
      });
    }

    const secret = process.env.JWT_SECRET || "foody-development-secret";
    const payload = jwt.verify(token, secret);
    const user = await userModel.findById(payload.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User no longer exists",
      });
    }

    req.user = user;
    next();
  } catch {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
