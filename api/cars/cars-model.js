const db = require("../../data/db-config.js");

module.exports = {
  getCars() {
    return db("cars");
  },
};
