const Task = require("../../../models/Task");
const ApiError = require("../../../middleware/ApiError/ApiError");
const Validator = require("../../utils/Validator/Validator");

const findRecords = require("../../utils/findRecords");
const messages = require("../../utils/messagesHandler");


/**
 * Updates the status of an existing task.
 * @param {object} req - The request object containing the task ID and new status.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function for error handling.
 */
const updateTask = async (req, res, next) => {
    try {
        // Extract task ID from request parameters
        const taskId = req.params.id;
        Validator.validateId(taskId);

        const newStatus = req.body.status;
        Validator.validateStatus(newStatus);

        const taskToUpdate = await findRecords("id", taskId, Task);
        if (!taskToUpdate) {
            throw new ApiError.notFound(
                messages.errors.actionFailed("fetch", "Task")
            );
        }

        // Save the updated Task to the database
        await taskToUpdate.update({ status: newStatus });

        // Log success message
        console.log(messages.success("Task", "updated"));

        return res.json({taskToUpdate});
    } catch (e) {
        next(
            ApiError.badRequest(
                messages.errors.general("updating", "Task", e.message)
            )
        );
    }
};

module.exports = updateTask;