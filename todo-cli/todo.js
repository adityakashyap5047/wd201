const todoList = () => {
    all = [];
    const add = (todoTask) => {
        all.push(todoTask);
        console.log(all);
    }
    const markAsCompleted = (index) => {
        all[index].completed = true;
        console.log(all);
    }
    return {
        all,
        add,
        markAsCompleted
    }
}