const ApiError = require("../../../../middleware/ApiError/ApiError");
const messages = require("../../messagesHandler");

/**
 * Validates the task text.
 * @param {string} text - The text to validate.
 * @throws {ApiError} - If the text is invalid or not provided.
 */
const validateText = (text) => {
    // Check if text is provided
    if (text === null || text === undefined) {
        throw ApiError.badRequest(messages.errors.nullData("Task", "text"));
    }

    // Check if text is a non-empty string
    if (typeof text !== 'string' || text.trim() === '') {
        throw ApiError.badRequest(messages.errors.nullData("Task", "text"));
    }
};

module.exports = validateText;
