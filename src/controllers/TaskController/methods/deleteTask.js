const Task = require("../../../models/Task");
const ApiError = require("../../../middleware/ApiError/ApiError");
const Validator = require("../../utils/Validator/Validator");

const findRecords = require("../../utils/findRecords");
const messages = require("../../utils/messagesHandler");

/**
 * Deletes a task from the database.
 * @param {object} req - The request object containing the task ID in the parameters.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function for error handling.
 */
const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;  // Destructuring for easier access to the ID

        // Validate the task ID
        Validator.validateId(id);

        // Find the task by ID
        const taskToDelete = await findRecords("id", id, Task);

        // If task doesn't exist, respond with not found error
        if (!taskToDelete) {
            throw ApiError.notFound(
                messages.errors.actionFailed("fetch", "Task")
            );
        }

        // Delete the task
        await taskToDelete.destroy();

        // Log the success of the deletion
        console.log(messages.success("Task", "deleted"));

        // Return the success message
        return res.json({ message: messages.success("Task", "deleted") });
    } catch (error) {
        // Log the error and forward to the error handler
        console.error(`Error while deleting task: ${error.message}`);
        next(
            ApiError.internal(
                messages.errors.general("deleting", "Task", error.message)
            )
        );
    }
};

module.exports = deleteTask;
