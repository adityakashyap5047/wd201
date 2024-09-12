"use strict";
const { Model, Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // Helper function to format date as YYYY-MM-DD
    static formattedDate(d) {
      return d.toISOString().split("T")[0];
    }

    static async addTask(params) {
      return await Todo.create(params);
    }

    static async showList() {
      console.log("My Todo list \n");

      // Overdue tasks
      console.log("Overdue");
      const overdueTasks = await this.overdue();
      overdueTasks.forEach((task) => console.log(task.displayableString()));
      console.log("\n");

      // Due today tasks
      console.log("Due Today");
      const todayTasks = await this.dueToday();
      todayTasks.forEach((task) => console.log(task.displayableString()));
      console.log("\n");

      // Due later tasks
      console.log("Due Later");
      const laterTasks = await this.dueLater();
      laterTasks.forEach((task) => console.log(task.displayableString()));
    }

    static async overdue() {
      const today = this.formattedDate(new Date());
      return await Todo.findAll({
        where: {
          dueDate: {
            [Op.lt]: today, // Less than today
          },
        },
      });
    }

    static async dueToday() {
      const today = this.formattedDate(new Date());
      return await Todo.findAll({
        where: {
          dueDate: today, // Due today
        },
      });
    }

    static async dueLater() {
      const today = this.formattedDate(new Date());
      return await Todo.findAll({
        where: {
          dueDate: {
            [Op.gt]: today, // Greater than today (future dates)
          },
        },
      });
    }

    static async markAsComplete(id) {
      await Todo.update(
        { completed: true },
        {
          where: {
            id,
          },
        },
      );
    }

    displayableString() {
      const today = Todo.formattedDate(new Date());
      let checkbox = this.completed ? "[x]" : "[ ]";
      let dateDisplay = this.dueDate === today ? "" : this.dueDate;
      return `${this.id}. ${checkbox} ${this.title} ${dateDisplay}`.trim();
    }
  }

  Todo.init(
    {
      title: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Todo",
    },
  );

  return Todo;
};
