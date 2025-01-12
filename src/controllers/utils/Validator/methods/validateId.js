const ApiError = require("../../../../middleware/ApiError/ApiError");
const messages = require("../../messagesHandler");

/**
 * Validates the task ID.
 * @param {number|string} id - The ID to validate.
 * @throws {ApiError} - If the ID is invalid or not provided.
 */
const validateId = (id) => {
    // Check if ID is provided
    if (id === null || id === undefined) {
        throw ApiError.badRequest(messages.errors.nullData("Task", "id"));
    }

    // Convert to number if ID is a string
    const numericId = typeof id === 'string' ? Number(id) : id;

    // Check if ID is a valid integer
    if (!Number.isInteger(numericId)) {
        throw ApiError.badRequest(messages.errors.invalidId);
    }

    // Optional: Check if ID falls within a valid range (e.g., positive integers)
    if (numericId <= 0) {
        throw ApiError.badRequest(messages.errors.invalidId);
    }
};

module.exports = validateId;
