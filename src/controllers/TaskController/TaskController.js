const createTask = require("./methods/createTask");
const getTask = require("./methods/getTask");
const getTasks = require("./methods/getTasks");
const updateTask = require("./methods/updateTask");
const deleteTask = require("./methods/deleteTask");

class TaskController {
    /**
     * Create a new task.
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @param {function} next - The next middleware function for error handling.
     * @returns {object} The created task.
     */
    create = createTask;

    /**
     * Get a task by its ID.
     * @param {object} req - The request object containing the task ID.
     * @param {object} res - The response object.
     * @param {function} next - The next middleware function for error handling.
     * @returns {object} The task found by the given ID.
     */
    getById = getTask;

    /**
     * Get all tasks based on the given status.
     * @param {object} req - The request object containing the status.
     * @param {object} res - The response object.
     * @param {function} next - The next middleware function for error handling.
     * @returns {array} The list of tasks with the specified status.
     */
    getAll = getTasks;

    /**
     * Update a task's status by its ID.
     * @param {object} req - The request object containing the task ID and new status.
     * @param {object} res - The response object.
     * @param {function} next - The next middleware function for error handling.
     * @returns {object} The updated task.
     */
    update = updateTask;

    /**
     * Delete a task by its ID.
     * @param {object} req - The request object containing the task ID.
     * @param {object} res - The response object.
     * @param {function} next - The next middleware function for error handling.
     * @returns {object} A confirmation message for the task deletion.
     */
    delete = deleteTask;
}

module.exports = new TaskController();
