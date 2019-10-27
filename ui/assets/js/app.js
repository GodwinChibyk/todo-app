// It handles the core functionality of the todo list.

// Import all the needed modules
import Todo from "../../../data-api/app/Todo";
import { getAllElements, getElement } from "./elements";

// Initialize todos
const todosObj = new Todo();

const app = {};

// All todos
app.todos = todosObj.todos;

// loop through them and display them
app.displayTodos = function() {
  let todosHtml = "";

  this.todos.forEach(todo => {
    let singleTodo = `
        <section class="todoList-section">
                    <div class="todo-container">
                        <h2 class="title">${todo.title}</h2>
                        <p class="description">
                            ${todo.description}
                        </p>
                        <p class="date">${todo.date}</p>
                        <br>
                        <button class="delete">delete</button>
                        <button class="edit">edit</button>
                    </div>
                </section>
        `;
  });

  let allTodosContainer = getElement(".all-todos");
  if (todosHtml == "") {
    allTodosContainer.innerHTML = `
        <p> You have not added any todo </p>
        `;
  } else {
    allTodosContainer.innerHTML = todosHtml;
  }
};

// Display a single todo
app.displaySingleTodo = function(todoId) {};

// create todo
app.createTodo = function() {
  let titleElm = getElement("#title");
  let dateElm = getElement("#date");
  let descElm = getElement("#description");
  let { value: date } = dateElm;
  let { value: description } = descElm;
  let { value: title } = titleElm;
  let todo = { date, description, title };
  todosObj.createTodo(todo);
};

// delete todo
app.deleteTodo = function(todoId) {};

// edit todo
app.editTodo = function(todoId) {};

// Will delete all todos
app.deleteAllTodos = function() {};

// will update single todo
app.updateTodo = function(todoId) {};

// create app initialization engine
app.init = function() {
  // get any element
  let createBtn = getElement(".create-todo");
  createBtn.addEventListener('click', this.createTodo)
  // add all event listeners
  app.displayTodos();
};

// Initialize app
app.init();
