/* eslint-disable no-undef */
require("dotenv").config();
const Sequelize = require("sequelize");

const database = "todo_db";
const username = "postgres";
const password = process.env.DB_PASSWORD;
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const connect = async () => {
  return sequelize.authenticate();
};

module.exports = {
  connect,
  sequelize,
};

console.log(process.env.DB_PASSWORD);
