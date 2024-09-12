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

(async () => {
  //   await createTodo();
  await countItems();
})();
