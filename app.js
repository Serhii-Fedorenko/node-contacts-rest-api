const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const contactsRouter = require("./routes/api/contactsRouter");
const usersRouter = require("./routes/api/usersRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("tiny"));

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
