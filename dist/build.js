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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todo; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * \n * creat, edit, read, and update todo-list\n */\nvar Todo =\n/*#__PURE__*/\nfunction () {\n  // contains all todos\n  function Todo() {\n    _classCallCheck(this, Todo);\n  }\n\n  _createClass(Todo, [{\n    key: \"createTodo\",\n\n    /**\n     *\n     * if it contains todo with keys: date, title and decription add it to todos and return true;\n     * if not return error. \n     */\n    value: function createTodo(todo) {\n      var date = todo.date,\n          title = todo.title,\n          description = todo.description;\n      if (date && title && description) this.todos = todo;\n    }\n  }, {\n    key: \"deleteTodo\",\n\n    /**\n     * \n     * if todoId exists in todos, delete todoId.\n     * esle return error\n     */\n    value: function deleteTodo(todoId) {\n      var todos = this.todos;\n      var newTodos = todos.filter(function (todo) {\n        return todo.id !== todoId;\n      });\n      this.deleteAllTodos();\n      this.todos = newTodos;\n    }\n    /**\n     * \n     * delete all todos\n     */\n\n  }, {\n    key: \"deleteAllTodos\",\n    value: function deleteAllTodos() {\n      localStorage.removeItem('todos');\n    }\n    /**\n     * \n     * if todoId exist in todos edit todoId. else return error. \n     */\n\n  }, {\n    key: \"edit\",\n    value: function edit(todoId, newContent) {\n      var newTodos = this.todos.map(function (todo) {\n        // get new todo and assign the new contents to it\n        if (todo.id = todoId) todo = newContent;\n        return todo;\n      });\n      this.deleteAllTodos();\n      this.todos = newTodos;\n      return newContent;\n    }\n    /**\n     * \n     *  if todoId exists in todos return the founded todo as object. else return empty object.\n     */\n\n  }, {\n    key: \"read\",\n    value: function read(todoId) {\n      var todo = this.todos.filter(function (todo) {\n        return todo.id == todoId;\n      });\n      if (todo.length > -1) return todo;\n      throw new Error('todo not found');\n    }\n    /**\n     * \n     * return todos\n     */\n\n  }, {\n    key: \"readAllTodos\",\n    value: function readAllTodos() {\n      return this.todo;\n    } // /**\n    //  * \n    //  * it todoId exists in todos, update it and return the updated todo. else return error.\n    //  */\n    // updateTodo (todoId) {}\n\n  }, {\n    key: \"todos\",\n    // get todos\n    get: function get() {\n      // check if todo list alreday exist in local storage, if true parse it's value and assign it to todos\n      return JSON.parse(localStorage.getItem('todos')) || [];\n    } // set todos\n    ,\n    set: function set(value) {\n      var todos = JSON.parse(localStorage.getItem('todos'));\n      todos = [].concat(_toConsumableArray(todos), [value]);\n      localStorage.setItem('todos', JSON.stringify(todos));\n    }\n  }]);\n\n  return Todo;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhLWFwaS9hcHAvVG9kby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGEtYXBpL2FwcC9Ub2RvLmpzPzRjZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIGNyZWF0LCBlZGl0LCByZWFkLCBhbmQgdXBkYXRlIHRvZG8tbGlzdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICAvLyBjb250YWlucyBhbGwgdG9kb3NcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cblxuICAgIC8vIGdldCB0b2Rvc1xuICAgIGdldCB0b2RvcygpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdG9kbyBsaXN0IGFscmVkYXkgZXhpc3QgaW4gbG9jYWwgc3RvcmFnZSwgaWYgdHJ1ZSBwYXJzZSBpdCdzIHZhbHVlIGFuZCBhc3NpZ24gaXQgdG8gdG9kb3NcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdXG4gICAgfVxuXG4gICAgLy8gc2V0IHRvZG9zXG4gICAgc2V0IHRvZG9zKHZhbHVlKSB7XG4gICAgICAgIGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuICAgICAgICB0b2RvcyA9IFsuLi50b2RvcywgdmFsdWVdO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIGlmIGl0IGNvbnRhaW5zIHRvZG8gd2l0aCBrZXlzOiBkYXRlLCB0aXRsZSBhbmQgZGVjcmlwdGlvbiBhZGQgaXQgdG8gdG9kb3MgYW5kIHJldHVybiB0cnVlO1xuICAgICAqIGlmIG5vdCByZXR1cm4gZXJyb3IuIFxuICAgICAqL1xuICAgIGNyZWF0ZVRvZG8odG9kbykge1xuICAgICAgICBjb25zdCB7ZGF0ZSwgdGl0bGUsIGRlc2NyaXB0aW9ufSA9IHRvZG87XG4gICAgICAgIGlmKGRhdGUgJiYgdGl0bGUgJiYgZGVzY3JpcHRpb24pIHRoaXMudG9kb3MgPSB0b2RvO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBpZiB0b2RvSWQgZXhpc3RzIGluIHRvZG9zLCBkZWxldGUgdG9kb0lkLlxuICAgICAqIGVzbGUgcmV0dXJuIGVycm9yXG4gICAgICovXG4gICAgZGVsZXRlVG9kbyAodG9kb0lkKSB7XG4gICAgICAgIGxldCB0b2RvcyA9IHRoaXMudG9kb3M7XG4gICAgICAgIGxldCBuZXdUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uaWQgIT09IHRvZG9JZCk7XG4gICAgICAgIHRoaXMuZGVsZXRlQWxsVG9kb3MoKTtcbiAgICAgICAgdGhpcy50b2RvcyA9IG5ld1RvZG9zXG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIGRlbGV0ZSBhbGwgdG9kb3NcbiAgICAgKi9cbiAgICBkZWxldGVBbGxUb2RvcyAoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2RvcycpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogaWYgdG9kb0lkIGV4aXN0IGluIHRvZG9zIGVkaXQgdG9kb0lkLiBlbHNlIHJldHVybiBlcnJvci4gXG4gICAgICovXG4gICAgZWRpdCAodG9kb0lkLCBuZXdDb250ZW50KSB7XG4gICAgICAgIGxldCBuZXdUb2RvcyA9IHRoaXMudG9kb3MubWFwKHRvZG8gPT4ge1xuXG4gICAgICAgICAgICAvLyBnZXQgbmV3IHRvZG8gYW5kIGFzc2lnbiB0aGUgbmV3IGNvbnRlbnRzIHRvIGl0XG4gICAgICAgICAgICBpZih0b2RvLmlkID0gdG9kb0lkKSB0b2RvID0gbmV3Q29udGVudFxuICAgICAgICAgICAgcmV0dXJuIHRvZG9cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kZWxldGVBbGxUb2RvcygpO1xuICAgICAgICB0aGlzLnRvZG9zID0gbmV3VG9kb3M7XG5cbiAgICAgICAgcmV0dXJuIG5ld0NvbnRlbnRcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqICBpZiB0b2RvSWQgZXhpc3RzIGluIHRvZG9zIHJldHVybiB0aGUgZm91bmRlZCB0b2RvIGFzIG9iamVjdC4gZWxzZSByZXR1cm4gZW1wdHkgb2JqZWN0LlxuICAgICAqL1xuICAgIHJlYWQgKHRvZG9JZCkge1xuICAgICAgICBsZXQgdG9kbyA9IHRoaXMudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5pZCA9PSB0b2RvSWQpO1xuXG4gICAgICAgIGlmKHRvZG8ubGVuZ3RoID4gLTEpIHJldHVybiB0b2RvO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvZG8gbm90IGZvdW5kJylcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIHJldHVybiB0b2Rvc1xuICAgICAqL1xuICAgIHJlYWRBbGxUb2RvcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9cbiAgICB9XG5cblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFxuICAgIC8vICAqIGl0IHRvZG9JZCBleGlzdHMgaW4gdG9kb3MsIHVwZGF0ZSBpdCBhbmQgcmV0dXJuIHRoZSB1cGRhdGVkIHRvZG8uIGVsc2UgcmV0dXJuIGVycm9yLlxuICAgIC8vICAqL1xuICAgIC8vIHVwZGF0ZVRvZG8gKHRvZG9JZCkge31cblxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBSUE7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFlQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data-api/app/Todo.js\n");

/***/ }),

/***/ "./ui/assets/js/app.js":
/*!*****************************!*\
  !*** ./ui/assets/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_api_app_Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-api/app/Todo */ \"./data-api/app/Todo.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./ui/assets/js/elements.js\");\n// It handles the core functionality of the todo list.\n// Import all the needed modules\n\n // Initialize todos\n\nvar todosObj = new _data_api_app_Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar app = {}; // All todos\n\napp.todos = todosObj.todos; // loop through them and display them\n\napp.displayTodos = function () {\n  var todosHtml = \"\";\n  this.todos.forEach(function (todo) {\n    var singleTodo = \"\\n        <section class=\\\"todoList-section\\\">\\n                    <div class=\\\"todo-container\\\">\\n                        <h2 class=\\\"title\\\">\".concat(todo.title, \"</h2>\\n                        <p class=\\\"description\\\">\\n                            \").concat(todo.description, \"\\n                        </p>\\n                        <p class=\\\"date\\\">\").concat(todo.date, \"</p>\\n                        <br>\\n                        <button class=\\\"delete\\\">delete</button>\\n                        <button class=\\\"edit\\\">edit</button>\\n                    </div>\\n                </section>\\n        \");\n  });\n  var allTodosContainer = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])(\".all-todos\");\n\n  if (todosHtml == \"\") {\n    allTodosContainer.innerHTML = \"\\n        <p> You have not added any todo </p>\\n        \";\n  } else {\n    allTodosContainer.innerHTML = todosHtml;\n  }\n}; // Display a single todo\n\n\napp.displaySingleTodo = function (todoId) {}; // create todo\n\n\napp.createTodo = function () {// let dateElm = getElement('.createdate');\n  // let descElm = getElement('.createdesc');\n  // let {value: date} = dateElm;\n  // let {value: description} = descElm;\n  // let todo = {date, description};\n  // todosObj.createTodo(todo)\n}; // delete todo\n\n\napp.deleteTodo = function (todoId) {}; // edit todo\n\n\napp.editTodo = function (todoId) {}; // Will delete all todos\n\n\napp.deleteAllTodos = function () {}; // will update single todo\n\n\napp.updateTodo = function (todoId) {}; // create app initialization engine\n\n\napp.init = function () {\n  // get any element\n  // add all event listeners\n  app.displayTodos();\n}; // Initialize app\n\n\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS9hc3NldHMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdWkvYXNzZXRzL2pzL2FwcC5qcz8yNzMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEl0IGhhbmRsZXMgdGhlIGNvcmUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgdG9kbyBsaXN0LlxuXG4vLyBJbXBvcnQgYWxsIHRoZSBuZWVkZWQgbW9kdWxlc1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4uLy4uLy4uL2RhdGEtYXBpL2FwcC9Ub2RvXCI7XG5pbXBvcnQgeyBnZXRBbGxFbGVtZW50cywgZ2V0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbi8vIEluaXRpYWxpemUgdG9kb3NcbmNvbnN0IHRvZG9zT2JqID0gbmV3IFRvZG8oKTtcblxuY29uc3QgYXBwID0ge307XG5cbi8vIEFsbCB0b2Rvc1xuYXBwLnRvZG9zID0gdG9kb3NPYmoudG9kb3M7XG5cbi8vIGxvb3AgdGhyb3VnaCB0aGVtIGFuZCBkaXNwbGF5IHRoZW1cbmFwcC5kaXNwbGF5VG9kb3MgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHRvZG9zSHRtbCA9IFwiXCI7XG5cbiAgdGhpcy50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgIGxldCBzaW5nbGVUb2RvID0gYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRvZG9MaXN0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7dG9kby50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dG9kby5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7dG9kby5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5kZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0XCI+ZWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIGA7XG4gIH0pO1xuXG4gIGxldCBhbGxUb2Rvc0NvbnRhaW5lciA9IGdldEVsZW1lbnQoXCIuYWxsLXRvZG9zXCIpO1xuICBpZiAodG9kb3NIdG1sID09IFwiXCIpIHtcbiAgICBhbGxUb2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxwPiBZb3UgaGF2ZSBub3QgYWRkZWQgYW55IHRvZG8gPC9wPlxuICAgICAgICBgO1xuICB9IGVsc2V7XG4gICAgICBhbGxUb2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSB0b2Rvc0h0bWxcbiAgfVxufTtcblxuLy8gRGlzcGxheSBhIHNpbmdsZSB0b2RvXG5hcHAuZGlzcGxheVNpbmdsZVRvZG8gPSBmdW5jdGlvbih0b2RvSWQpIHt9O1xuXG4vLyBjcmVhdGUgdG9kb1xuYXBwLmNyZWF0ZVRvZG8gPSBmdW5jdGlvbigpIHtcbiAgLy8gbGV0IGRhdGVFbG0gPSBnZXRFbGVtZW50KCcuY3JlYXRlZGF0ZScpO1xuICAvLyBsZXQgZGVzY0VsbSA9IGdldEVsZW1lbnQoJy5jcmVhdGVkZXNjJyk7XG4gIC8vIGxldCB7dmFsdWU6IGRhdGV9ID0gZGF0ZUVsbTtcbiAgLy8gbGV0IHt2YWx1ZTogZGVzY3JpcHRpb259ID0gZGVzY0VsbTtcbiAgLy8gbGV0IHRvZG8gPSB7ZGF0ZSwgZGVzY3JpcHRpb259O1xuICAvLyB0b2Rvc09iai5jcmVhdGVUb2RvKHRvZG8pXG59O1xuXG4vLyBkZWxldGUgdG9kb1xuYXBwLmRlbGV0ZVRvZG8gPSBmdW5jdGlvbih0b2RvSWQpIHt9O1xuXG4vLyBlZGl0IHRvZG9cbmFwcC5lZGl0VG9kbyA9IGZ1bmN0aW9uKHRvZG9JZCkge307XG5cbi8vIFdpbGwgZGVsZXRlIGFsbCB0b2Rvc1xuYXBwLmRlbGV0ZUFsbFRvZG9zID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gd2lsbCB1cGRhdGUgc2luZ2xlIHRvZG9cbmFwcC51cGRhdGVUb2RvID0gZnVuY3Rpb24odG9kb0lkKSB7fTtcblxuLy8gY3JlYXRlIGFwcCBpbml0aWFsaXphdGlvbiBlbmdpbmVcbmFwcC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBhbnkgZWxlbWVudFxuICAvLyBhZGQgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICBhcHAuZGlzcGxheVRvZG9zKClcbn07XG5cbi8vIEluaXRpYWxpemUgYXBwXG5hcHAuaW5pdCgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBY0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ui/assets/js/app.js\n");

/***/ }),

/***/ "./ui/assets/js/elements.js":
/*!**********************************!*\
  !*** ./ui/assets/js/elements.js ***!
  \**********************************/
/*! exports provided: getElement, getAllElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllElements\", function() { return getAllElements; });\n// Contains all the whole elements for the project\n// Get the element containing this selector and return it\nfunction getElement(selector) {} // Get all the elements containing this selector and return them.\n\nfunction getAllElements(selector) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS9hc3NldHMvanMvZWxlbWVudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9hc3NldHMvanMvZWxlbWVudHMuanM/Y2MzOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb250YWlucyBhbGwgdGhlIHdob2xlIGVsZW1lbnRzIGZvciB0aGUgcHJvamVjdFxuXG5cbi8vIEdldCB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoaXMgc2VsZWN0b3IgYW5kIHJldHVybiBpdFxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoc2VsZWN0b3IpIHtcbiAgICBcbn1cblxuLy8gR2V0IGFsbCB0aGUgZWxlbWVudHMgY29udGFpbmluZyB0aGlzIHNlbGVjdG9yIGFuZCByZXR1cm4gdGhlbS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIFxufVxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ui/assets/js/elements.js\n");

/***/ })

/******/ });