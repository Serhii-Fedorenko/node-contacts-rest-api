const express = require("express");
const contactsRouter = express.Router();
const ctrl = require("../../controllers/contacts");
const { isValidId, validateBody } = require("../../middlewares");
const { schemas } = require("../../models/contact");

contactsRouter.get("/", ctrl.getAll);

contactsRouter.get("/:id", isValidId, ctrl.getById);

contactsRouter.post("/", validateBody(schemas.addSchema), ctrl.add);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

contactsRouter.delete("/:id", isValidId, ctrl.deleteById);

module.exports = contactsRouter;
