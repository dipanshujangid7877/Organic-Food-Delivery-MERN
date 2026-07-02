const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const createToken = (user) => {
  const secret = process.env.JWT_SECRET || "foody-development-secret";
  return jwt.sign(
    { id: user._id, email: user.email },
    secret,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
};

const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

exports.registor = async (req) => {
  const { email, username, location, password } = req.body;

  if (!email || !username || !password) {
    return {
      statusCode: 400,
      message: "Email, username and password are required",
      success: false,
    };
  }

  if (!isEmail(email)) {
    return {
      statusCode: 400,
      message: "Please enter a valid email",
      success: false,
    };
  }

  if (password.length < 6) {
    return {
      statusCode: 400,
      message: "Password must be at least 6 characters",
      success: false,
    };
  }

  const existingUser = await userModel.findOne({ email: email.toLowerCase() });

  if (existingUser) {
    return {
      statusCode: 409,
      message: "User already exists",
      success: false,
    };
  }

  const user = await userModel.create({ email, username, location, password });
  const token = createToken(user);

  return {
    statusCode: 201,
    message: "User created successfully",
    success: true,
    token,
    user: user.toSafeJSON(),
  };
};

exports.login = async (req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return {
      statusCode: 400,
      message: "Email and password are required",
      success: false,
    };
  }

  const existingUser = await userModel
    .findOne({ email: email.toLowerCase() })
    .select("+password");

  if (!existingUser) {
    return {
      statusCode: 401,
      message: "Invalid email or password",
      success: false,
    };
  }

  const isPasswordMatch = await existingUser.comparePassword(password);

  if (!isPasswordMatch) {
    return {
      statusCode: 401,
      message: "Invalid email or password",
      success: false,
    };
  }

  const token = createToken(existingUser);

  return {
    statusCode: 200,
    message: "User logged in successfully",
    success: true,
    token,
    user: existingUser.toSafeJSON(),
  };
};
