const Task = require("../../../models/Task");
const ApiError = require("../../../middleware/ApiError/ApiError");
const Validator = require("../../utils/Validator/Validator");

const findRecords = require("../../utils/findRecords");
const messages = require("../../utils/messagesHandler");

/**
 * Fetches all tasks by status from the database.
 * @param {object} req - The request object containing the status filter.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function for error handling.
 */
const getTasks = async (req, res, next) => {
    try {
        const status = req.body.status;
        let tasks;
        if (status) {
            Validator.validateStatus(status);
            tasks = await findRecords('status', status, Task, true);
        }
        else {
            tasks = await Task.findAll({});
        }

        // If no tasks found, throw a not found error
        if (!tasks.length) {
            throw ApiError.notFound(messages.errors.actionFailed("fetch", "Tasks"));
        }

        // Log success message (can be disabled in production)
        console.log(messages.success("Tasks", "fetched"));

        // Return the Task records as a JSON response
        return res.json({ tasks });
    } catch (e) {
        // Handle errors and pass to error handler
        return next(ApiError.internal(messages.errors.general("fetching", "Tasks", e.message)));
    }
};

module.exports = getTasks;
