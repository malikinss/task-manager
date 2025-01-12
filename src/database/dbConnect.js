const { Sequelize } = require("sequelize");
const path = require("path");

/**
 * Create and configure a Sequelize instance for database connection.
 * @returns {Sequelize} A configured Sequelize instance.
 */
const createSequelizeInstance = () => {
    const sequelize = new Sequelize({
        dialect: "sqlite", // Specify the dialect used (SQLite)
        storage: path.resolve(__dirname, "../taskmngr.db"), // Path to the database file
        logging: false, // Disable request logging, to enable set true
    });

    return sequelize;
};

/**
 * Test the connection to the database to ensure it is operational.
 * @param {Sequelize} sequelize - The Sequelize instance to test.
 * @returns {Promise<void>} Resolves if the connection is successful; logs an error and terminates the process if it fails.
 */
const testConnection = async (sequelize) => {
    try {
        await sequelize.authenticate();
        console.log("Database connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error.message);
        process.exit(1); // Terminate the process on error
    }
};

// Initialize the Sequelize instance and test the connection
const sequelize = createSequelizeInstance();
testConnection(sequelize);

module.exports = sequelize;
