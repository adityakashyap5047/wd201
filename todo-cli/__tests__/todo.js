const todoList = require("../todo");

const {all, markAsComplete, add, overdue, dueToday, dueLater, toDisplayableList} = todoList();

describe("Todolist test suite", () => {
    test("should add new todo", () => {
        expect(all.length).toBe(0);
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toISOString().split("T")[0]
            }
        )
        expect(all.length).toBe(1);
    });

    test("Should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
})