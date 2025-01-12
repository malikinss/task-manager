# ApiError Directory 📂

The `ApiError` directory contains a custom error class used to represent API errors with specific HTTP status codes. It extends the built-in `Error` class, adding additional properties for the HTTP status and custom error messages. This class is designed to simplify the creation of API error responses with various status codes such as `400`, `500`, `403`, and `404`.

---

## Files and Descriptions 📃

### `ApiError.js` 📝

**Purpose**: The `ApiError.js` file defines the `ApiError` class, which customizes error handling for API responses. It provides static methods for creating common API error responses like `400 Bad Request`, `500 Internal Server Error`, `403 Forbidden`, and `404 Not Found`.

- **Constructor**:
  - `status`: The HTTP status code representing the type of error (e.g., `400`, `404`, etc.).
  - `message`: A message that describes the error.

- **Static Methods**:
  - `badRequest(message)`: Creates a `400` error.
  - `internal(message)`: Creates a `500` error.
  - `forbidden(message)`: Creates a `403` error.
  - `notFound(message)`: Creates a `404` error.

---

## How to Use 🚀

1. **Integration**:
   - Import the `ApiError` class to create API errors with specific HTTP status codes.
   - Use the static methods to generate the error as needed.

2. **Example**:
   You can use the `ApiError` class like this:

```javascript
const ApiError = require('./ApiError');

// Creating a 400 Bad Request error
const error400 = ApiError.badRequest("Invalid request parameters");
console.log(error400.status);  // 400
console.log(error400.message); // "Invalid request parameters"

// Creating a 500 Internal Server Error
const error500 = ApiError.internal("Unexpected server issue");
console.log(error500.status);  // 500
console.log(error500.message); // "Unexpected server issue"

// Creating a 403 Forbidden error
const error403 = ApiError.forbidden("You do not have permission to access this resource");
console.log(error403.status);  // 403
console.log(error403.message); // "You do not have permission to access this resource"

// Creating a 404 Not Found error
const error404 = ApiError.notFound("The requested resource was not found");
console.log(error404.status);  // 404
console.log(error404.message); // "The requested resource was not found"
```

---

## Conclusion 🚀

The `ApiError` class is a simple yet powerful tool for handling API errors in your application. It provides a structured way to represent different HTTP error responses with clear status codes and messages. By using this class, you can standardize error handling in your API and ensure consistency across all your error responses.