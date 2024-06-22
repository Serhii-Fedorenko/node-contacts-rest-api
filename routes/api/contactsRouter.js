const express = require("express");
const contactsRouter = express.Router();
const ctrl = require("../../controllers/contacts");
const { isValidId, validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

contactsRouter.get("/", authenticate, ctrl.getAll);

contactsRouter.get("/:id", authenticate, isValidId, ctrl.getById);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.add
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

contactsRouter.delete("/:id", authenticate, isValidId, ctrl.deleteById);

module.exports = contactsRouter;
