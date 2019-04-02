exports.up = function(knex) {
  return knex.schema.createTable("admin_users", table => {
    table.increments("id").primary();
    table.string("firstname").notNullable();
    table.string("surname").notNullable();
    table.string("email").notNullable();
    table.string("salt", 16).notNullable();
    table.string("hash", 128).notNullable();
    table.unique(["email"]);
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("admin_users")]);
};
