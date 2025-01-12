# routes Directory 📂

The `routes` directory contains all the route definitions for handling HTTP requests in the application.
It acts as a central location for routing logic, making it easier to manage and maintain routes for different parts of the app.
The directory includes a `taskRouter` that handles task-specific routes, as well as the `router.js` file that integrates and organizes these routes.

---

## Files and Descriptions 📃

### `taskRouter/` 📂

The `taskRouter` directory contains the routing logic for handling task-related HTTP requests.
It defines routes for creating, retrieving, updating, and deleting tasks, linking each route to the corresponding controller functions in the `TaskController`.
This separation of concerns ensures that the routing logic and business logic are neatly organized.

- **See**: [taskRouter README](./taskRouter/readme.md)

### `router.js` 📝

**Purpose**: The `router.js` file acts as the main router for the application, integrating all individual routers into one unified routing structure. In this file, we import the `taskRouter` and attach it under the `/tasks` path, making it part of the application's main routing system.

- **Functionality**:
  - **`/tasks`**: Routes task-related requests to the `taskRouter`.

---

## How to Use 🚀

1. **Integration**:
   - Import the `router.js` file into your Express app to manage all routes in one place.
   - Use the `router.js` file to organize and centralize your routing logic.

2. **Example**:
   Here's how to use the `router.js` in your Express application:

```javascript
const express = require('express');
const app = express();
const router = require('./routes/router');

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the centralized routes
app.use(router);

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
```

3. **Task Routing**:
   The `taskRouter` is integrated into the main router under the `/tasks` path. Any request made to `/tasks` will be handled by the routes defined in the `taskRouter`.

---

## Conclusion 🚀

The `routes` directory provides a structured way to organize the routing logic of the application.
By separating route definitions for different functionalities and centralizing them in `router.js`, the application becomes more scalable and maintainable.
This structure also ensures that task-related routes are neatly organized in the `taskRouter` module and integrated seamlessly into the main router for the application.