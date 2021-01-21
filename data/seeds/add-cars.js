exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: 12345,
          make: "honda",
          model: "civic",
          mileage: 123421,
          transmission_type: 4,
        },
        {
          VIN: 54321,
          make: "honda",
          model: "civic",
          mileage: 1444234,
          transmission_type: 1,
        },
        {
          VIN: 123123,
          make: "honda",
          model: "civic",
          mileage: 12918234,
          transmission_type: 3,
          title_status: "gucci",
        },
      ]);
    });
};
