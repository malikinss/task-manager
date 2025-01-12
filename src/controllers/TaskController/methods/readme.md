# Methods 🛠️

This directory contains the internal implementations of the controller methods for managing tasks. Each file represents a specific functionality for interacting with the `Task` model in the database. These methods ensure robust error handling, validation, and proper interaction with the database.

## Files and Descriptions 📂

### `createTask.js`
**Purpose**: Handles the creation of a new task in the database.  
- **Input**: Task data (`text`) from the request body.  
- **Output**: The newly created task object.  
- **Key Features**:
  - Validates the task data before insertion.
  - Assigns a default status of "in progress."
  - Returns a detailed error if creation fails.

### `getTask.js`
**Purpose**: Fetches a specific task by its ID.  
- **Input**: Task ID from the request parameters.  
- **Output**: The task object corresponding to the given ID.  
- **Key Features**:
  - Ensures the task ID is valid.
  - Returns a 404 error if the task is not found.
  - Provides error handling for database or validation issues.

### `getTasks.js`
**Purpose**: Retrieves all tasks or tasks filtered by status.  
- **Input**: Optional `status` filter from the request body.  
- **Output**: An array of tasks matching the criteria.  
- **Key Features**:
  - Validates the status filter if provided.
  - Returns a 404 error if no tasks match the criteria.
  - Supports fetching all tasks when no filter is applied.

### `updateTask.js`
**Purpose**: Updates the status of a specific task.  
- **Input**: Task ID from the request parameters and the new status from the request body.  
- **Output**: The updated task object.  
- **Key Features**:
  - Validates the task ID and the new status.
  - Ensures the task exists before updating.
  - Handles errors during the update process.

### `deleteTask.js`
**Purpose**: Deletes a task from the database.  
- **Input**: Task ID from the request parameters.  
- **Output**: Success message upon deletion.  
- **Key Features**:
  - Validates the task ID before deletion.
  - Ensures the task exists before attempting to delete.
  - Logs and handles errors during the deletion process.

## Common Dependencies 📦
- **Models**: Interact with the `Task` model for database operations.
- **Validation**: Utilizes a custom `Validator` utility to validate inputs such as task IDs, text, and status.
- **Error Handling**: Leverages the `ApiError` middleware for structured error responses.
- **Utility Functions**:
  - `findRecords`: Simplifies database queries for finding records.
  - `messagesHandler`: Standardizes success and error messages for consistent responses.

## How to Use 🔧
- Include these methods in your controllers to manage tasks.
- Ensure the necessary middleware and utilities are set up in your project to support validation, error handling, and logging.
- Customize the methods if additional features or business logic are required.

## Conclusion 🚀
The `methods` directory provides a clean and modular implementation of task management operations, ensuring scalability, maintainability, and ease of integration into larger applications.
