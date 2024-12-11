const Task = require("../models/taskModel");

//fetch all tasks
const viewAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (tasks.length === 0) {
      return res.status(404).json({
        status: "failed",
        message: "No task found",
      });
    }
    res.status(200).json({
      status: "success",
      tasks,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Error fetching tasks",
    });
  }
};

//create task
const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    // Validate request body
    if (!title || !description) {
      return res.status(400).json({
        status: "failed",
        message: "Title and description are required.",
      });
    }
    //fetch userId
    const userId = req.user._id;
    if (!userId) {
      return res.status(401).json({
        status: "failed",
        message: "User not found, only authenticated user are allowed",
      });
    }
    //create new task
    const newTask = new Task({
      title,
      description,
    });
    await newTask.save();
    res.status(201).json({
      status: "success",
      message: "Task created successfully",
      newTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Error creating task",
    });
  }
};

//get task by id
const viewTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({
        status: "failed",
        message: "Task not found",
      });
    }
    res.status(200).json({
      status: "success",
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Error fetching task",
    });
  }
};

//update an entire task
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    //validate input fields
    if (!title || !description || completed === undefined) {
      return res.status(400).json({
        status: "failed",
        message: "All fields are required",
      });
    }
    //update task object
    const updatedTask = await Task.findByIdAndUpdate(id, {
      title,
      description,
      completed,
    });
    if (!updatedTask) {
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Task updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error updating task");
  }
};

//update a specific feild
const updateSpecificfield = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    //validate update fields
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        status: "error",
        message: "At least one field is required to update task",
      });
    }
    //update the objects
    const update = await Task.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );
    if (!update) {
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Task updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error updating task");
  }
};

//delete task by id
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    // Handle task not found
    if (!deletedTask) {
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Error deleting task",
    });
  }
};

module.exports = {
  createTask,
  viewAllTasks,
  viewTask,
  updateTask,
  updateSpecificfield,
  deleteTask,
};
