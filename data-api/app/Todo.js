/**
 * 
 * creat, edit, read, and update todo-list
 */
export default class Todo {
    // contains all todos
    

    constructor() {
    };


    // get todos
    get todos() {
        // check if todo list alreday exist in local storage, if true parse it's value and assign it to todos
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    // set todos
    set todos(value) {
        // console.log(value)
        let todos = JSON.parse(localStorage.getItem('todos'));
        console.log(todos)
        todos = [...todos, value];
        localStorage.setItem('todos',JSON.stringify(todos))
    }

    /**
     *
     * if it contains todo with keys: date, title and decription add it to todos and return true;
     * if not return error. 
     */
    createTodo(todo) {
        const {date, title, description} = todo;
        if(date && title && description) this.todos = todo;
    };

    /**
     * 
     * if todoId exists in todos, delete todoId.
     * esle return error
     */
    deleteTodo (todoId) {
        let todos = this.todos;
        let newTodos = todos.filter(todo => todo.id !== todoId);
        this.deleteAllTodos();
        this.todos = newTodos

    }


    /**
     * 
     * delete all todos
     */
    deleteAllTodos () {
        localStorage.removeItem('todos')
    }

    /**
     * 
     * if todoId exist in todos edit todoId. else return error. 
     */
    edit (todoId, newContent) {
        let newTodos = this.todos.map(todo => {

            // get new todo and assign the new contents to it
            if(todo.id = todoId) todo = newContent
            return todo
        });

        this.deleteAllTodos();
        this.todos = newTodos;

        return newContent
    }


    /**
     * 
     *  if todoId exists in todos return the founded todo as object. else return empty object.
     */
    read (todoId) {
        let todo = this.todos.filter(todo => todo.id == todoId);

        if(todo.length > -1) return todo;
        throw new Error('todo not found')
    }


    /**
     * 
     * return todos
     */
    readAllTodos () {
        return this.todo
    }


    // /**
    //  * 
    //  * it todoId exists in todos, update it and return the updated todo. else return error.
    //  */
    // updateTodo (todoId) {}

}