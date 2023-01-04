/** Database setup for BizTime. */
const { Client } = require("pg");
// Used to connect to server
const config = {
  host: "localhost",
  user: "hank",
  password: "password",
  database: `biztime${process.env.NODE_ENV === "test" ? "_test": ""}`
};

const db = new Client(config);

db.connect();

module.exports = db;
