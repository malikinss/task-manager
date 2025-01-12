const express = require("express");
const errorHandler = require("./middleware/errorHandling/errorHandler")
const sequelize = require("./database/dbConnect");
const router = require("./routes/router");

const app = express();

// Middleware to parse JSON requests
app.use(express.json()); 

// API Routes
app.use("/api", router);

// Error handling middleware should be at the end of all middlewares
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        // Establish a connection to the database
        await sequelize.authenticate();
        await sequelize.sync()
            .then(() => console.log('Database synchronized'))
            .catch(err => console.error('Error synchronizing database:', err)); // Sync models with the database

        // Start the server
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        // Improved error handling: log the error and exit the process if critical
        console.error("Error starting server:", error.message);
        process.exit(1); // Exit the process to prevent the server from running in an invalid state
    }
};

start();