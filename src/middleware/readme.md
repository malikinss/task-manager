# middleware Directory 📂

The `middleware` directory contains essential components for handling errors and exceptions within my application.
It includes the `ApiError` class for creating custom API errors and the `errorHandler` middleware for processing these errors and generating consistent API responses.

---

## Files and Descriptions 📃

### `ApiError` Directory 📂

The `ApiError` directory defines a custom error class that is used to represent API-specific errors with specific HTTP status codes. It allows me to handle different error types like `400 Bad Request`, `404 Not Found`, and more.

- **`ApiError.js`**: Contains the `ApiError` class with static methods to generate common API errors. Each error type has an associated HTTP status and message.

---

### `errorHandling` Directory 📂

The `errorHandling` directory contains the `errorHandler.js` middleware that is responsible for handling errors in my application. It processes both custom `ApiError` errors and unexpected errors, ensuring that a consistent response format is returned to the client.

- **`errorHandler.js`**: A middleware function that handles errors by logging them and sending appropriate HTTP status codes and error messages.

---

## How to Use 🚀

### **1. ApiError Class Usage**

The `ApiError` class allows you to create custom API errors with specific HTTP status codes.

**Example**:
```javascript
const ApiError = require('./ApiError');

// Creating a 400 Bad Request error
const badRequestError = ApiError.badRequest("Invalid parameters");
console.log(badRequestError.status);  // 400
console.log(badRequestError.message); // "Invalid parameters"
```

### **2. errorHandler Middleware Integration**

The `errorHandler` middleware should be added after all my routes to catch any errors thrown by the application.

**Example**:
```javascript
const express = require('express');
const app = express();
const errorHandler = require('./errorHandling/errorHandler');
const ApiError = require('./ApiError/ApiError');

// Example route that triggers a custom API error
app.get('/example', (req, res, next) => {
    const error = ApiError.notFound("Resource not found");
    next(error); // Pass the error to the next middleware (error handler)
});

// Example route that triggers an unexpected error
app.get('/unexpected', (req, res, next) => {
    const error = new Error("Something went wrong!");
    next(error); // Pass the unexpected error to the error handler
});

// Use the error handler middleware
app.use(errorHandler);

// Start the server
app.listen(3000, () => console.log("Server is running on port 3000"));
```

---

## Conclusion 🚀

The `middleware` directory provides a robust and consistent approach to error handling in my application. By using the `ApiError` class to create custom errors and the `errorHandler` middleware to process them, I can ensure that all errors are handled in a structured way, improving debugging and the overall user experience.