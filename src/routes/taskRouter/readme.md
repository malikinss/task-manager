# taskRouter

The `taskRouter` directory contains the routing logic for handling task-related HTTP requests. The `taskRouter.js` file defines the routes for creating, retrieving, updating, and deleting tasks, linking each route to the corresponding controller functions in the `TaskController`. This ensures that the logic for handling tasks is cleanly separated from the routing logic.

---

## Files and Descriptions 📃

### `taskRouter.js` 📝

**Purpose**: The `taskRouter.js` file defines all the routes related to tasks, including the HTTP methods (`GET`, `POST`, `PUT`, `DELETE`). Each route is connected to a corresponding method in the `TaskController` to manage the task data.

- **Routes**:
  - **POST `/`**: Creates a new task by invoking `TaskController.create`.
  - **GET `/`**: Retrieves all tasks by invoking `TaskController.getAll`.
  - **GET `/:id`**: Retrieves a specific task by ID by invoking `TaskController.getById`.
  - **PUT `/:id`**: Updates a specific task by ID by invoking `TaskController.update`.
  - **DELETE `/:id`**: Deletes a specific task by ID by invoking `TaskController.delete`.

---

## How to Use 🚀

1. **Integration**:
   - Import the `taskRouter` into your Express application to handle task-related API routes.
   - Attach it to your app using `app.use('/tasks', taskRouter)` to prefix all task routes with `/tasks`.

2. **Example**:
   Here's how to use the `taskRouter` in your Express application:

```javascript
const express = require('express');
const app = express();
const taskRouter = require('./routes/taskRouter/taskRouter');

app.use(express.json());  // Middleware to parse JSON request bodies
app.use('/tasks', taskRouter);  // Task routes under the `/tasks` path

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
```

3. **Controller Methods**:
   The router links to the controller methods for handling requests. For example:

- `TaskController.create`: Creates a new task.
- `TaskController.getAll`: Retrieves all tasks.
- `TaskController.getById`: Retrieves a task by its ID.
- `TaskController.update`: Updates a task by its ID.
- `TaskController.delete`: Deletes a task by its ID.

---

## Conclusion 🚀

The `taskRouter` module simplifies the routing for task-related operations in my application.
By linking HTTP methods to controller functions, it keeps my routing and business logic separate, making the application easier to maintain and extend.
This structure enables clear and efficient handling of task data in my app's API.