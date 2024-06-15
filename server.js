const mongoose = require("mongoose");
const app = require("./app.js");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch(() => {
    console.log(error.message);
    process.exit(1);
  });
