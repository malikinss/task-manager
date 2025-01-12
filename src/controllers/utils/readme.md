# utils Directory 📂

This directory contains utility functions that assist in common tasks across the application, including validation, error handling, and database querying.

---

## Structure 📂

### `Validator/`
A folder containing a set of validation functions and a class that integrates them for task-related data validation.

- **`methods/`**: Contains the core validation methods for task ID, status, and text.
- **`Validator.js`**: The main class that exposes the validation methods for use in the application.

### `findRecords.js`
A utility function that helps query the database for records based on specified fields and values.

### `messagesHandler.js`
A centralized message handler to format and colorize messages, particularly for success and error messages in the console.

---

## Files and Descriptions 📃

### `Validator/` 📂

#### `Validator.js` 📝
**Purpose**: The `Validator` class exposes methods for validating task-related data, such as task ID, status, and text. It integrates core validation functions from the `methods/` directory.

- **Methods**:
  - `validateStatus`: Validates the task status.
  - `validateId`: Validates the task ID.
  - `validateText`: Validates the task text.

#### `methods/` 📂
The `methods/` folder contains the following files, which define individual validation functions:

1. **`validateId.js` 🆔**: Validates the task ID.
2. **`validateStatus.js` ✅**: Validates the task status.
3. **`validateText.js` 📝**: Validates the task text.

---

### `findRecords.js` 🔍
**Purpose**: Finds records in the database based on a specified field and value. It allows fetching one or multiple records based on the `many` parameter.

- **Parameters**:
  - `field`: The field to filter records by (string).
  - `value`: The value to match for the specified field (any type).
  - `Model`: The database model to query (object).
  - `many`: Whether to fetch multiple records or just one (boolean).

- **Returns**: A found record or an array of records.
- **Throws**: `ApiError` if inputs are invalid or no records are found.

---

### `messagesHandler.js` 📨
**Purpose**: Provides a centralized utility to handle colored messages for the console, including success and error messages.

- **Methods**:
  - `coloredString(text, color)`: Returns a colored string for console output using ANSI color codes.
  - **Message types**: 
    - `success`: Formats success messages.
    - `error`: Formats error messages.

- **Messages**: Includes various message formats for common application errors and actions, such as:
  - `actionFailed`: Indicates failure to perform an action.
  - `general`: General error message for an action.
  - `nullData`: Used when required data is missing.
  - `invalidStatus`: Error message for invalid status.
  - `invalidId`: Error message for invalid ID.

---

## How to Use 🚀

### **Validator Usage**:
1. **Setup**:
   - Ensure `ApiError` middleware and `messagesHandler` are available for error handling.
2. **Integration**:
   - Import the `Validator` class into your controllers or services where data validation is needed.
   - Use the `validateId`, `validateStatus`, or `validateText` methods to validate task data before database operations.

### **findRecords Usage**:
1. **Setup**:
   - Ensure your database model is passed correctly.
2. **Integration**:
   - Call `findRecords(field, value, Model, many)` where `field` is the field name, `value` is the value to match, `Model` is the database model, and `many` specifies whether to fetch one or many records.

### **messagesHandler Usage**:
1. **Setup**:
   - Import `messagesHandler` where formatted messages are required.
2. **Integration**:
   - Use `messages.success(entity, action)` for success messages.
   - Use `messages.errors.<errorType>` for error messages.

---

## Example Usage 📦

### Validator Example
```javascript
const validator = require('./utils/Validator');

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

### findRecords Example
```javascript
const findRecords = require('./utils/findRecords');
const TaskModel = require('./models/Task');

// Example usage to find a single task by ID
try {
    const task = await findRecords('id', 1, TaskModel);
    console.log(task);
} catch (error) {
    console.error(error.message);
}
```

### messagesHandler Example
```javascript
const messages = require('./utils/messagesHandler');

// Example usage for success message
console.log(messages.success("Task", "created"));

// Example usage for error message
console.log(messages.errors.nullData("Task", "ID"));
```

---

## Conclusion 🚀

The `utils` directory provides essential utility functions for validation, database querying, and message formatting. These utilities streamline common tasks and enhance error handling and data integrity across the application.