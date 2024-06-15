const { Contact } = require("../models/contact");

async function getAll(req, res, next) {
  try {
    const result = await Contact.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
};
