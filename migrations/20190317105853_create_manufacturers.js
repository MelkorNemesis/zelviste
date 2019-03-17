exports.up = function(knex) {
  return knex.schema
    .createTable("manufacturers", table => {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .then(() =>
      knex.schema.alterTable("products", table => {
        table.integer("id_manufacturer");
        table.foreign("id_manufacturer").references("manufacturers.id");
      })
    );
};

exports.down = function(knex) {
  return knex.schema
    .alterTable("products", table => {
      table.dropColumn("id_manufacturer");
    })
    .then(() => knex.schema.dropTable("manufacturers"));
};
