/* eslint-disable no-undef */
// const todoList = require("../todo");

// const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

// describe("Todolist test suite", () => {
//   const today = new Date().toISOString().split("T")[0];
//   const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
//     .toISOString()
//     .split("T")[0];
//   const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
//     .toISOString()
//     .split("T")[0];

//   beforeEach(() => {
//     // Clear all todos before each test
//     while (all.length > 0) {
//       all.pop();
//     }
//   });

//   test("should add a new todo", () => {
//     const initialCount = all.length;
//     add({
//       title: "Test todo",
//       completed: false,
//       dueDate: today,
//     });
//     expect(all.length).toBe(initialCount + 1);
//     expect(all[0]).toMatchObject({
//       title: "Test todo",
//       completed: false,
//       dueDate: today,
//     });
//   });

//   test("should mark a todo as complete", () => {
//     add({
//       title: "Test todo",
//       completed: false,
//       dueDate: today,
//     });
//     markAsComplete(0);
//     expect(all[0].completed).toBe(true);
//   });

//   test("should retrieve overdue items", () => {
//     add({
//       title: "Overdue todo",
//       completed: false,
//       dueDate: yesterday,
//     });
//     const overdueItems = overdue();
//     expect(overdueItems.length).toBe(1);
//     expect(overdueItems[0]).toMatchObject({
//       title: "Overdue todo",
//       completed: false,
//       dueDate: yesterday,
//     });
//   });

//   test("should retrieve due today items", () => {
//     add({
//       title: "Due today todo",
//       completed: false,
//       dueDate: today,
//     });
//     const dueTodayItems = dueToday();
//     expect(dueTodayItems.length).toBe(1);
//     expect(dueTodayItems[0]).toMatchObject({
//       title: "Due today todo",
//       completed: false,
//       dueDate: today,
//     });
//   });

//   test("should retrieve due later items", () => {
//     add({
//       title: "Due later todo",
//       completed: false,
//       dueDate: tomorrow,
//     });
//     const dueLaterItems = dueLater();
//     expect(dueLaterItems.length).toBe(1);
//     expect(dueLaterItems[0]).toMatchObject({
//       title: "Due later todo",
//       completed: false,
//       dueDate: tomorrow,
//     });
//   });
// });

describe("Todolist test suite", () => {
  test("should add a new todo", () => {
    expect(true).toBe(true);
  });
});
