exports.up = function(knex) {
  return knex.schema.createTable("products", table => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("seo_url").notNullable();
    table.string("ean");
    table.string("code");
    table.text("description");
    table.text("description_ascii");
    table.float("price_without_vat").notNullable();
    table.float("vat").notNullable();
    table
      .boolean("is_active")
      .notNullable()
      .defaultTo(false);
    table.boolean("is_on_sale").defaultTo(false);
    table.integer("weight").notNullable(); // grams
    table.integer("width").notNullable(); // millimeters
    table.integer("length").notNullable(); // millimeters
    table.integer("height").notNullable(); // millimeters
    table.integer("id_category");
    table.foreign("id_category").references("categories.id");
    table.unique(["seo_url"]);
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("products")]);
};
