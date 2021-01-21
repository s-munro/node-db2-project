const db = require("../../data/db-config.js");

module.exports = {
  getCars() {
    return db("cars");
  },

  getCarById(id) {
    return db("cars").where("id", id);
  },

  insertCar(car) {
    return db("cars")
      .insert(car)
      .then((ids) => {
        return db("cars").where("id", ids[0]);
      });
    // .then((ids) => {
    //   return db("cars").where({ id: ids[0] });
    // });
  },
};
