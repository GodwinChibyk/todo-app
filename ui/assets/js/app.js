// It handles the core functionality of the todo list.

// Import all the needed modules
import Todo from '../../../data-api/app/Todo';
import {getAllElements, getElement} from "./elements"



// Initialize todos 
const todosObj = new Todo();

const app = {}

// loop through them and display them
app.displayTodos = function () {

}

// Display a single todo
app.displaySingleTodo = function (todoId) {

}

// create todo
app.createTodo = function () {
    // let dateElm = getElement('.createdate');
    // let descElm = getElement('.createdesc');

    // let {value: date} = dateElm;
    // let {value: description} = descElm;

    // let todo = {date, description};

    // todosObj.createTodo(todo)
}


// delete todo
app.deleteTodo = function (todoId) {
    
}

// edit todo
app.editTodo = function(todoId) {

}

// Will delete all todos
app.deleteAllTodos = function () {

}


// will update single todo
app.updateTodo = function (todoId) {

}

// create app initialization engine
app.init = function () {
    // get any element

    // add all event listeners



}



// Initialize app
app.init()