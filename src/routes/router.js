const express = require("express");
const router = express.Router();

const taskRouter = require("./taskRouter/taskRouter");

// Task routes
router.use("/tasks", taskRouter);

module.exports = router;