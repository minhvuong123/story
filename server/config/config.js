const Sequelize = require("sequelize");

module.exports = {
  development: {
    username: "root",
    password: "",
    database: "story",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: Sequelize.Op
  },
  production: {
    username: "root",
    password: "password",
    database: "story",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: Sequelize.Op
  }
}
  
