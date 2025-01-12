# database Directory 📂

The `database` directory contains files responsible for connecting to and configuring the database for the application. This includes the creation of the Sequelize instance and testing the connection to ensure the database is accessible and operational.

---

## Structure 📂

### `dbConnect.js`
This file contains the logic to create a Sequelize instance, configure the connection, and test it by attempting to authenticate with the database.

---

## Files and Descriptions 📃

### `dbConnect.js` 📝

**Purpose**: The `dbConnect.js` file is responsible for setting up a connection to the SQLite database using Sequelize. It includes a method to create and configure the Sequelize instance and another to test the connection.

- **Methods**:
  - `createSequelizeInstance`: Creates and configures a new Sequelize instance to connect to an SQLite database.
  - `testConnection`: Attempts to authenticate the Sequelize instance with the database to ensure a successful connection.

**Key Features**:
- Uses `sqlite` as the database dialect.
- Configures the connection with the `taskmngr.db` file.
- Optionally logs queries to the console (disabled by default).

---

## How to Use 🚀

1. **Setup**:
   - Ensure that SQLite is installed and the `taskmngr.db` file exists in the project directory.

2. **Integration**:
   - Import the `sequelize` instance from `dbConnect.js` to interact with the database models throughout the application.
   - Use `sequelize.authenticate()` to check if the connection is successful at any point in the application.

---

## Example Usage 📦

```javascript
const sequelize = require('./database/dbConnect');

// Example usage to interact with the database
sequelize.authenticate()
    .then(() => {
        console.log("Database connection is successful!");
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error.message);
    });
```

---

## Conclusion 🚀

The `dbConnect.js` file provides a simple way to connect to and test a SQLite database using Sequelize. It ensures that the database connection is functional before performing any database operations, helping to avoid runtime errors related to database access.