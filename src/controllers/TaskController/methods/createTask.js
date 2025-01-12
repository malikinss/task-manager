const Task = require("../../../models/Task");
const ApiError = require("../../../middleware/ApiError/ApiError");
const Validator = require("../../utils/Validator/Validator");

const messages = require("../../utils/messagesHandler");

/**
 * Creates a new task in the database.
 * @param {object} req - The request object containing task data in the body.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function for error handling.
 */
const createTask = async (req, res, next) => {
    try {
        const { text } = req.body;  // Using destructuring for cleaner code
        const status = 'in progress'; // Static assignment as per original code, can be extended for dynamic status

        // Validate input data
        Validator.validateText(text);

        // Create the new task
        const newTask = await Task.create({ text, status });

        // Check if task creation failed
        if (!newTask) {
            throw ApiError.internal(
                messages.errors.actionFailed("create", "Task")
            );
        }

        console.log(messages.success("Task", "created"));

        // Send the response
        return res.json({ newTask });
    } catch (error) {
        // Log the error and pass to the next middleware for proper error handling
        console.error(`Error while creating task: ${error.message}`);
        next(
            ApiError.internal(
                messages.errors.general("creating", "Task", error.message)
            )
        );
    }
};

module.exports = createTask;
