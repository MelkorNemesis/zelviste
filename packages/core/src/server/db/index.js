const Knex = require("knex");
const objection = require("objection");

const config = require("../../../knexfile");

module.exports = {
  init() {
    const connection = Knex(config);
    objection.Model.knex(connection);
  }
};
