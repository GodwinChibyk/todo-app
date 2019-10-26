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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todo; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * \n * creat, edit, read, and update todo-list\n */\nvar Todo =\n/*#__PURE__*/\nfunction () {\n  // contains all todos\n  function Todo() {\n    _classCallCheck(this, Todo);\n\n    // check if todo list alreday exist in local storage, if true parse it's value and assign it to todos\n    this.todos;\n  }\n\n  _createClass(Todo, [{\n    key: \"createTodo\",\n\n    /**\n     *\n     * if it contains todo with keys: todo and decription add it to todos and return true;\n     * if not return error. \n     */\n    value: function createTodo(todo) {}\n  }, {\n    key: \"deleteTodo\",\n\n    /**\n     * \n     * if todoId exists in todos, delete todoId.\n     * esle return error\n     */\n    value: function deleteTodo(todoId) {}\n    /**\n     * \n     * delete all todos\n     */\n\n  }, {\n    key: \"deleteAllTodos\",\n    value: function deleteAllTodos() {}\n    /**\n     * \n     * if todoId exist in todos edit todoId. else return error. \n     */\n\n  }, {\n    key: \"edit\",\n    value: function edit(todoId) {}\n    /**\n     * \n     *  if todoId exists in todos return the founded todo as object. else return empty object.\n     */\n\n  }, {\n    key: \"read\",\n    value: function read(todoId) {}\n    /**\n     * \n     * return todos\n     */\n\n  }, {\n    key: \"readAllTodos\",\n    value: function readAllTodos() {}\n    /**\n     * \n     * it todoId exists in todos, update it and return the updated todo. else return error.\n     */\n\n  }, {\n    key: \"updateTodo\",\n    value: function updateTodo(todoId) {}\n  }]);\n\n  return Todo;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhLWFwaS9hcHAvVG9kby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGEtYXBpL2FwcC9Ub2RvLmpzPzRjZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIGNyZWF0LCBlZGl0LCByZWFkLCBhbmQgdXBkYXRlIHRvZG8tbGlzdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICAvLyBjb250YWlucyBhbGwgdG9kb3NcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjaGVjayBpZiB0b2RvIGxpc3QgYWxyZWRheSBleGlzdCBpbiBsb2NhbCBzdG9yYWdlLCBpZiB0cnVlIHBhcnNlIGl0J3MgdmFsdWUgYW5kIGFzc2lnbiBpdCB0byB0b2Rvc1xuICAgICAgICB0aGlzLnRvZG9zO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIGlmIGl0IGNvbnRhaW5zIHRvZG8gd2l0aCBrZXlzOiB0b2RvIGFuZCBkZWNyaXB0aW9uIGFkZCBpdCB0byB0b2RvcyBhbmQgcmV0dXJuIHRydWU7XG4gICAgICogaWYgbm90IHJldHVybiBlcnJvci4gXG4gICAgICovXG4gICAgY3JlYXRlVG9kbyh0b2RvKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIGlmIHRvZG9JZCBleGlzdHMgaW4gdG9kb3MsIGRlbGV0ZSB0b2RvSWQuXG4gICAgICogZXNsZSByZXR1cm4gZXJyb3JcbiAgICAgKi9cbiAgICBkZWxldGVUb2RvICh0b2RvSWQpIHt9XG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIGRlbGV0ZSBhbGwgdG9kb3NcbiAgICAgKi9cbiAgICBkZWxldGVBbGxUb2RvcyAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogaWYgdG9kb0lkIGV4aXN0IGluIHRvZG9zIGVkaXQgdG9kb0lkLiBlbHNlIHJldHVybiBlcnJvci4gXG4gICAgICovXG4gICAgZWRpdCAodG9kb0lkKSB7fVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiAgaWYgdG9kb0lkIGV4aXN0cyBpbiB0b2RvcyByZXR1cm4gdGhlIGZvdW5kZWQgdG9kbyBhcyBvYmplY3QuIGVsc2UgcmV0dXJuIGVtcHR5IG9iamVjdC5cbiAgICAgKi9cbiAgICByZWFkICh0b2RvSWQpIHt9XG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIHJldHVybiB0b2Rvc1xuICAgICAqL1xuICAgIHJlYWRBbGxUb2RvcyAoKSB7fVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBpdCB0b2RvSWQgZXhpc3RzIGluIHRvZG9zLCB1cGRhdGUgaXQgYW5kIHJldHVybiB0aGUgdXBkYXRlZCB0b2RvLiBlbHNlIHJldHVybiBlcnJvci5cbiAgICAgKi9cbiAgICB1cGRhdGVUb2RvICh0b2RvSWQpIHt9XG5cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFJQTs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBOzs7OztBQUtBOzs7O0FBRUE7Ozs7O0FBS0E7QUFHQTs7Ozs7OztBQUlBO0FBRUE7Ozs7Ozs7QUFJQTtBQUdBOzs7Ozs7O0FBSUE7QUFHQTs7Ozs7OztBQUlBO0FBR0E7Ozs7Ozs7QUFJQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data-api/app/Todo.js\n");

/***/ }),

/***/ "./ui/assets/js/app.js":
/*!*****************************!*\
  !*** ./ui/assets/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_api_app_Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-api/app/Todo */ \"./data-api/app/Todo.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./ui/assets/js/elements.js\");\n// It handles the core functionality of the todo list.\n// Import all the needed modules\n\n // Initialize todos \n\nvar todosObj = new _data_api_app_Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar app = {}; // loop through them and display them\n\napp.displayTodos = function () {}; // Display a single todo\n\n\napp.displaySingleTodo = function (todoId) {}; // create todo\n\n\napp.createTodo = function () {} // let dateElm = getElement('.createdate');\n// let descElm = getElement('.createdesc');\n// let {value: date} = dateElm;\n// let {value: description} = descElm;\n// let todo = {date, description};\n// todosObj.createTodo(todo)\n// delete todo\n;\n\napp.deleteTodo = function (todoId) {}; // edit todo\n\n\napp.editTodo = function (todoId) {}; // Will delete all todos\n\n\napp.deleteAllTodos = function () {}; // will update single todo\n\n\napp.updateTodo = function (todoId) {}; // create app initialization engine\n\n\napp.init = function () {} // get any element\n// add all event listeners\n// Initialize app\n;\n\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS9hc3NldHMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdWkvYXNzZXRzL2pzL2FwcC5qcz8yNzMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEl0IGhhbmRsZXMgdGhlIGNvcmUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgdG9kbyBsaXN0LlxuXG4vLyBJbXBvcnQgYWxsIHRoZSBuZWVkZWQgbW9kdWxlc1xuaW1wb3J0IFRvZG8gZnJvbSAnLi4vLi4vLi4vZGF0YS1hcGkvYXBwL1RvZG8nO1xuaW1wb3J0IHtnZXRBbGxFbGVtZW50cywgZ2V0RWxlbWVudH0gZnJvbSBcIi4vZWxlbWVudHNcIlxuXG5cblxuLy8gSW5pdGlhbGl6ZSB0b2RvcyBcbmNvbnN0IHRvZG9zT2JqID0gbmV3IFRvZG8oKTtcblxuY29uc3QgYXBwID0ge31cblxuLy8gbG9vcCB0aHJvdWdoIHRoZW0gYW5kIGRpc3BsYXkgdGhlbVxuYXBwLmRpc3BsYXlUb2RvcyA9IGZ1bmN0aW9uICgpIHtcblxufVxuXG4vLyBEaXNwbGF5IGEgc2luZ2xlIHRvZG9cbmFwcC5kaXNwbGF5U2luZ2xlVG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQpIHtcblxufVxuXG4vLyBjcmVhdGUgdG9kb1xuYXBwLmNyZWF0ZVRvZG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gbGV0IGRhdGVFbG0gPSBnZXRFbGVtZW50KCcuY3JlYXRlZGF0ZScpO1xuICAgIC8vIGxldCBkZXNjRWxtID0gZ2V0RWxlbWVudCgnLmNyZWF0ZWRlc2MnKTtcblxuICAgIC8vIGxldCB7dmFsdWU6IGRhdGV9ID0gZGF0ZUVsbTtcbiAgICAvLyBsZXQge3ZhbHVlOiBkZXNjcmlwdGlvbn0gPSBkZXNjRWxtO1xuXG4gICAgLy8gbGV0IHRvZG8gPSB7ZGF0ZSwgZGVzY3JpcHRpb259O1xuXG4gICAgLy8gdG9kb3NPYmouY3JlYXRlVG9kbyh0b2RvKVxufVxuXG5cbi8vIGRlbGV0ZSB0b2RvXG5hcHAuZGVsZXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQpIHtcbiAgICBcbn1cblxuLy8gZWRpdCB0b2RvXG5hcHAuZWRpdFRvZG8gPSBmdW5jdGlvbih0b2RvSWQpIHtcblxufVxuXG4vLyBXaWxsIGRlbGV0ZSBhbGwgdG9kb3NcbmFwcC5kZWxldGVBbGxUb2RvcyA9IGZ1bmN0aW9uICgpIHtcblxufVxuXG5cbi8vIHdpbGwgdXBkYXRlIHNpbmdsZSB0b2RvXG5hcHAudXBkYXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQpIHtcblxufVxuXG4vLyBjcmVhdGUgYXBwIGluaXRpYWxpemF0aW9uIGVuZ2luZVxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZ2V0IGFueSBlbGVtZW50XG5cbiAgICAvLyBhZGQgYWxsIGV2ZW50IGxpc3RlbmVyc1xuXG5cblxufVxuXG5cblxuLy8gSW5pdGlhbGl6ZSBhcHBcbmFwcC5pbml0KCkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQWJBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBUUE7QUFYQTtBQUNBO0FBV0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ui/assets/js/app.js\n");

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