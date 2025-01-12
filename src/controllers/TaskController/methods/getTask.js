const Task = require("../../../models/Task");
const ApiError = require("../../../middleware/ApiError/ApiError");
const Validator = require("../../utils/Validator/Validator");

const findRecords = require("../../utils/findRecords");
const messages = require("../../utils/messagesHandler");

/**
 * Fetches a task by its ID from the database.
 * @param {object} req - The request object containing the task ID in the parameters.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function for error handling.
 */
const getTask = async (req, res, next) => {
    try {
        const { id: taskId } = req.params;  // Destructuring for easier access to the task ID

        // Validate the task ID
        Validator.validateId(taskId);

        // Find the task by ID
        const task = await findRecords("id", taskId, Task);

        // If task is not found, respond with not found error
        if (!task) {
            throw ApiError.notFound(
                messages.errors.actionFailed("fetch", "Task")
            );
        }

        // Return the task
        return res.json({ task });

    } catch (error) {
        // Log the error and forward to the error handler
        console.error(`Error while fetching task: ${error.message}`);
        next(
            ApiError.internal(
                messages.errors.general("fetching", "Task", error.message)
            )
        );
    }
};

module.exports = getTask;
