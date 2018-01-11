var sequelize = require("../server/models.js").db;

sequelize.sync({ force: true }).then(() => {
  console.log("Migration done!");
  process.exit();
});
