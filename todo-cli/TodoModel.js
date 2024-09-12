const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDb");

class Todo extends Model {
  static async addTask(params) {
    return await Todo.create(params);
  }
}

Todo.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
  },
);

module.exports = Todo; // Creating the table in the database

Todo.sync();
