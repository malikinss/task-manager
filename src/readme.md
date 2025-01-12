# Backend Application 📂

This directory contains the backend logic for the application.
It is organized into several subdirectories, each containing files that are responsible for specific tasks within the application.
The backend is built using Express and Sequelize, with SQLite as the database.

---

## Structure 📂

### `controllers/` 📂
This directory contains controller files that handle the business logic for different routes and tasks within the application.
It acts as the intermediary between the views (or routes) and the underlying services or models that interact with the database.

- **`TaskController.js`**: Manages task-related requests, including creation, update, deletion, and retrieval.

### `database/` 📂
The `database` directory contains files responsible for connecting to and configuring the database for the application.

- **`dbConnect.js`**: Configures and tests the connection to the SQLite database.

### `middleware/` 📂
This directory contains middleware components for handling errors and exceptions within the application.

- **`ApiError.js`**: Defines a custom error class to represent API-specific errors.
- **`errorHandler.js`**: Processes API errors and generates consistent API responses.

### `models/` 📂
The `models` directory contains Sequelize model definitions that represent the structure of the tables in the database.

- **`Task.js`**: Defines the schema for the `Tasks` table and performs CRUD operations on tasks.

### `routes/` 📂
This directory contains route definitions that map incoming requests to specific controller actions.

- **`taskRoutes.js`**: Defines the routes for handling tasks, including task creation, update, and deletion.

### `app.js` 📝
The entry point for the application. It sets up the Express server, middleware, routes, and database connection.

### `taskmngr.db` 🗄️
The SQLite database file that stores all task-related data.

---

## Files and Descriptions 📃

### `controllers/` 📂

#### `TaskController.js` 📝
**Purpose**: Handles CRUD operations for tasks, including task creation, retrieval, updating, and deletion. It ensures proper validation of task data and integrates with the models to perform necessary database operations.

- **Methods**:
  - `createTask`: Creates a new task and validates the provided data.
  - `getTask`: Retrieves a task based on the task ID.
  - `getTasks`: Retrieves tasks based on the status or retrieves all tasks.
  - `updateTask`: Updates an existing task.
  - `deleteTask`: Deletes a task from the database.

#### `utils/` 📂

- **`Validator.js`**: Provides methods for validating task-related data.
- **`findRecords.js`**: A utility function to query the database for records based on specified fields and values.
- **`messagesHandler.js`**: Handles message formatting for success and error messages, useful for console output.

---

### `database/` 📂

#### `dbConnect.js` 📝
**Purpose**: Creates and configures a Sequelize instance to connect to the SQLite database and tests the connection.

- **Methods**:
  - `createSequelizeInstance`: Creates and configures the Sequelize instance.
  - `testConnection`: Attempts to authenticate the connection.

---

### `middleware/` 📂

#### `ApiError.js` 📝
**Purpose**: Defines a custom error class to represent API-specific errors with specific HTTP status codes.

- **Methods**:
  - Static methods like `badRequest()`, `notFound()`, and `internalError()` to generate specific API errors.

#### `errorHandler.js` 📝
**Purpose**: Middleware that processes errors in the application, sending appropriate HTTP status codes and messages in a consistent format.

---

### `models/` 📂

#### `Task.js` 📝
**Purpose**: Defines the schema for the `Tasks` table, including task-related fields and validation rules.

- **Fields**:
  - `id`: Unique identifier for the task (primary key).
  - `text`: Task description.
  - `status`: Task status (e.g., "in progress" or "completed").

---

## How to Use 🚀

### **TaskController Usage**:
1. Import `TaskController` in your route file.
2. Use the appropriate method (`createTask`, `getTask`, `updateTask`, `deleteTask`) based on the desired action.

### **dbConnect Usage**:
1. Import the `sequelize` instance from `dbConnect.js`.
2. Use `sequelize.authenticate()` to ensure a successful connection.

### **ApiError Usage**:
1. Create custom API errors using the `ApiError` class.
2. Pass the error to the `errorHandler` middleware to process it.

---

## Example Usage 📦

### TaskController Example
```javascript
const TaskController = require('./controllers/TaskController');

// Create a new task
app.post('/tasks', TaskController.createTask);
```

### dbConnect Example
```javascript
const sequelize = require('./database/dbConnect');

sequelize.authenticate()
    .then(() => {
        console.log("Database connection is successful!");
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error.message);
    });
```

### ApiError Example
```javascript
const ApiError = require('./middleware/ApiError');

// Creating a 400 Bad Request error
const badRequestError = ApiError.badRequest("Invalid parameters");
console.log(badRequestError.status);  // 400
console.log(badRequestError.message); // "Invalid parameters"
```

---

## Conclusion 🚀

The backend application is organized into distinct modules that handle specific responsibilities, such as task management, database connectivity, error handling, and route definition. This modular approach improves maintainability, scalability, and readability, making it easier to extend the application as needed.