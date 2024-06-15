const { Contact } = require("../models/contact");
const { HttpError } = require("../utils");

async function getAll(req, res, next) {
  try {
    const result = await Contact.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
  getById,
};
