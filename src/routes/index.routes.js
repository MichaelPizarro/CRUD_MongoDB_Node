const express = require("express");
const router = express.Router();
const {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} = require("../controllers/tasks.controller.js");

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/edit/:id", renderTaskEdit);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", taskToggleDone);

module.exports = router;
