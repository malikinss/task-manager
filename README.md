# Task Management Platform API (TODO App) 🚀

## Description 📝

This is a minimal backend API for a task management platform (TODO app).
It provides features to create, update, delete, and retrieve tasks, while supporting status filters ("in progress" or "completed").
The app uses Node.js for the backend, SQLite for the database, and Docker for containerization.

## Purpose 🎯

The backend serves as the core API for managing tasks in a to-do list application.
It allows users to perform CRUD operations on tasks and filter them based on their status.
The API is containerized using Docker, making it easy to deploy and run in any environment.

## Project Structure 📂

The project is organized into several directories to separate concerns and maintain code clarity:

- **`controllers/`**: Contains logic for handling task-related requests.
- **`database/`**: Manages database connection and configuration.
- **`middleware/`**: Defines error handling and custom error messages.
- **`models/`**: Contains Sequelize models for interacting with the database.
- **`routes/`**: Defines the application's HTTP routes.
- **`app.js`**: The main entry point of the application.
- **`taskmngr.db`**: The SQLite database file used to store task data.

## How It Works 🔍

### Core Functionalities:
- **Create a task**: Allows users to create a new task with a text and status ("in progress" or "completed").
- **Update a task**: Users can update the status of an existing task.
- **Delete a task**: Tasks can be deleted from the database.
- **Retrieve tasks**: List of tasks can be filtered based on their status or retrieved in full.

### Database:
- The backend uses SQLite as the database to store task data in the `taskmngr.db` file.
- The `models/Task` defines the schema for tasks.
- The `database/dbConnect.js` handles the connection to the SQLite database using Sequelize.

### Error Handling:
- Custom errors are managed using the `middleware/ApiError.js` and `middleware/errorHandling/errorHandler.js`.
- Errors are thrown for invalid operations, such as invalid task status or missing task data.

### Docker Setup:
- The backend is containerized using Docker. The Dockerfile ensures that the app runs smoothly within a container using the `docker run` command.

## API Endpoints 📡

| HTTP Method | Endpoint         | Description                                         | Request Body                                 | Response                                                                                                                                 |
|-------------|------------------|-----------------------------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| POST        | `/tasks`         | Create a new task                                  | `{ "text": "Task description", "status": "in progress" }`   | `201 Created` or error                                                                                                                   |
| GET         | `/tasks`         | Retrieve all tasks (optional filter by status)     | `status: "in progress" or "completed"`        | Array of tasks, each containing `id`, `text`, and `status` fields.                                                                     |
| GET         | `/tasks/:id`     | Retrieve a specific task by ID                     | `id`: Task ID                                 | Task object, including `id`, `text`, and `status` fields.                                                                              |
| PUT         | `/tasks/:id`     | Update the status of an existing task              | `{ "status": "in progress" or "completed" }`  | `200 OK` or error                                                                                                                       |
| DELETE      | `/tasks/:id`     | Delete a task by ID                                | `id`: Task ID                                 | `204 No Content` or error                                                                                                               |

### Example Request/Response

#### Create Task:
**Request**:
```bash
POST /tasks
{
  "text": "Buy groceries",
  "status": "in progress"
}
```
**Response**:
```json
{
  "id": 1,
  "text": "Buy groceries",
  "status": "in progress"
}
```

#### Retrieve Tasks:
**Request**:
```bash
GET /tasks?status=in progress
```
**Response**:
```json
[
  {
    "id": 1,
    "text": "Buy groceries",
    "status": "in progress"
  },
  {
    "id": 2,
    "text": "Do laundry",
    "status": "in progress"
  }
]
```

## Setup Instructions 📦

### Prerequisites:
- Node.js (v14 or higher)
- Docker (optional for containerization)

### Installation:
1. Clone the repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application locally:
   ```bash
   npm start
   ```

4. **(Optional)** Run the application in a Docker container:
   - Build the Docker image:
     ```bash
     docker build -t todo-app-backend .
     ```
   - Run the container:
     ```bash
     docker run -p 3000:3000 todo-app-backend
     ```

5. The application will be accessible at `http://localhost:3000`.

## Conclusion 🚀

This backend API provides a clean and scalable solution for managing tasks in a to-do list app. 
It includes necessary CRUD functionalities, integrates with an SQLite database, and supports error handling.
The API is containerized using Docker for easy deployment and scalability.

By organizing the code into controllers, models, and middleware, the application follows best practices for maintainability and clarity.
You can easily extend or modify the API for additional features in the future.