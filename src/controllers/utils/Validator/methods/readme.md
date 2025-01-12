# Validator Methods 🛠️

This directory contains internal validation methods that ensure the correct format and integrity of data before interacting with the task model in the database. Each file validates a specific aspect of a task, such as the task ID, status, and text.

---

## Structure 📂

### `methods/`
This folder includes the following validation methods:

1. **`validateId.js`**: Validates task ID.
2. **`validateStatus.js`**: Validates task status.
3. **`validateText.js`**: Validates task text.

---

## Files and Descriptions 📃

### `validateId.js` 🆔
**Purpose**: Validates the task ID.

- **Input**: Task ID (could be a string or number).
- **Output**: Throws an error if the ID is invalid.
- **Key Features**:
  - Checks if the ID is provided.
  - Ensures the ID is a valid integer.
  - Optionally checks if the ID is a positive integer.

### `validateStatus.js` ✅
**Purpose**: Validates the task status.

- **Input**: Task status (a string).
- **Output**: Throws an error if the status is invalid.
- **Key Features**:
  - Ensures that the status is a valid, non-empty string.
  - Validates that the status matches one of the predefined valid statuses: `'in progress'` or `'completed'`.

### `validateText.js` 📝
**Purpose**: Validates the task text.

- **Input**: Task text (a string).
- **Output**: Throws an error if the text is invalid.
- **Key Features**:
  - Ensures the text is provided and not null or undefined.
  - Validates that the text is a non-empty string.

---

## How to Use 🚀

1. **Setup**:
   - Ensure the `ApiError` middleware and `messagesHandler` are available in your project for proper error handling and message formatting.

2. **Integration**:
   - Import the validation methods into your controller or service layer where data validation is required.
   - Call the validation functions (`validateId`, `validateStatus`, `validateText`) before proceeding with database operations.

---

## Example Usage 📦

```javascript
const validateId = require('./methods/validateId');
const validateStatus = require('./methods/validateStatus');
const validateText = require('./methods/validateText');

// Example usage in controller
try {
    validateId(taskId);  // Validates the task ID
    validateStatus(taskStatus);  // Validates the task status
    validateText(taskText);  // Validates the task text
    // Proceed with further task operations
} catch (error) {
    // Handle validation error
    console.error(error.message);
}
```

---

## Conclusion ✅

The `methods/` directory provides essential validation for task-related data, ensuring that only valid and properly formatted data enters the database. This promotes data integrity and enhances error handling throughout the application.