const ApiError = require("../../middleware/ApiError/ApiError");
const messages = require("./messagesHandler");

/**
 * Finds records in the database based on a specified field and value.
 * @param {string} field - The field to filter records by.
 * @param {any} value - The value to match for the specified field.
 * @param {object} Model - The database model to query.
 * @param {boolean} [many=false] - Whether to fetch multiple records or just one.
 * @returns {object|object[]} - The found record(s).
 * @throws {ApiError} - If inputs are invalid or no records are found.
 */
const findRecords = async (field, value, Model, many = false) => {
    try {
        // Validate inputs
        if (!field || typeof field !== "string") {
            throw ApiError.badRequest(messages.errors.nullData("Field", ""));
        }

        if (value === null || value === undefined) {
            throw ApiError.badRequest(messages.errors.nullData("Value", ""));
        }

        if (!Model || typeof Model.findOne !== "function") {
            throw ApiError.badRequest(messages.errors.nullData("Model", ""));
        }

        // Define query options
        const queryOptions = { where: { [field]: value } };

        // Execute query based on 'many' flag
        const result = many
            ? await Model.findAll(queryOptions)
            : await Model.findOne(queryOptions);

        // Handle case where no records are found
        if (!result || (Array.isArray(result) && result.length === 0)) {
            throw ApiError.notFound(
                messages.errors.actionFailed("find", "records")
            );
        }

        return result;
    } catch (error) {
        throw ApiError.internal(
            messages.errors.general("fetching", "records", error.message)
        );
    }
};

module.exports = findRecords;
