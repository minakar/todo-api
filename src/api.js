const api = require("express").Router();
const Todo = require("./models.js").Todo;

api.get("/todos", async (req, res) => {
  try {
    let todos = await Todo.findAll({
      order: [["id", "DESC"]]
    });
    res.json(todos);
  } catch (e) {
    res.error(e.message);
  }
});

api.post("/todos", async (req, res) => {
  try {
    let todo = await Todo.create({
      text: req.body.text
    });
    res.json(todo).status(201);
  } catch (e) {
    res.error(e.message);
  }
});

module.exports = api;
