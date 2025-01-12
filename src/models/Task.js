const { DataTypes } = require("sequelize");
const sequelize = require("../database/dbConnect");

const Task = sequelize.define(
    "Task",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        status: {
            type: DataTypes.ENUM('in progress', 'completed'),
            allowNull: false,
            defaultValue: 'in progress',
        },
    },
    {
        tableName: "Tasks",
        timestamps: true,
    }
);

module.exports = Task;