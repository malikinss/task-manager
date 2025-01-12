# controllers Directory 📂

This directory contains the controller files that handle the business logic for different routes and tasks within the application. It separates concerns by delegating specific responsibilities to each controller and encapsulating the logic for different components.

---

## Structure 📂

### `TaskController/` 📂
The `TaskController` folder contains logic related to handling tasks, including task creation, update, deletion, and retrieval. It acts as the intermediary between the views (or routes) and the underlying services or models that interact with the database.

- **`TaskController.js`**: The main file responsible for managing task-related requests, including validation, business logic, and response formatting.

### `utils/` 📂
This folder contains utility functions that assist in common tasks, such as validation, error handling, and database querying. The `utils` module helps reduce repetitive code and streamline the application flow.

- **`Validator/`**: A set of validation functions for task-related data, such as task ID, status, and text.
- **`findRecords.js`**: A utility function to query the database for records based on specified fields and values.
- **`messagesHandler.js`**: A utility to handle success and error messages with color formatting for console output.

---

## Files and Descriptions 📃

### `TaskController/` 📂

#### `TaskController.js` 📝
**Purpose**: Handles CRUD operations for tasks, including creation, retrieval, updating, and deletion. It ensures proper validation of task data and integrates with the models to perform necessary database operations.

- **Methods**:
  - `createTask`: Creates a new task and validates the provided data.
  - `getTask`: Retrieves a task based on the task ID.
  - `getTasks`: Retrieves a tasks based on the status or retrieces all of them.
  - `updateTask`: Updates an existing task.
  - `deleteTask`: Deletes a task from the database.

### `utils/` 📂

#### `Validator/` 📂

##### `Validator.js` 📝
**Purpose**: The `Validator` class exposes methods for validating task-related data, including task ID, status, and text.

- **Methods**:
  - `validateStatus`: Validates the task status.
  - `validateId`: Validates the task ID.
  - `validateText`: Validates the task text.

##### `methods/` 📂
The `methods/` folder contains the following files:

1. **`validateId.js` 🆔**: Validates the task ID.
2. **`validateStatus.js` ✅**: Validates the task status.
3. **`validateText.js` 📝**: Validates the task text.

#### `findRecords.js` 🔍
**Purpose**: Finds records in the database based on specified fields and values.

- **Parameters**:
  - `field`: The field to filter records by (string).
  - `value`: The value to match for the specified field (any type).
  - `Model`: The database model to query (object).
  - `many`: Whether to fetch one or many records (boolean).

- **Returns**: Found record(s).
- **Throws**: `ApiError` if inputs are invalid or no records are found.

#### `messagesHandler.js` 📨
**Purpose**: Centralizes message formatting for success and error messages, especially useful for displaying messages in the console.

- **Methods**:
  - `coloredString(text, color)`: Returns a colored string for console output.
  - **Message types**:
    - `success`: Formats success messages.
    - `error`: Formats error messages.
  
- **Common messages** include:
  - `actionFailed`: Message indicating failure of an action.
  - `invalidId`: Error message for invalid task ID.
  - `invalidStatus`: Error message for invalid task status.

---

## How to Use 🚀

### **TaskController Usage**:
1. **Setup**:
   - Import `TaskController` in your routing module.
   - Use the appropriate method (`createTask`, `getTask`, `updateTask`, `deleteTask`) based on the route and desired action.

2. **Integration**:
   - The `TaskController` interacts with the models and validation functions to ensure that data is processed correctly before performing actions.

### **Validator Usage**:
1. **Setup**:
   - Ensure `ApiError` middleware and `messagesHandler` are available for error handling.
2. **Integration**:
   - Import the `Validator` class where task validation is required, and use the `validateId`, `validateStatus`, and `validateText` methods before performing database operations.

### **findRecords Usage**:
1. **Setup**:
   - Ensure that the correct database model is passed.
2. **Integration**:
   - Call `findRecords(field, value, Model, many)` to fetch one or more records based on the criteria.

---

## Example Usage 📦

### TaskController Example
```javascript
const TaskController = require('./controllers/TaskController');

// Example usage in route
app.post('/tasks', TaskController.createTask);  // Creates a new task
```

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

---

## Conclusion 🚀

The `controllers` directory centralizes the logic for managing tasks and integrates with utilities like validation, error handling, and database querying. By separating concerns into modular controllers and utility functions, the application becomes more maintainable and scalable.