/* eslint-disable no-unused-vars */
const { connect } = require("./connectDb");
const Todo = require("./TodoModel");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "Second Item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with id ${todo.id}`);
  } catch (error) {
    console.error("Error creating todo", error);
  }
};

const countItems = async () => {
  try {
    const totalCount = await Todo.count();
    console.log(`Total number of items: ${totalCount}`);
  } catch (error) {
    console.error("Error counting items", error);
  }
};

const getAllTodos = async () => {
  try {
    const todos = await Todo.findAll({
      where: {
        completed: true,
      },
      order: [["id", "DESC"]],
    });
    const todoList = todos.map((todo) => todo.displayableString()).join("\n");
    console.log(todoList);
  } catch (error) {
    console.error("Error getting all todos", error);
  }
};

const getTodo = async () => {
  try {
    const todo = await Todo.findOne({
      where: {
        completed: true,
      },
      order: [["id", "DESC"]],
    });
    console.log(todo.displayableString());
  } catch (error) {
    console.error("Error getting all todos", error);
  }
};

(async () => {
  //IIFE
  // await createTodo();
  // await countItems();
  // await getAllTodos();
  await getTodo();
})();
