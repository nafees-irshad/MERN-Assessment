/** @format */

const express = require("express");
const connectDB = require("./config/db.js");

//import routes
//user routes
const userRoutes = require("./routes/userRoutes.js");
//tasks routes
const taskRoutes = require("./routes/taskRoutes.js");

const app = express();
connectDB();
app.use(express.json());

//use routes
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
