const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "addup",
  multipleStatements: true,
  charset: "utf8mb4",
});

const db = {
  query: util.promisify(connection.query).bind(connection),
};

module.exports = db;
