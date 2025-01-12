const validateStatus = require("./methods/validateStatus");
const validateId = require("./methods/validateId");
const validateText = require("./methods/validateText");

/**
 * Validator class that provides methods for validating different types of inputs.
 */
class Validator {
    /**
     * Validates the task status.
     * @param {string} status - The status to validate.
     * @throws {ApiError} - If the status is invalid.
     */
    validateStatus = validateStatus;

    /**
     * Validates the task ID.
     * @param {number|string} id - The ID to validate.
     * @throws {ApiError} - If the ID is invalid.
     */
    validateId = validateId;

    /**
     * Validates the task text.
     * @param {string} text - The text to validate.
     * @throws {ApiError} - If the text is invalid.
     */
    validateText = validateText;
}

// Exporting an instance of the Validator class for reuse across the application.
module.exports = new Validator();
