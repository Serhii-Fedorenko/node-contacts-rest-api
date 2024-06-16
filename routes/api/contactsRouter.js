const express = require("express");
const contactsRouter = express.Router();
const ctrl = require("../../controllers/contacts");
const { isValidId } = require("../../middlewares");

contactsRouter.get("/", ctrl.getAll);

contactsRouter.get("/:id", isValidId, ctrl.getById);

contactsRouter.post("/", ctrl.add);

contactsRouter.put("/:id", isValidId, ctrl.updateById);

contactsRouter.patch("/:id/favorite", isValidId, ctrl.updateFavorite);

contactsRouter.delete("/:id", isValidId, ctrl.deleteById);

module.exports = contactsRouter;
