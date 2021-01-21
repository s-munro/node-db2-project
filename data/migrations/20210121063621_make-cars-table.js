exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();

    table.integer("VIN").notNullable().unique();

    table.string("make").notNullable();

    table.string("model").notNullable();

    table.integer("mileage").notNullable();

    table.integer("transmission_type");

    table.string("title_status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
