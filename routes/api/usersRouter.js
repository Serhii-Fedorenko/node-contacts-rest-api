const express = require("express");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(schemas.authSchema), ctrl.register);

usersRouter.post("/login", validateBody(schemas.authSchema), ctrl.login);

module.exports = usersRouter;
