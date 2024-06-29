const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(schemas.authSchema), ctrl.register);

usersRouter.post("/login", validateBody(schemas.authSchema), ctrl.login);

usersRouter.get("/current", authenticate, ctrl.getCurrent);

usersRouter.post("/logout", authenticate, ctrl.logout);

usersRouter.patch(
  "/avatar",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = usersRouter;
