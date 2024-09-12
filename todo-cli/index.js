const { connect } = require("./connectDb");
const Todo = require("./TodoModel");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.create({
      title: "First Item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with id ${todo.id}`);
  } catch (error) {
    console.error("Error creating todo", error);
  }
};

(async () => {
  await createTodo();
})();
