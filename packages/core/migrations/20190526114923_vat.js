exports.up = function(knex) {
  return knex.schema
    .createTable("vat", table => {
      table.increments("id").primary();
      table.integer("value").notNullable();
      table.string("description");
      table.unique(["value"]);
    })
    .then(() => {
      return knex.schema.alterTable("products", table => {
        table.integer("id_vat").notNullable();
        table.foreign("id_vat").references("vat.id");
        return table.dropColumn("vat");
      });
    });
};

exports.down = function(knex) {
  return knex.schema
    .alterTable("products", table => {
      table.dropColumn("id_vat");
      return table.float("vat").notNullable();
    })
    .then(() => {
      return knex.schema.dropTable("vat");
    });
};
