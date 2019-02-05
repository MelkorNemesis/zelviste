const HOST = "localhost";
const PORT = "5432";
const USER = "postgres";
const PASSWORD = "example";
const DB = "postgres";

module.exports = {
  client: "pg",
  connection: `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}`
};
