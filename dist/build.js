/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ui/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data-api/app/Todo.js":
/*!******************************!*\
  !*** ./data-api/app/Todo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todo; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * \n * creat, edit, read, and update todo-list\n */\nvar Todo =\n/*#__PURE__*/\nfunction () {\n  // contains all todos\n  function Todo() {\n    _classCallCheck(this, Todo);\n  }\n\n  _createClass(Todo, [{\n    key: \"createTodo\",\n\n    /**\n     *\n     * if it contains todo with keys: date, title and decription add it to todos and return true;\n     * if not return error. \n     */\n    value: function createTodo(todo) {\n      var date = todo.date,\n          title = todo.title,\n          description = todo.description;\n      if (date && title && description) this.todos = todo;\n    }\n  }, {\n    key: \"deleteTodo\",\n\n    /**\n     * \n     * if todoId exists in todos, delete todoId.\n     * esle return error\n     */\n    value: function deleteTodo(todoId) {\n      var todos = this.todos;\n      var newTodos = todos.filter(function (todo) {\n        return todo.id !== todoId;\n      });\n      this.deleteAllTodos();\n      this.todos = newTodos;\n    }\n    /**\n     * \n     * delete all todos\n     */\n\n  }, {\n    key: \"deleteAllTodos\",\n    value: function deleteAllTodos() {\n      localStorage.removeItem('todos');\n    }\n    /**\n     * \n     * if todoId exist in todos edit todoId. else return error. \n     */\n\n  }, {\n    key: \"edit\",\n    value: function edit(todoId, newContent) {\n      var newTodos = this.todos.map(function (todo) {\n        // get new todo and assign the new contents to it\n        if (todo.id = todoId) todo = newContent;\n        return todo;\n      });\n      this.deleteAllTodos();\n      this.todos = newTodos;\n      return newContent;\n    }\n    /**\n     * \n     *  if todoId exists in todos return the founded todo as object. else return empty object.\n     */\n\n  }, {\n    key: \"read\",\n    value: function read(todoId) {\n      var todo = this.todos.filter(function (todo) {\n        return todo.id == todoId;\n      });\n      if (todo.length > -1) return todo;\n      throw new Error('todo not found');\n    }\n    /**\n     * \n     * return todos\n     */\n\n  }, {\n    key: \"readAllTodos\",\n    value: function readAllTodos() {\n      return this.todo;\n    } // /**\n    //  * \n    //  * it todoId exists in todos, update it and return the updated todo. else return error.\n    //  */\n    // updateTodo (todoId) {}\n\n  }, {\n    key: \"todos\",\n    // get todos\n    get: function get() {\n      // check if todo list alreday exist in local storage, if true parse it's value and assign it to todos\n      return JSON.parse(localStorage.getItem('todos')) || [];\n    } // set todos\n    ,\n    set: function set(value) {\n      // console.log(this.todos)\n      var todos = this.todos;\n      console.log(todos);\n      todos = [].concat(_toConsumableArray(todos), [value]);\n      localStorage.setItem('todos', JSON.stringify(todos));\n    }\n  }]);\n\n  return Todo;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhLWFwaS9hcHAvVG9kby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGEtYXBpL2FwcC9Ub2RvLmpzPzRjZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIGNyZWF0LCBlZGl0LCByZWFkLCBhbmQgdXBkYXRlIHRvZG8tbGlzdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICAvLyBjb250YWlucyBhbGwgdG9kb3NcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cblxuICAgIC8vIGdldCB0b2Rvc1xuICAgIGdldCB0b2RvcygpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdG9kbyBsaXN0IGFscmVkYXkgZXhpc3QgaW4gbG9jYWwgc3RvcmFnZSwgaWYgdHJ1ZSBwYXJzZSBpdCdzIHZhbHVlIGFuZCBhc3NpZ24gaXQgdG8gdG9kb3NcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdXG4gICAgfVxuXG4gICAgLy8gc2V0IHRvZG9zXG4gICAgc2V0IHRvZG9zKHZhbHVlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG9kb3MpXG4gICAgICAgIGxldCB0b2RvcyA9IHRoaXMudG9kb3M7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKVxuICAgICAgICBcbiAgICAgICAgdG9kb3MgPSBbLi4udG9kb3MsIHZhbHVlXTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJyxKU09OLnN0cmluZ2lmeSh0b2RvcykpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBpZiBpdCBjb250YWlucyB0b2RvIHdpdGgga2V5czogZGF0ZSwgdGl0bGUgYW5kIGRlY3JpcHRpb24gYWRkIGl0IHRvIHRvZG9zIGFuZCByZXR1cm4gdHJ1ZTtcbiAgICAgKiBpZiBub3QgcmV0dXJuIGVycm9yLiBcbiAgICAgKi9cbiAgICBjcmVhdGVUb2RvKHRvZG8pIHtcbiAgICAgICAgY29uc3Qge2RhdGUsIHRpdGxlLCBkZXNjcmlwdGlvbn0gPSB0b2RvO1xuICAgICAgICBpZihkYXRlICYmIHRpdGxlICYmIGRlc2NyaXB0aW9uKSB0aGlzLnRvZG9zID0gdG9kbztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogaWYgdG9kb0lkIGV4aXN0cyBpbiB0b2RvcywgZGVsZXRlIHRvZG9JZC5cbiAgICAgKiBlc2xlIHJldHVybiBlcnJvclxuICAgICAqL1xuICAgIGRlbGV0ZVRvZG8gKHRvZG9JZCkge1xuICAgICAgICBsZXQgdG9kb3MgPSB0aGlzLnRvZG9zO1xuICAgICAgICBsZXQgbmV3VG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmlkICE9PSB0b2RvSWQpO1xuICAgICAgICB0aGlzLmRlbGV0ZUFsbFRvZG9zKCk7XG4gICAgICAgIHRoaXMudG9kb3MgPSBuZXdUb2Rvc1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBkZWxldGUgYWxsIHRvZG9zXG4gICAgICovXG4gICAgZGVsZXRlQWxsVG9kb3MgKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb3MnKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIGlmIHRvZG9JZCBleGlzdCBpbiB0b2RvcyBlZGl0IHRvZG9JZC4gZWxzZSByZXR1cm4gZXJyb3IuIFxuICAgICAqL1xuICAgIGVkaXQgKHRvZG9JZCwgbmV3Q29udGVudCkge1xuICAgICAgICBsZXQgbmV3VG9kb3MgPSB0aGlzLnRvZG9zLm1hcCh0b2RvID0+IHtcblxuICAgICAgICAgICAgLy8gZ2V0IG5ldyB0b2RvIGFuZCBhc3NpZ24gdGhlIG5ldyBjb250ZW50cyB0byBpdFxuICAgICAgICAgICAgaWYodG9kby5pZCA9IHRvZG9JZCkgdG9kbyA9IG5ld0NvbnRlbnRcbiAgICAgICAgICAgIHJldHVybiB0b2RvXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGVsZXRlQWxsVG9kb3MoKTtcbiAgICAgICAgdGhpcy50b2RvcyA9IG5ld1RvZG9zO1xuXG4gICAgICAgIHJldHVybiBuZXdDb250ZW50XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiAgaWYgdG9kb0lkIGV4aXN0cyBpbiB0b2RvcyByZXR1cm4gdGhlIGZvdW5kZWQgdG9kbyBhcyBvYmplY3QuIGVsc2UgcmV0dXJuIGVtcHR5IG9iamVjdC5cbiAgICAgKi9cbiAgICByZWFkICh0b2RvSWQpIHtcbiAgICAgICAgbGV0IHRvZG8gPSB0aGlzLnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uaWQgPT0gdG9kb0lkKTtcblxuICAgICAgICBpZih0b2RvLmxlbmd0aCA+IC0xKSByZXR1cm4gdG9kbztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b2RvIG5vdCBmb3VuZCcpXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiByZXR1cm4gdG9kb3NcbiAgICAgKi9cbiAgICByZWFkQWxsVG9kb3MgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvXG4gICAgfVxuXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBcbiAgICAvLyAgKiBpdCB0b2RvSWQgZXhpc3RzIGluIHRvZG9zLCB1cGRhdGUgaXQgYW5kIHJldHVybiB0aGUgdXBkYXRlZCB0b2RvLiBlbHNlIHJldHVybiBlcnJvci5cbiAgICAvLyAgKi9cbiAgICAvLyB1cGRhdGVUb2RvICh0b2RvSWQpIHt9XG5cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUlBOzs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBOzs7O0FBa0JBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7OztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7OztBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data-api/app/Todo.js\n");

/***/ }),

/***/ "./ui/assets/js/app.js":
/*!*****************************!*\
  !*** ./ui/assets/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_api_app_Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-api/app/Todo */ \"./data-api/app/Todo.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./ui/assets/js/elements.js\");\n// It handles the core functionality of the todo list.\n// Import all the needed modules\n\n // Initialize todos\n\nvar todosObj = new _data_api_app_Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar app = {}; // All todos\n\napp.todos = todosObj.todos; // loop through them and display them\n\napp.displayTodos = function () {\n  var todosHtml = \"\";\n  this.todos.forEach(function (todo) {\n    todosHtml += \"\\n        <section class=\\\"todoList-section\\\">\\n           <div class=\\\"todo-container\\\">\\n               <h2 class=\\\"title\\\">\".concat(todo.title, \"</h2>\\n               <p class=\\\"description\\\">\\n                   \").concat(todo.description, \"\\n               </p>\\n               <p class=\\\"date\\\">\").concat(todo.date, \"</p>\\n               <br>\\n               <button class=\\\"delete\\\"> \\n                 <i class=\\\"fa fa-remove\\\"></i>\\n                delete\\n              </button>\\n              <button class=\\\"edit\\\">\\n                <i class=\\\"fa fa-edit\\\"></i>\\n                edit\\n               </button>\\n           </div>\\n         </section>\\n        \");\n  });\n  var allTodosContainer = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])(\".all-todos\");\n\n  if (todosHtml == \"\") {\n    allTodosContainer.innerHTML = \"\\n        <p> You have not added any todo </p>\\n        \";\n  } else {\n    allTodosContainer.innerHTML = todosHtml;\n  }\n}; // Display a single todo\n\n\napp.displaySingleTodo = function (todoId) {}; // create todo\n\n\napp.createTodo = function () {\n  var messageBox = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])(\".message-box\");\n  var titleElm = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])(\"#title\");\n  var dateElm = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])(\"#date\");\n  var descElm = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])(\"#description\");\n  var date = dateElm.value;\n  var description = descElm.value;\n  var title = titleElm.value;\n  var todo = {\n    date: date,\n    description: description,\n    title: title\n  };\n\n  if (date !== '' && description !== '' && title !== '') {\n    todosObj.createTodo(todo);\n    var allTodosContainer = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])(\".all-todos\");\n    var sectionElement = document.createElement(\"section\");\n    sectionElement.classList.add(\"todoList-section\");\n    sectionElement.innerHTML = \"\\n    <div class=\\\"todo-container\\\">\\n    <h2 class=\\\"title\\\">\".concat(title, \"</h2>\\n      <p class=\\\"description\\\">\\n         \").concat(description, \"\\n      </p>\\n      <p class=\\\"date\\\">\").concat(date, \"</p>\\n      <br />\\n      <button class=\\\"delete\\\"> \\n      <i class=\\\"fa fa-remove\\\"></i>\\n        delete\\n      </button>\\n      <button class=\\\"edit\\\">\\n      <i class=\\\"fa fa-edit\\\"></i>\\n        edit\\n      </button>\\n      </div>\\n    \");\n    allTodosContainer.appendChild(sectionElement); // added messageBox functionality\n\n    messageBox.classList.add('msgbox-out');\n    setTimeout(function () {\n      messageBox.classList.remove('msgbox-out');\n      console.log('removed');\n    }, 4000);\n    dateElm.value = '';\n    titleElm.value = '';\n    dateElm.value = '';\n  } else {\n    alert('All of the input field is required');\n    return;\n  }\n}; // delete todo\n\n\napp.deleteTodo = function (todoId) {}; // edit todo\n\n\napp.editTodo = function (todoId) {}; // Will delete all todos\n\n\napp.deleteAllTodos = function () {}; // will update single todo\n\n\napp.updateTodo = function (todoId) {}; // create app initialization engine\n\n\napp.init = function () {\n  // get any element\n  var createBtn = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])(\".create-todo\");\n  createBtn.addEventListener(\"click\", this.createTodo); // add all event listeners\n\n  app.displayTodos();\n}; // Initialize app\n\n\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS9hc3NldHMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdWkvYXNzZXRzL2pzL2FwcC5qcz8yNzMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEl0IGhhbmRsZXMgdGhlIGNvcmUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgdG9kbyBsaXN0LlxuXG4vLyBJbXBvcnQgYWxsIHRoZSBuZWVkZWQgbW9kdWxlc1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4uLy4uLy4uL2RhdGEtYXBpL2FwcC9Ub2RvXCI7XG5pbXBvcnQgeyBnZXRBbGxFbGVtZW50cywgZ2V0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbi8vIEluaXRpYWxpemUgdG9kb3NcbmNvbnN0IHRvZG9zT2JqID0gbmV3IFRvZG8oKTtcblxuY29uc3QgYXBwID0ge307XG5cbi8vIEFsbCB0b2Rvc1xuYXBwLnRvZG9zID0gdG9kb3NPYmoudG9kb3M7XG5cbi8vIGxvb3AgdGhyb3VnaCB0aGVtIGFuZCBkaXNwbGF5IHRoZW1cbmFwcC5kaXNwbGF5VG9kb3MgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCB0b2Rvc0h0bWwgPSBcIlwiO1xuICB0aGlzLnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgdG9kb3NIdG1sICs9IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0b2RvTGlzdC1zZWN0aW9uXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj4ke3RvZG8udGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAke3RvZG8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke3RvZG8uZGF0ZX08L3A+XG4gICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+IFxuICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXJlbW92ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICBkZWxldGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1lZGl0XCI+PC9pPlxuICAgICAgICAgICAgICAgIGVkaXRcbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgYDtcbiAgfSk7XG5cbiAgbGV0IGFsbFRvZG9zQ29udGFpbmVyID0gZ2V0RWxlbWVudChcIi5hbGwtdG9kb3NcIik7XG4gIGlmICh0b2Rvc0h0bWwgPT0gXCJcIikge1xuICAgIGFsbFRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHA+IFlvdSBoYXZlIG5vdCBhZGRlZCBhbnkgdG9kbyA8L3A+XG4gICAgICAgIGA7XG4gIH0gZWxzZSB7XG4gICAgYWxsVG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gdG9kb3NIdG1sO1xuICB9XG59O1xuXG4vLyBEaXNwbGF5IGEgc2luZ2xlIHRvZG9cbmFwcC5kaXNwbGF5U2luZ2xlVG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQpIHsgfTtcblxuLy8gY3JlYXRlIHRvZG9cbmFwcC5jcmVhdGVUb2RvID0gZnVuY3Rpb24gKCkge1xuICBsZXQgbWVzc2FnZUJveCA9IGdldEVsZW1lbnQoXCIubWVzc2FnZS1ib3hcIilcbiAgbGV0IHRpdGxlRWxtID0gZ2V0RWxlbWVudChcIiN0aXRsZVwiKTtcbiAgbGV0IGRhdGVFbG0gPSBnZXRFbGVtZW50KFwiI2RhdGVcIik7XG4gIGxldCBkZXNjRWxtID0gZ2V0RWxlbWVudChcIiNkZXNjcmlwdGlvblwiKTtcbiAgbGV0IHsgdmFsdWU6IGRhdGUgfSA9IGRhdGVFbG07XG4gIGxldCB7IHZhbHVlOiBkZXNjcmlwdGlvbiB9ID0gZGVzY0VsbTtcbiAgbGV0IHsgdmFsdWU6IHRpdGxlIH0gPSB0aXRsZUVsbTtcbiAgbGV0IHRvZG8gPSB7IGRhdGUsIGRlc2NyaXB0aW9uLCB0aXRsZSB9O1xuXG4gIGlmKGRhdGUgIT09ICcnICYmIGRlc2NyaXB0aW9uICE9PSAnJyAmJiB0aXRsZSAhPT0gJycpIHtcbiAgICB0b2Rvc09iai5jcmVhdGVUb2RvKHRvZG8pO1xuICAgIGxldCBhbGxUb2Rvc0NvbnRhaW5lciA9IGdldEVsZW1lbnQoXCIuYWxsLXRvZG9zXCIpO1xuICAgIGxldCBzZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHNlY3Rpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdC1zZWN0aW9uXCIpO1xuICAgIHNlY3Rpb25FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidG9kby1jb250YWluZXJcIj5cbiAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7dGl0bGV9PC9oMj5cbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICR7ZGVzY3JpcHRpb259XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke2RhdGV9PC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+IFxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZW1vdmVcIj48L2k+XG4gICAgICAgIGRlbGV0ZVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1lZGl0XCI+PC9pPlxuICAgICAgICBlZGl0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgYWxsVG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkVsZW1lbnQpO1xuICBcbiAgICAvLyBhZGRlZCBtZXNzYWdlQm94IGZ1bmN0aW9uYWxpdHlcbiAgICBtZXNzYWdlQm94LmNsYXNzTGlzdC5hZGQoJ21zZ2JveC1vdXQnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xuICAgICAgbWVzc2FnZUJveC5jbGFzc0xpc3QucmVtb3ZlKCdtc2dib3gtb3V0Jyk7XG4gICAgICBjb25zb2xlLmxvZygncmVtb3ZlZCcpO1xuICAgIH0sNDAwMCk7XG4gICAgZGF0ZUVsbS52YWx1ZSA9ICcnO1xuICAgIHRpdGxlRWxtLnZhbHVlID0gJyc7XG4gICAgZGF0ZUVsbS52YWx1ZSA9ICcnO1xuICB9XG4gIGVsc2V7XG4gICAgYWxlcnQoJ0FsbCBvZiB0aGUgaW5wdXQgZmllbGQgaXMgcmVxdWlyZWQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgXG59O1xuXG4vLyBkZWxldGUgdG9kb1xuYXBwLmRlbGV0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb0lkKSB7IH07XG5cbi8vIGVkaXQgdG9kb1xuYXBwLmVkaXRUb2RvID0gZnVuY3Rpb24gKHRvZG9JZCkgeyB9O1xuXG4vLyBXaWxsIGRlbGV0ZSBhbGwgdG9kb3NcbmFwcC5kZWxldGVBbGxUb2RvcyA9IGZ1bmN0aW9uICgpIHsgfTtcblxuLy8gd2lsbCB1cGRhdGUgc2luZ2xlIHRvZG9cbmFwcC51cGRhdGVUb2RvID0gZnVuY3Rpb24gKHRvZG9JZCkgeyB9O1xuXG4vLyBjcmVhdGUgYXBwIGluaXRpYWxpemF0aW9uIGVuZ2luZVxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGdldCBhbnkgZWxlbWVudFxuICBsZXQgY3JlYXRlQnRuID0gZ2V0RWxlbWVudChcIi5jcmVhdGUtdG9kb1wiKTtcbiAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNyZWF0ZVRvZG8pO1xuICAvLyBhZGQgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICBhcHAuZGlzcGxheVRvZG9zKCk7XG59O1xuXG4vLyBJbml0aWFsaXplIGFwcFxuYXBwLmluaXQoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQW9CQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ui/assets/js/app.js\n");

/***/ }),

/***/ "./ui/assets/js/elements.js":
/*!**********************************!*\
  !*** ./ui/assets/js/elements.js ***!
  \**********************************/
/*! exports provided: getElement, getAllElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllElements\", function() { return getAllElements; });\n// Contains all the whole elements for the project\n// Get the element containing this selector and return it\nfunction getElement(selector) {\n  return document.querySelector(selector);\n} // Get all the elements containing this selector and return them.\n\nfunction getAllElements(selector) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS9hc3NldHMvanMvZWxlbWVudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9hc3NldHMvanMvZWxlbWVudHMuanM/Y2MzOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb250YWlucyBhbGwgdGhlIHdob2xlIGVsZW1lbnRzIGZvciB0aGUgcHJvamVjdFxuXG5cbi8vIEdldCB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoaXMgc2VsZWN0b3IgYW5kIHJldHVybiBpdFxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcilcbn1cblxuLy8gR2V0IGFsbCB0aGUgZWxlbWVudHMgY29udGFpbmluZyB0aGlzIHNlbGVjdG9yIGFuZCByZXR1cm4gdGhlbS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIFxufVxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/assets/js/elements.js\n");

/***/ })

/******/ });