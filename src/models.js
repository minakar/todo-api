const Sequelize = require("sequelize");

const db = new Sequelize("db", "admin", "admin", {
  host: "db",
  dialect: "mysql"
});

const Todo = db.define(
  "todo",
  {
    text: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);

module.exports = { db, Todo };
