# models Directory 📂

The `models` directory contains Sequelize model definitions that represent the structure of the tables in my database.
The `Task` model specifically defines the structure of the `Tasks` table, including its fields and validation rules.
Sequelize is used to interact with the database and perform CRUD operations on the models.

---

## Files and Descriptions 📃

### `Task` Model 📄

The `Task` model defines the schema for the `Tasks` table in my database.
It includes fields such as `id`, `text`, and `status`, which are used to store task-related information.
The model is associated with the Sequelize instance to interact with the database.

- **Fields**:
  - `id`: A unique identifier for the task (primary key, auto-increment).
  - `text`: A string field that contains the description or title of the task. It is required.
  - `status`: An enumerated field that defines the current status of the task. It can either be `'in progress'` or `'completed'`, with the default value set to `'in progress'`.

- **Table**:
  - The model is mapped to the `Tasks` table in the database.
  - The `timestamps: true` option automatically creates `createdAt` and `updatedAt` fields for the record.

---

## How to Use 🚀

1. **Integration**:
   - Import the `Task` model to interact with the `Tasks` table in my database.
   - Use Sequelize methods to perform operations such as creating, updating, and querying tasks.

2. **Example**:
   Here's how I can use the `Task` model in your application:

```javascript
const Task = require('./models/Task');

// Creating a new task
const newTask = await Task.create({
  text: "Complete the project",
  status: "in progress"
});

// Finding all tasks
const allTasks = await Task.findAll();

// Updating a task
const updatedTask = await Task.update(
  { status: "completed" },
  { where: { id: 1 } }
);

// Deleting a task
await Task.destroy({ where: { id: 1 } });
```

---

## Conclusion 🚀

The `Task` model provides a simple and efficient way to manage tasks in my application by leveraging Sequelize.
It enables me to define the structure of my tasks, enforce validation rules, and easily interact with the `Tasks` table in my database.
By using this model, I can ensure a consistent and manageable structure for task-related data in my application.