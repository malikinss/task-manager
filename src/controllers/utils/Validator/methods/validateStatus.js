const ApiError = require("../../../../middleware/ApiError/ApiError");
const messages = require("../../messagesHandler");

// List of valid task statuses
const VALID_STATUSES = ['in progress', 'completed'];

/**
 * Validates the task status.
 * @param {string} status - The status to validate.
 * @throws {ApiError} - If the status is invalid or not provided.
 */
const validateStatus = (status) => {
    if (!status || typeof status !== 'string' || !status.trim()) {
        throw ApiError.badRequest(messages.errors.nullData("Task", "status"));
    }

    const trimmedStatus = status.trim();

    if (!VALID_STATUSES.includes(trimmedStatus)) {
        throw ApiError.badRequest(messages.errors.invalidStatus);
    }
};

module.exports = validateStatus;
