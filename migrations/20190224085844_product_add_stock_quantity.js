exports.up = function(knex) {
  return knex.schema.alterTable("products", table => {
    table
      .integer("stock_quantity")
      .notNullable()
      .defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("products", table => {
    table.dropColumn("stock_quantity");
  });
};
