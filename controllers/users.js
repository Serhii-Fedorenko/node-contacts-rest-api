const { User } = require("../models/user");
const { HttpError, ctrlWrapper } = require("../utils");

async function register(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const newUser = await User.create(req.body);
  res.status(201).json({
    email: newUser.email,
  });
}

module.exports = {
  register: ctrlWrapper(register),
};
