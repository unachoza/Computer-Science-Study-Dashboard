module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/AlgoPractice.tsx":
/*!*****************************************!*\
  !*** ./src/Components/AlgoPractice.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_progress_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/progress.module.css */ \"./src/styles/progress.module.css\");\n/* harmony import */ var _styles_progress_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_progress_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/arianna/ariannasCode/SignatureProjects/studyCSDash/src/Components/AlgoPractice.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst AlgoPractice = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"big-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, \" Algorithm Exercises\"), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }), __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"li\", {\n    className: \"basic-text algo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Hacker Rank\"), __jsx(\"li\", {\n    className: \"basic-text algo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, \"Leet Code\"), __jsx(\"li\", {\n    className: \"basic-text algo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"Code Wars\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlgoPractice);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BbGdvUHJhY3RpY2UudHN4PzMzNjkiXSwibmFtZXMiOlsiQWxnb1ByYWN0aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsTUFBTTtBQUN6QixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFHRTtBQUFJLGFBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLENBSEYsQ0FERjtBQVdELENBWkQ7O0FBY2VBLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvQWxnb1ByYWN0aWNlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9wcm9ncmVzcy5tb2R1bGUuY3NzJztcblxuY29uc3QgQWxnb1ByYWN0aWNlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiYmlnLXRleHRcIj4gQWxnb3JpdGhtIEV4ZXJjaXNlczwvaDE+XG4gICAgICA8YnIgLz5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJhc2ljLXRleHQgYWxnb1wiPkhhY2tlciBSYW5rPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJhc2ljLXRleHQgYWxnb1wiPkxlZXQgQ29kZTwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJiYXNpYy10ZXh0IGFsZ29cIj5Db2RlIFdhcnM8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZ29QcmFjdGljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/AlgoPractice.tsx\n");

/***/ }),

/***/ "./src/Components/ProgressBar.tsx":
/*!****************************************!*\
  !*** ./src/Components/ProgressBar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_progress_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/progress.module.css */ \"./src/styles/progress.module.css\");\n/* harmony import */ var _styles_progress_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_progress_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/arianna/ariannasCode/SignatureProjects/studyCSDash/src/Components/ProgressBar.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst onlineClasses = [{\n  completed: `${Math.round(20000 / 258)}`,\n  hours: 19,\n  name: 'Zero to Master: Coding Interview',\n  platform: 'Udemy'\n}, {\n  completed: `${Math.round(3300 / 36)}`,\n  hours: 6,\n  name: 'Coding Interview Jumpstart',\n  platform: 'Udemy'\n}, {\n  completed: 0,\n  hours: 21,\n  name: 'Master Class: Javascript Algorithms and Data Structure',\n  platform: 'Udemy'\n}, {\n  completed: `${Math.round(1600 / 85)}`,\n  hours: 4.5,\n  name: 'Foundations of Computer Science',\n  platform: 'Udemy'\n}, {\n  completed: 0,\n  hours: 28.5,\n  name: 'Data Science Bootcamp 2020',\n  platform: 'Udemy'\n}, {\n  completed: 0,\n  hours: 17,\n  name: ' Divide and Conquer, Sorting, Searching, and Randomized Algorithms',\n  platform: 'Coursera',\n  specialization: 'Algorithms'\n}, {\n  completed: 0,\n  hours: 15,\n  name: 'Graph Search, Shortest Path, and Data Structures',\n  platform: 'Coursera',\n  specialization: 'Algorithms'\n}, {\n  completed: 0,\n  hours: 15,\n  name: 'Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming',\n  platform: 'Coursera',\n  specialization: 'Algorithms'\n}, {\n  completed: 0,\n  hours: 14,\n  name: 'Shortest Paths Revisited, NP-Complete Problems and What To Do About Them',\n  platform: 'Coursera',\n  specialization: 'Algorithms'\n}, {\n  completed: 0,\n  hours: 37,\n  name: 'Algorithmic Toolbox',\n  platform: 'Coursera',\n  specialization: 'Data Structures'\n}, {\n  completed: 0,\n  hours: 22,\n  name: 'Data Structures',\n  platform: 'Coursera',\n  specialization: 'Data Structures'\n}, {\n  completed: 0,\n  hours: 55,\n  name: 'Algorithms on Graphs',\n  platform: 'Coursera',\n  specialization: 'Data Structures'\n}, {\n  completed: 0,\n  hours: 17,\n  name: 'Algorithms on Strings',\n  platform: 'Coursera',\n  specialization: 'Data Structures'\n}, {\n  completed: 0,\n  hours: 27,\n  name: 'Advanced Algorithms and Complexity',\n  platform: 'Coursera',\n  specialization: 'Data Structures'\n}, {\n  completed: 0,\n  hours: 17,\n  name: 'SGenome Assembly Programming Challenge',\n  platform: 'Coursera',\n  specialization: 'Data Structures'\n}];\nconst courseHrs = [37, 22, 55, 17, 27, 17, 27, 17, 15, 15, 14, 19, 21.5, 6, 4.5, 28.5];\n\nconst totalStudyTime = courseHrs => {\n  let total = courseHrs.reduce(function (a, b) {\n    return a + b;\n  }, 0);\n  return total;\n};\n\nconst ProgressBar = () => {\n  return __jsx(\"div\", {\n    className: \"main\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 5\n    }\n  }, onlineClasses.map(udemyClass => __jsx(\"div\", {\n    style: {\n      margin: 10\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      background: '#9198'\n    },\n    className: \"basic-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, udemyClass.name), __jsx(\"div\", {\n    style: {\n      color: 'white'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  }, \"Completed: \", udemyClass.completed, \" %\"))), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"big-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 9\n    }\n  }, \"Total Study Time \", totalStudyTime(courseHrs), \" Hours\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgressBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Qcm9ncmVzc0Jhci50c3g/ZjllOCJdLCJuYW1lcyI6WyJvbmxpbmVDbGFzc2VzIiwiY29tcGxldGVkIiwiTWF0aCIsInJvdW5kIiwiaG91cnMiLCJuYW1lIiwicGxhdGZvcm0iLCJzcGVjaWFsaXphdGlvbiIsImNvdXJzZUhycyIsInRvdGFsU3R1ZHlUaW1lIiwidG90YWwiLCJyZWR1Y2UiLCJhIiwiYiIsIlByb2dyZXNzQmFyIiwibWFwIiwidWRlbXlDbGFzcyIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsV0FBUyxFQUFHLEdBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLFFBQVEsR0FBbkIsQ0FBd0IsRUFEeEM7QUFFRUMsT0FBSyxFQUFFLEVBRlQ7QUFHRUMsTUFBSSxFQUFFLGtDQUhSO0FBSUVDLFVBQVEsRUFBRTtBQUpaLENBRG9CLEVBT3BCO0FBQ0VMLFdBQVMsRUFBRyxHQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxPQUFPLEVBQWxCLENBQXNCLEVBRHRDO0FBRUVDLE9BQUssRUFBRSxDQUZUO0FBR0VDLE1BQUksRUFBRSw0QkFIUjtBQUlFQyxVQUFRLEVBQUU7QUFKWixDQVBvQixFQWFwQjtBQUNFTCxXQUFTLEVBQUUsQ0FEYjtBQUVFRyxPQUFLLEVBQUUsRUFGVDtBQUdFQyxNQUFJLEVBQUUsd0RBSFI7QUFJRUMsVUFBUSxFQUFFO0FBSlosQ0Fib0IsRUFtQnBCO0FBQ0VMLFdBQVMsRUFBRyxHQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxPQUFPLEVBQWxCLENBQXNCLEVBRHRDO0FBRUVDLE9BQUssRUFBRSxHQUZUO0FBR0VDLE1BQUksRUFBRSxpQ0FIUjtBQUlFQyxVQUFRLEVBQUU7QUFKWixDQW5Cb0IsRUF5QnBCO0FBQ0VMLFdBQVMsRUFBRSxDQURiO0FBRUVHLE9BQUssRUFBRSxJQUZUO0FBR0VDLE1BQUksRUFBRSw0QkFIUjtBQUlFQyxVQUFRLEVBQUU7QUFKWixDQXpCb0IsRUErQnBCO0FBQ0VMLFdBQVMsRUFBRSxDQURiO0FBRUVHLE9BQUssRUFBRSxFQUZUO0FBR0VDLE1BQUksRUFBRSxvRUFIUjtBQUlFQyxVQUFRLEVBQUUsVUFKWjtBQUtFQyxnQkFBYyxFQUFFO0FBTGxCLENBL0JvQixFQXNDcEI7QUFDRU4sV0FBUyxFQUFFLENBRGI7QUFFRUcsT0FBSyxFQUFFLEVBRlQ7QUFHRUMsTUFBSSxFQUFFLGtEQUhSO0FBSUVDLFVBQVEsRUFBRSxVQUpaO0FBS0VDLGdCQUFjLEVBQUU7QUFMbEIsQ0F0Q29CLEVBNkNwQjtBQUNFTixXQUFTLEVBQUUsQ0FEYjtBQUVFRyxPQUFLLEVBQUUsRUFGVDtBQUdFQyxNQUFJLEVBQUUsb0VBSFI7QUFJRUMsVUFBUSxFQUFFLFVBSlo7QUFLRUMsZ0JBQWMsRUFBRTtBQUxsQixDQTdDb0IsRUFvRHBCO0FBQ0VOLFdBQVMsRUFBRSxDQURiO0FBRUVHLE9BQUssRUFBRSxFQUZUO0FBR0VDLE1BQUksRUFBRSwwRUFIUjtBQUlFQyxVQUFRLEVBQUUsVUFKWjtBQUtFQyxnQkFBYyxFQUFFO0FBTGxCLENBcERvQixFQTJEcEI7QUFDRU4sV0FBUyxFQUFFLENBRGI7QUFFRUcsT0FBSyxFQUFFLEVBRlQ7QUFHRUMsTUFBSSxFQUFFLHFCQUhSO0FBSUVDLFVBQVEsRUFBRSxVQUpaO0FBS0VDLGdCQUFjLEVBQUU7QUFMbEIsQ0EzRG9CLEVBa0VwQjtBQUNFTixXQUFTLEVBQUUsQ0FEYjtBQUVFRyxPQUFLLEVBQUUsRUFGVDtBQUdFQyxNQUFJLEVBQUUsaUJBSFI7QUFJRUMsVUFBUSxFQUFFLFVBSlo7QUFLRUMsZ0JBQWMsRUFBRTtBQUxsQixDQWxFb0IsRUF5RXBCO0FBQ0VOLFdBQVMsRUFBRSxDQURiO0FBRUVHLE9BQUssRUFBRSxFQUZUO0FBR0VDLE1BQUksRUFBRSxzQkFIUjtBQUlFQyxVQUFRLEVBQUUsVUFKWjtBQUtFQyxnQkFBYyxFQUFFO0FBTGxCLENBekVvQixFQWdGcEI7QUFDRU4sV0FBUyxFQUFFLENBRGI7QUFFRUcsT0FBSyxFQUFFLEVBRlQ7QUFHRUMsTUFBSSxFQUFFLHVCQUhSO0FBSUVDLFVBQVEsRUFBRSxVQUpaO0FBS0VDLGdCQUFjLEVBQUU7QUFMbEIsQ0FoRm9CLEVBdUZwQjtBQUNFTixXQUFTLEVBQUUsQ0FEYjtBQUVFRyxPQUFLLEVBQUUsRUFGVDtBQUdFQyxNQUFJLEVBQUUsb0NBSFI7QUFJRUMsVUFBUSxFQUFFLFVBSlo7QUFLRUMsZ0JBQWMsRUFBRTtBQUxsQixDQXZGb0IsRUE4RnBCO0FBQ0VOLFdBQVMsRUFBRSxDQURiO0FBRUVHLE9BQUssRUFBRSxFQUZUO0FBR0VDLE1BQUksRUFBRSx3Q0FIUjtBQUlFQyxVQUFRLEVBQUUsVUFKWjtBQUtFQyxnQkFBYyxFQUFFO0FBTGxCLENBOUZvQixDQUF0QjtBQXVHQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDLEVBQWlELElBQWpELEVBQXVELENBQXZELEVBQTBELEdBQTFELEVBQStELElBQS9ELENBQWxCOztBQUNBLE1BQU1DLGNBQWMsR0FBSUQsU0FBRCxJQUF5QjtBQUM5QyxNQUFJRSxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0csTUFBVixDQUFpQixVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDM0MsV0FBT0QsQ0FBQyxHQUFHQyxDQUFYO0FBQ0QsR0FGVyxFQUVULENBRlMsQ0FBWjtBQUdBLFNBQU9ILEtBQVA7QUFDRCxDQUxEOztBQU1BLE1BQU1JLFdBQVcsR0FBRyxNQUFNO0FBQ3hCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dkLGFBQWEsQ0FBQ2UsR0FBZCxDQUFtQkMsVUFBRCxJQUNqQjtBQUFLLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxnQkFBVSxFQUFFO0FBRFAsS0FEVDtBQUlFLGFBQVMsRUFBQyxZQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0YsVUFBVSxDQUFDWCxJQU5kLENBREYsRUFTRTtBQUFLLFNBQUssRUFBRTtBQUFFYyxXQUFLLEVBQUU7QUFBVCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTRDSCxVQUFVLENBQUNmLFNBQXZELE9BVEYsQ0FERCxDQURILEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBMkNRLGNBQWMsQ0FBQ0QsU0FBRCxDQUF6RCxXQURGLENBZkYsQ0FERjtBQXFCRCxDQXRCRDs7QUF3QmVNLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL3Byb2dyZXNzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBvbmxpbmVDbGFzc2VzID0gW1xuICB7XG4gICAgY29tcGxldGVkOiBgJHtNYXRoLnJvdW5kKDIwMDAwIC8gMjU4KX1gLFxuICAgIGhvdXJzOiAxOSxcbiAgICBuYW1lOiAnWmVybyB0byBNYXN0ZXI6IENvZGluZyBJbnRlcnZpZXcnLFxuICAgIHBsYXRmb3JtOiAnVWRlbXknLFxuICB9LFxuICB7XG4gICAgY29tcGxldGVkOiBgJHtNYXRoLnJvdW5kKDMzMDAgLyAzNil9YCxcbiAgICBob3VyczogNixcbiAgICBuYW1lOiAnQ29kaW5nIEludGVydmlldyBKdW1wc3RhcnQnLFxuICAgIHBsYXRmb3JtOiAnVWRlbXknLFxuICB9LFxuICB7XG4gICAgY29tcGxldGVkOiAwLFxuICAgIGhvdXJzOiAyMSxcbiAgICBuYW1lOiAnTWFzdGVyIENsYXNzOiBKYXZhc2NyaXB0IEFsZ29yaXRobXMgYW5kIERhdGEgU3RydWN0dXJlJyxcbiAgICBwbGF0Zm9ybTogJ1VkZW15JyxcbiAgfSxcbiAge1xuICAgIGNvbXBsZXRlZDogYCR7TWF0aC5yb3VuZCgxNjAwIC8gODUpfWAsXG4gICAgaG91cnM6IDQuNSxcbiAgICBuYW1lOiAnRm91bmRhdGlvbnMgb2YgQ29tcHV0ZXIgU2NpZW5jZScsXG4gICAgcGxhdGZvcm06ICdVZGVteScsXG4gIH0sXG4gIHtcbiAgICBjb21wbGV0ZWQ6IDAsXG4gICAgaG91cnM6IDI4LjUsXG4gICAgbmFtZTogJ0RhdGEgU2NpZW5jZSBCb290Y2FtcCAyMDIwJyxcbiAgICBwbGF0Zm9ybTogJ1VkZW15JyxcbiAgfSxcbiAge1xuICAgIGNvbXBsZXRlZDogMCxcbiAgICBob3VyczogMTcsXG4gICAgbmFtZTogJyBEaXZpZGUgYW5kIENvbnF1ZXIsIFNvcnRpbmcsIFNlYXJjaGluZywgYW5kIFJhbmRvbWl6ZWQgQWxnb3JpdGhtcycsXG4gICAgcGxhdGZvcm06ICdDb3Vyc2VyYScsXG4gICAgc3BlY2lhbGl6YXRpb246ICdBbGdvcml0aG1zJyxcbiAgfSxcbiAge1xuICAgIGNvbXBsZXRlZDogMCxcbiAgICBob3VyczogMTUsXG4gICAgbmFtZTogJ0dyYXBoIFNlYXJjaCwgU2hvcnRlc3QgUGF0aCwgYW5kIERhdGEgU3RydWN0dXJlcycsXG4gICAgcGxhdGZvcm06ICdDb3Vyc2VyYScsXG4gICAgc3BlY2lhbGl6YXRpb246ICdBbGdvcml0aG1zJyxcbiAgfSxcbiAge1xuICAgIGNvbXBsZXRlZDogMCxcbiAgICBob3VyczogMTUsXG4gICAgbmFtZTogJ0dyZWVkeSBBbGdvcml0aG1zLCBNaW5pbXVtIFNwYW5uaW5nIFRyZWVzLCBhbmQgRHluYW1pYyBQcm9ncmFtbWluZycsXG4gICAgcGxhdGZvcm06ICdDb3Vyc2VyYScsXG4gICAgc3BlY2lhbGl6YXRpb246ICdBbGdvcml0aG1zJyxcbiAgfSxcbiAge1xuICAgIGNvbXBsZXRlZDogMCxcbiAgICBob3VyczogMTQsXG4gICAgbmFtZTogJ1Nob3J0ZXN0IFBhdGhzIFJldmlzaXRlZCwgTlAtQ29tcGxldGUgUHJvYmxlbXMgYW5kIFdoYXQgVG8gRG8gQWJvdXQgVGhlbScsXG4gICAgcGxhdGZvcm06ICdDb3Vyc2VyYScsXG4gICAgc3BlY2lhbGl6YXRpb246ICdBbGdvcml0aG1zJyxcbiAgfSxcbiAge1xuICAgIGNvbXBsZXRlZDogMCxcbiAgICBob3VyczogMzcsXG4gICAgbmFtZTogJ0FsZ29yaXRobWljIFRvb2xib3gnLFxuICAgIHBsYXRmb3JtOiAnQ291cnNlcmEnLFxuICAgIHNwZWNpYWxpemF0aW9uOiAnRGF0YSBTdHJ1Y3R1cmVzJyxcbiAgfSxcbiAge1xuICAgIGNvbXBsZXRlZDogMCxcbiAgICBob3VyczogMjIsXG4gICAgbmFtZTogJ0RhdGEgU3RydWN0dXJlcycsXG4gICAgcGxhdGZvcm06ICdDb3Vyc2VyYScsXG4gICAgc3BlY2lhbGl6YXRpb246ICdEYXRhIFN0cnVjdHVyZXMnLFxuICB9LFxuICB7XG4gICAgY29tcGxldGVkOiAwLFxuICAgIGhvdXJzOiA1NSxcbiAgICBuYW1lOiAnQWxnb3JpdGhtcyBvbiBHcmFwaHMnLFxuICAgIHBsYXRmb3JtOiAnQ291cnNlcmEnLFxuICAgIHNwZWNpYWxpemF0aW9uOiAnRGF0YSBTdHJ1Y3R1cmVzJyxcbiAgfSxcbiAge1xuICAgIGNvbXBsZXRlZDogMCxcbiAgICBob3VyczogMTcsXG4gICAgbmFtZTogJ0FsZ29yaXRobXMgb24gU3RyaW5ncycsXG4gICAgcGxhdGZvcm06ICdDb3Vyc2VyYScsXG4gICAgc3BlY2lhbGl6YXRpb246ICdEYXRhIFN0cnVjdHVyZXMnLFxuICB9LFxuICB7XG4gICAgY29tcGxldGVkOiAwLFxuICAgIGhvdXJzOiAyNyxcbiAgICBuYW1lOiAnQWR2YW5jZWQgQWxnb3JpdGhtcyBhbmQgQ29tcGxleGl0eScsXG4gICAgcGxhdGZvcm06ICdDb3Vyc2VyYScsXG4gICAgc3BlY2lhbGl6YXRpb246ICdEYXRhIFN0cnVjdHVyZXMnLFxuICB9LFxuICB7XG4gICAgY29tcGxldGVkOiAwLFxuICAgIGhvdXJzOiAxNyxcbiAgICBuYW1lOiAnU0dlbm9tZSBBc3NlbWJseSBQcm9ncmFtbWluZyBDaGFsbGVuZ2UnLFxuICAgIHBsYXRmb3JtOiAnQ291cnNlcmEnLFxuICAgIHNwZWNpYWxpemF0aW9uOiAnRGF0YSBTdHJ1Y3R1cmVzJyxcbiAgfSxcbl07XG5cbmNvbnN0IGNvdXJzZUhycyA9IFszNywgMjIsIDU1LCAxNywgMjcsIDE3LCAyNywgMTcsIDE1LCAxNSwgMTQsIDE5LCAyMS41LCA2LCA0LjUsIDI4LjVdO1xuY29uc3QgdG90YWxTdHVkeVRpbWUgPSAoY291cnNlSHJzOiBudW1iZXJbXSkgPT4ge1xuICBsZXQgdG90YWwgPSBjb3Vyc2VIcnMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBiO1xuICB9LCAwKTtcbiAgcmV0dXJuIHRvdGFsO1xufTtcbmNvbnN0IFByb2dyZXNzQmFyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAge29ubGluZUNsYXNzZXMubWFwKCh1ZGVteUNsYXNzKSA9PiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzkxOTgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhc2ljLXRleHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt1ZGVteUNsYXNzLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5Db21wbGV0ZWQ6IHt1ZGVteUNsYXNzLmNvbXBsZXRlZH0gJTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYmlnLXRleHRcIj5Ub3RhbCBTdHVkeSBUaW1lIHt0b3RhbFN0dWR5VGltZShjb3Vyc2VIcnMpfSBIb3VyczwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/ProgressBar.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/ProgressBar */ \"./src/Components/ProgressBar.tsx\");\n/* harmony import */ var _Components_AlgoPractice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/AlgoPractice */ \"./src/Components/AlgoPractice.tsx\");\nvar _jsxFileName = \"/Users/arianna/ariannasCode/SignatureProjects/studyCSDash/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Home() {\n  return __jsx(\"div\", {\n    className: \"App\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"header\", {\n    className: \"App-header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"blue-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Arianna, Learn Data Structures and Algorithms and how to make money, like now.\")), __jsx(\"main\", {\n    className: \"main\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(_Components_ProgressBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(_Components_AlgoPractice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsU0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNGQURGLENBREYsRUFJRTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUpGLENBREY7QUFXRDs7QUFFY0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9Db21wb25lbnRzL1Byb2dyZXNzQmFyJztcbmltcG9ydCBBbGdvUHJhY3RpY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9BbGdvUHJhY3RpY2UnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLXRleHRcIj5Bcmlhbm5hLCBMZWFybiBEYXRhIFN0cnVjdHVyZXMgYW5kIEFsZ29yaXRobXMgYW5kIGhvdyB0byBtYWtlIG1vbmV5LCBsaWtlIG5vdy48L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8UHJvZ3Jlc3NCYXIgLz5cbiAgICAgICAgPEFsZ29QcmFjdGljZSAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/styles/progress.module.css":
/*!****************************************!*\
  !*** ./src/styles/progress.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"App\": \"progress_App__1q2d3\",\n\t\"App-header\": \"progress_App-header__1wUIK\",\n\t\"blue-text\": \"progress_blue-text__1ABN_\",\n\t\"basic-text\": \"progress_basic-text__357So\",\n\t\"main\": \"progress_main__3CANj\",\n\t\"big-text\": \"progress_big-text__2IMDa\",\n\t\"algo\": \"progress_algo__2SBfK\",\n\t\"container\": \"progress_container__2jok5\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3Byb2dyZXNzLm1vZHVsZS5jc3M/N2I5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9wcm9ncmVzcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQXBwXCI6IFwicHJvZ3Jlc3NfQXBwX18xcTJkM1wiLFxuXHRcIkFwcC1oZWFkZXJcIjogXCJwcm9ncmVzc19BcHAtaGVhZGVyX18xd1VJS1wiLFxuXHRcImJsdWUtdGV4dFwiOiBcInByb2dyZXNzX2JsdWUtdGV4dF9fMUFCTl9cIixcblx0XCJiYXNpYy10ZXh0XCI6IFwicHJvZ3Jlc3NfYmFzaWMtdGV4dF9fMzU3U29cIixcblx0XCJtYWluXCI6IFwicHJvZ3Jlc3NfbWFpbl9fM0NBTmpcIixcblx0XCJiaWctdGV4dFwiOiBcInByb2dyZXNzX2JpZy10ZXh0X18ySU1EYVwiLFxuXHRcImFsZ29cIjogXCJwcm9ncmVzc19hbGdvX18yU0JmS1wiLFxuXHRcImNvbnRhaW5lclwiOiBcInByb2dyZXNzX2NvbnRhaW5lcl9fMmpvazVcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/progress.module.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });