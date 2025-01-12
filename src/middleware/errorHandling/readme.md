# errorHandler

The `errorHandler` directory contains middleware that handles errors within application. It ensures that any errors are processed properly and provides a consistent response structure, especially for API errors. This middleware works with the `ApiError` class to handle custom API errors and ensures unexpected errors are also captured and logged.

---

## Files and Descriptions 📃

### `errorHandler.js` 📝

**Purpose**: The `errorHandler.js` file defines a middleware function that is used for error handling in your application. It processes errors and provides a consistent response, logging the error and sending appropriate status codes to the client.

- **Parameters**:
  - `error`: The error that triggered the middleware (either an `ApiError` or an unexpected error).
  - `req`: The request object (not directly used in this middleware).
  - `res`: The response object used to send the error response to the client.
  - `next`: The next middleware function (not used in this case, as the error handling ends the request-response cycle).

- **Functionality**:
  - If the error is an instance of the `ApiError` class, the middleware will log the error and return a response with the appropriate HTTP status code and message.
  - If the error is not an `ApiError`, it will be considered an unexpected error, and a generic 500 Internal Server Error response will be sent.

---

## How to Use 🚀

1. **Integration**:
   - Import the `errorHandler` middleware into your application and add it to the middleware stack. This should be placed after all your route handlers to catch any errors thrown.

2. **Example**:
   Here's how to use the `errorHandler` middleware in an Express application:

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

3. **Custom Error Handling**:
   You can trigger custom `ApiError` instances using the `ApiError` class. These errors will be handled specifically, and the appropriate HTTP status and message will be returned.

---

## Conclusion 🚀

The `errorHandler` middleware ensures that your application responds consistently to both custom API errors and unexpected errors. By integrating this middleware into your application, you can improve error handling, streamline debugging, and enhance the overall user experience with clear and structured error responses.