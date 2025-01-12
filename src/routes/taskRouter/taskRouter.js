const express = require("express");
const router = express.Router();

const TaskController = require("../../controllers/TaskController/TaskController");

router
    .route("/")
    .post(TaskController.create)
    .get(TaskController.getAll)

router
    .route("/:id")
    .get(TaskController.getById)
    .put(TaskController.update)
    .delete(TaskController.delete)

module.exports = router;