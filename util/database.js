const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "zaalizaali2", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
