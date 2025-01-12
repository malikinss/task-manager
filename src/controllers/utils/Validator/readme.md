# Validator 🛠️

The `Validator` class provides a convenient interface to validate various aspects of task data, such as task ID, status, and text. It includes methods that integrate existing validation functions to ensure data integrity before interacting with the database.

---

## Structure 📂

### `Validator/`
This folder contains:

- **`methods/`**: A subdirectory containing the core validation methods for task ID, status, and text.
- **`Validator.js`**: The main class that exposes the validation methods to be used throughout the application.

---

## Files and Descriptions 📃

### `Validator.js` 📝
**Purpose**: This class integrates the validation methods into a single, reusable instance. It provides a clean interface for validating task-related data.

- **Methods**:
  - `validateStatus`: Validates the task status by calling the corresponding method from `methods/validateStatus.js`.
  - `validateId`: Validates the task ID by calling the corresponding method from `methods/validateId.js`.
  - `validateText`: Validates the task text by calling the corresponding method from `methods/validateText.js`.

### `methods/` 📂
The `methods/` directory contains individual validation methods that handle specific tasks related to validating the task data. These methods ensure that the provided task data is in the correct format.

1. **`validateId.js`** 🆔: Validates the task ID.
2. **`validateStatus.js`** ✅: Validates the task status.
3. **`validateText.js`** 📝: Validates the task text.

---

## How to Use 🚀

1. **Setup**:
   - Ensure that `ApiError` middleware and `messagesHandler` are available in your project for error handling and message formatting.

2. **Integration**:
   - Import the `Validator` class into the controller or service where task data validation is needed.
   - Use the class methods (`validateId`, `validateStatus`, `validateText`) to validate task data before proceeding with database operations.

---

## Example Usage 📦

```javascript
const validator = require('./Validator');

// Example usage in controller
try {
    validator.validateId(taskId);  // Validates the task ID
    validator.validateStatus(taskStatus);  // Validates the task status
    validator.validateText(taskText);  // Validates the task text
    // Proceed with further task operations
} catch (error) {
    // Handle validation error
    console.error(error.message);
}
```

---

## Conclusion ✅

The `Validator` class simplifies data validation by providing an easy-to-use interface for validating task data. It leverages core validation methods from the `methods/` directory to ensure that task-related data is correctly formatted and meets the necessary requirements, helping to maintain data integrity and improve error handling across the application.