# TaskController 🗂️

This directory contains the `TaskController` class and its related methods, providing a modular and efficient way to manage tasks in your application. The structure ensures clear separation of logic, making the codebase easy to maintain and extend.

---

## Structure 📂

### `methods/`
This folder contains individual files that implement core task management functionalities.

### `TaskController.js`
A central class that organizes and exposes the task management methods for use in your application.

---

## Files and Descriptions 📃

### `methods` 🛠️
This directory includes the following methods:

1. **`createTask.js`**
   - **Purpose**: Creates a new task in the database.
   - **Key Features**:
     - Validates the task data.
     - Sets a default status of "in progress."
     - Handles errors gracefully.

2. **`getTask.js`**
   - **Purpose**: Retrieves a specific task by ID.
   - **Key Features**:
     - Ensures the ID is valid.
     - Returns a 404 error if the task doesn't exist.

3. **`getTasks.js`**
   - **Purpose**: Retrieves tasks based on status or all tasks if no filter is provided.
   - **Key Features**:
     - Supports optional filtering by status.
     - Handles cases where no tasks match the criteria.

4. **`updateTask.js`**
   - **Purpose**: Updates the status of a task.
   - **Key Features**:
     - Validates the task ID and new status.
     - Ensures the task exists before updating.

5. **`deleteTask.js`**
   - **Purpose**: Deletes a task from the database.
   - **Key Features**:
     - Validates the task ID.
     - Handles errors during the deletion process.

### `TaskController.js` 🎛️
This file exports the `TaskController` class, which organizes and exposes the methods from the `methods` directory. The methods include:

- **`create`**: Adds a new task.
- **`getById`**: Retrieves a task by ID.
- **`getAll`**: Fetches tasks based on a status or retrieves all tasks.
- **`update`**: Updates a task's status.
- **`delete`**: Deletes a specific task.

---

## How to Use 🚀

1. **Setup**:
   - Ensure your project includes the necessary middleware for error handling, validation, and database connections.

2. **Integration**:
   - Import the `TaskController` class in your routing or service layer.
   - Use the provided methods (`create`, `getById`, `getAll`, `update`, `delete`) to manage tasks.

3. **Customization**:
   - Modify or extend the methods in the `methods` directory to meet specific requirements.

---

## Example Usage 📦

```javascript
const TaskController = require('./TaskController');

// Example route setup using Express
app.post('/tasks', TaskController.create);
app.get('/tasks/:id', TaskController.getById);
app.get('/tasks', TaskController.getAll);
app.put('/tasks/:id', TaskController.update);
app.delete('/tasks/:id', TaskController.delete);
```

---

## Conclusion ✅

The `TaskController` directory offers a clean, modular, and scalable structure for task management. By separating logic into distinct files and organizing methods in a central controller, it ensures maintainability and ease of integration into larger applications.