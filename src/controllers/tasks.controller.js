const Task = require("../models/Task.js");

const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();

  res.render("index", { tasks: tasks });
};

const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task: task });
  } catch (error) {
    console.log(error);
  }
};

const editTask = async (req, res) => {
    try {
      const { id } = req.params;
      await Task.findByIdAndUpdate(id, req.body);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }

const deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      await Task.findByIdAndDelete(id);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }  

const taskToggleDone = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);
      task.done = !task.done;
      await task.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }  

module.exports = {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone
};
