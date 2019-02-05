exports.up = function(knex) {
  return knex.schema.createTable("categories", table => {
    table.increments("id").primary();
    table.integer("parent_id");
    table.foreign("parent_id").references("categories.id");
    table.string("name").notNullable();
    table.string("seo_url").notNullable();
    table
      .boolean("is_active")
      .notNullable()
      .defaultTo(true);
    table.text("description");
    table.unique(["seo_url"]);
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("categories")]);
};
