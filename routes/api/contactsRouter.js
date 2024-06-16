const express = require("express");
const contactsRouter = express.Router();
const ctrl = require("../../controllers/contacts");

contactsRouter.get("/", ctrl.getAll);

contactsRouter.get("/:id", ctrl.getById);

contactsRouter.post("/", ctrl.add);

contactsRouter.put("/:id", ctrl.updateById);

contactsRouter.patch("/:id/favorite", ctrl.updateFavorite);

contactsRouter.delete("/:id", ctrl.deleteById);

module.exports = contactsRouter;
