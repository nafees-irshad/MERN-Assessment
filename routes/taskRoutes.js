const express = require("express");
const router = express.Router();

//import controller
const {
  createTask,
  viewAllTasks,
  viewTask,
  updateTask,
  updateSpecificfield,
  deleteTask,
} = require("../controllers/taskController");

//import middleware
const authenticate = require("../authMiddleware/middleware");

//public routes
router.get("/", viewAllTasks);

//protected routes
//create routes
router.post("/create-task", authenticate, createTask);

//view task by id
router.get("/:id", authenticate, viewTask);

//update task
router.put("/:id", authenticate, updateTask);

//update Specific field
router.patch("/:id", authenticate, updateSpecificfield);

//delete task
router.delete("/:id", authenticate, deleteTask);

module.exports = router;
