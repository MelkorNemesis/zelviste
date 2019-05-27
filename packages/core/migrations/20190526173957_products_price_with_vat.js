exports.up = function(knex, Promise) {
  return knex.schema.alterTable("products", table => {
    table.renameColumn("price_without_vat", "price_with_vat");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable("products", table => {
    table.renameColumn("price_with_vat", "price_without_vat");
  });
};
