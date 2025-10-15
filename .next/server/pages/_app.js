/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./global-context.js":
/*!***************************!*\
  !*** ./global-context.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalProvider\": () => (/* binding */ GlobalProvider),\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst GlobalProvider = ({ initialLocales , children  })=>{\n    const localeValue = (0,next_intl__WEBPACK_IMPORTED_MODULE_2__.useLocale)();\n    const { 0: locales , 1: setLocales  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialLocales ?? [\n        {\n            \"name\": \"English\",\n            \"short\": \"en\"\n        }\n    ]);\n    const { 0: locale , 1: setLocale  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"name\": \"English\",\n        \"short\": \"en\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!locales) {\n            return;\n        }\n        const currentLangValue = locales.find((el)=>el.short === localeValue);\n        setLocale(currentLangValue);\n    }, [\n        locales\n    ]);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            locales,\n            locale,\n            setLocales,\n            setLocale\n        };\n    }, [\n        locales,\n        locale\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\IM3180\\\\New folder\\\\nextjs-contentlayer\\\\nextjs-contentlayer\\\\global-context.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\nconst useGlobalContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n    if (!context) {\n        throw new Error(\"useGlobalContext must be used within a GlobalProvider\");\n    }\n    return {\n        ...context\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nbG9iYWwtY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQStFO0FBQ3pDO0FBRXRDLE1BQU1NLGFBQWEsaUJBQUdOLG9EQUFhLENBQUMsSUFBSSxDQUFDO0FBRWxDLE1BQU1PLGNBQWMsR0FBRyxDQUFDLEVBQUVDLGNBQWMsR0FBRUMsUUFBUSxHQUFFLEdBQUs7SUFDOUQsTUFBTUMsV0FBVyxHQUFHTCxvREFBUyxFQUFFO0lBQy9CLE1BQU0sS0FBQ00sT0FBTyxNQUFFQyxVQUFVLE1BQUlULCtDQUFRLENBQUNLLGNBQWMsSUFBSTtRQUFDO1lBQUMsTUFBTSxFQUFDLFNBQVM7WUFBQyxPQUFPLEVBQUMsSUFBSTtTQUFDO0tBQUMsQ0FBQztJQUMzRixNQUFNLEtBQUNLLE1BQU0sTUFBRUMsU0FBUyxNQUFJWCwrQ0FBUSxDQUFDO1FBQUMsTUFBTSxFQUFDLFNBQVM7UUFBQyxPQUFPLEVBQUMsSUFBSTtLQUFDLENBQUM7SUFFckVDLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ08sT0FBTyxFQUFFO1lBQ1osT0FBTTtRQUNSLENBQUM7UUFFRCxNQUFNSSxnQkFBZ0IsR0FBR0osT0FBTyxDQUFDSyxJQUFJLENBQUMsQ0FBQ0MsRUFBRSxHQUFLQSxFQUFFLENBQUNDLEtBQUssS0FBS1IsV0FBVyxDQUFDO1FBQ3ZFSSxTQUFTLENBQUNDLGdCQUFnQixDQUFDO0lBQzdCLENBQUMsRUFBRTtRQUFDSixPQUFPO0tBQUMsQ0FBQztJQUViLE1BQU1RLEtBQUssR0FBR2xCLDhDQUFPLENBQUMsSUFBTTtRQUMxQixPQUFPO1lBQ0xVLE9BQU87WUFDUEUsTUFBTTtZQUNORCxVQUFVO1lBQ1ZFLFNBQVM7U0FDVjtJQUNILENBQUMsRUFBRTtRQUFDSCxPQUFPO1FBQUVFLE1BQU07S0FBQyxDQUFDO0lBRXJCLHFCQUNFLDhEQUFDUCxhQUFhLENBQUNjLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUNqQ1YsUUFBUTs7Ozs7aUJBQ2MsQ0FDMUI7QUFDSCxDQUFDO0FBRU0sTUFBTVksZ0JBQWdCLEdBQUcsSUFBTTtJQUNwQyxNQUFNQyxPQUFPLEdBQUdwQixpREFBVSxDQUFDSSxhQUFhLENBQUM7SUFDekMsSUFBSSxDQUFDZ0IsT0FBTyxFQUFFO1FBQ1osTUFBTSxJQUFJQyxLQUFLLENBQUMsdURBQXVELENBQUM7SUFDMUUsQ0FBQztJQUVELE9BQU87UUFDTCxHQUFHRCxPQUFPO0tBQ1g7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW0zMTgwLy4vZ2xvYmFsLWNvbnRleHQuanM/M2QzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlTWVtbywgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwibmV4dC1pbnRsXCI7XHJcblxyXG5jb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgaW5pdGlhbExvY2FsZXMsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBsb2NhbGVWYWx1ZSA9IHVzZUxvY2FsZSgpXHJcbiAgY29uc3QgW2xvY2FsZXMsIHNldExvY2FsZXNdID0gdXNlU3RhdGUoaW5pdGlhbExvY2FsZXMgPz8gW3tcIm5hbWVcIjpcIkVuZ2xpc2hcIixcInNob3J0XCI6XCJlblwifV0pXHJcbiAgY29uc3QgW2xvY2FsZSwgc2V0TG9jYWxlXSA9IHVzZVN0YXRlKHtcIm5hbWVcIjpcIkVuZ2xpc2hcIixcInNob3J0XCI6XCJlblwifSlcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFsb2NhbGVzKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRMYW5nVmFsdWUgPSBsb2NhbGVzLmZpbmQoKGVsKSA9PiBlbC5zaG9ydCA9PT0gbG9jYWxlVmFsdWUpXHJcbiAgICBzZXRMb2NhbGUoY3VycmVudExhbmdWYWx1ZSlcclxuICB9LCBbbG9jYWxlc10pXHJcblxyXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsb2NhbGVzLFxyXG4gICAgICBsb2NhbGUsXHJcbiAgICAgIHNldExvY2FsZXMsXHJcbiAgICAgIHNldExvY2FsZVxyXG4gICAgfVxyXG4gIH0sIFtsb2NhbGVzLCBsb2NhbGVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dClcclxuICBpZiAoIWNvbnRleHQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlR2xvYmFsQ29udGV4dCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgR2xvYmFsUHJvdmlkZXInKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmNvbnRleHRcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTG9jYWxlIiwiR2xvYmFsQ29udGV4dCIsIkdsb2JhbFByb3ZpZGVyIiwiaW5pdGlhbExvY2FsZXMiLCJjaGlsZHJlbiIsImxvY2FsZVZhbHVlIiwibG9jYWxlcyIsInNldExvY2FsZXMiLCJsb2NhbGUiLCJzZXRMb2NhbGUiLCJjdXJyZW50TGFuZ1ZhbHVlIiwiZmluZCIsImVsIiwic2hvcnQiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlR2xvYmFsQ29udGV4dCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./global-context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-context */ \"./global-context.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_intl__WEBPACK_IMPORTED_MODULE_3__.NextIntlProvider, {\n        messages: pageProps?.messages,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_context__WEBPACK_IMPORTED_MODULE_2__.GlobalProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\IM3180\\\\New folder\\\\nextjs-contentlayer\\\\nextjs-contentlayer\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\IM3180\\\\New folder\\\\nextjs-contentlayer\\\\nextjs-contentlayer\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\IM3180\\\\New folder\\\\nextjs-contentlayer\\\\nextjs-contentlayer\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBb0I7QUFFOEI7QUFDTjtBQUM3QixTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN0RCxxQkFDRSw4REFBQ0gsdURBQWdCO1FBQUNJLFFBQVEsRUFBRUQsU0FBUyxFQUFFQyxRQUFRO2tCQUM3Qyw0RUFBQ0wsMkRBQWM7c0JBQ2IsNEVBQUNHLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNiOzs7OztZQUNBLENBQ3BCO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ltMzE4MC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuaW1wb3J0IHsgR2xvYmFsUHJvdmlkZXIgfSBmcm9tICcuLi9nbG9iYWwtY29udGV4dCdcclxuaW1wb3J0IHsgTmV4dEludGxQcm92aWRlciB9IGZyb20gJ25leHQtaW50bCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0SW50bFByb3ZpZGVyIG1lc3NhZ2VzPXtwYWdlUHJvcHM/Lm1lc3NhZ2VzfT5cclxuICAgICAgPEdsb2JhbFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9HbG9iYWxQcm92aWRlcj5cclxuICAgIDwvTmV4dEludGxQcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkdsb2JhbFByb3ZpZGVyIiwiTmV4dEludGxQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWVzc2FnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next-intl":
/*!****************************!*\
  !*** external "next-intl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();