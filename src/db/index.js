const mongoose = require("mongoose");
const config = require("../shared/config");

require("dotenv/config");

module.exports = function () {
  return mongoose
    .connect(`${config.db.url}/${config.db.name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB ga ulandi.");
    })
    .catch((err) => {
      console.log("DB da xatolik: ", err);
    });
};
