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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalProvider\": () => (/* binding */ GlobalProvider),\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst GlobalProvider = ({ initialLocales , children  })=>{\n    const localeValue = (0,next_intl__WEBPACK_IMPORTED_MODULE_2__.useLocale)();\n    const { 0: locales , 1: setLocales  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialLocales ?? [\n        {\n            \"name\": \"English\",\n            \"short\": \"en\"\n        }\n    ]);\n    const { 0: locale , 1: setLocale  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"name\": \"English\",\n        \"short\": \"en\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!locales) {\n            return;\n        }\n        const currentLangValue = locales.find((el)=>el.short === localeValue);\n        setLocale(currentLangValue);\n    }, [\n        locales\n    ]);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            locales,\n            locale,\n            setLocales,\n            setLocale\n        };\n    }, [\n        locales,\n        locale\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/alexispang/myProjectDIP/nextjs-contentlayer/global-context.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\nconst useGlobalContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n    if (!context) {\n        throw new Error(\"useGlobalContext must be used within a GlobalProvider\");\n    }\n    return {\n        ...context\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nbG9iYWwtY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQStFO0FBQ3pDO0FBRXRDLE1BQU1NLGFBQWEsaUJBQUdOLG9EQUFhLENBQUMsSUFBSSxDQUFDO0FBRWxDLE1BQU1PLGNBQWMsR0FBRyxDQUFDLEVBQUVDLGNBQWMsR0FBRUMsUUFBUSxHQUFFLEdBQUs7SUFDOUQsTUFBTUMsV0FBVyxHQUFHTCxvREFBUyxFQUFFO0lBQy9CLE1BQU0sS0FBQ00sT0FBTyxNQUFFQyxVQUFVLE1BQUlULCtDQUFRLENBQUNLLGNBQWMsSUFBSTtRQUFDO1lBQUMsTUFBTSxFQUFDLFNBQVM7WUFBQyxPQUFPLEVBQUMsSUFBSTtTQUFDO0tBQUMsQ0FBQztJQUMzRixNQUFNLEtBQUNLLE1BQU0sTUFBRUMsU0FBUyxNQUFJWCwrQ0FBUSxDQUFDO1FBQUMsTUFBTSxFQUFDLFNBQVM7UUFBQyxPQUFPLEVBQUMsSUFBSTtLQUFDLENBQUM7SUFFckVDLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ08sT0FBTyxFQUFFO1lBQ1osT0FBTTtRQUNSLENBQUM7UUFFRCxNQUFNSSxnQkFBZ0IsR0FBR0osT0FBTyxDQUFDSyxJQUFJLENBQUMsQ0FBQ0MsRUFBRSxHQUFLQSxFQUFFLENBQUNDLEtBQUssS0FBS1IsV0FBVyxDQUFDO1FBQ3ZFSSxTQUFTLENBQUNDLGdCQUFnQixDQUFDO0lBQzdCLENBQUMsRUFBRTtRQUFDSixPQUFPO0tBQUMsQ0FBQztJQUViLE1BQU1RLEtBQUssR0FBR2xCLDhDQUFPLENBQUMsSUFBTTtRQUMxQixPQUFPO1lBQ0xVLE9BQU87WUFDUEUsTUFBTTtZQUNORCxVQUFVO1lBQ1ZFLFNBQVM7U0FDVjtJQUNILENBQUMsRUFBRTtRQUFDSCxPQUFPO1FBQUVFLE1BQU07S0FBQyxDQUFDO0lBRXJCLHFCQUNFLDhEQUFDUCxhQUFhLENBQUNjLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUNqQ1YsUUFBUTs7Ozs7aUJBQ2MsQ0FDMUI7QUFDSCxDQUFDO0FBRU0sTUFBTVksZ0JBQWdCLEdBQUcsSUFBTTtJQUNwQyxNQUFNQyxPQUFPLEdBQUdwQixpREFBVSxDQUFDSSxhQUFhLENBQUM7SUFDekMsSUFBSSxDQUFDZ0IsT0FBTyxFQUFFO1FBQ1osTUFBTSxJQUFJQyxLQUFLLENBQUMsdURBQXVELENBQUM7SUFDMUUsQ0FBQztJQUVELE9BQU87UUFDTCxHQUFHRCxPQUFPO0tBQ1g7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW0zMTgwLy4vZ2xvYmFsLWNvbnRleHQuanM/M2QzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZU1lbW8sIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gXCJuZXh0LWludGxcIjtcblxuY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgaW5pdGlhbExvY2FsZXMsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgbG9jYWxlVmFsdWUgPSB1c2VMb2NhbGUoKVxuICBjb25zdCBbbG9jYWxlcywgc2V0TG9jYWxlc10gPSB1c2VTdGF0ZShpbml0aWFsTG9jYWxlcyA/PyBbe1wibmFtZVwiOlwiRW5nbGlzaFwiLFwic2hvcnRcIjpcImVuXCJ9XSlcbiAgY29uc3QgW2xvY2FsZSwgc2V0TG9jYWxlXSA9IHVzZVN0YXRlKHtcIm5hbWVcIjpcIkVuZ2xpc2hcIixcInNob3J0XCI6XCJlblwifSlcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2NhbGVzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50TGFuZ1ZhbHVlID0gbG9jYWxlcy5maW5kKChlbCkgPT4gZWwuc2hvcnQgPT09IGxvY2FsZVZhbHVlKVxuICAgIHNldExvY2FsZShjdXJyZW50TGFuZ1ZhbHVlKVxuICB9LCBbbG9jYWxlc10pXG5cbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9jYWxlcyxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHNldExvY2FsZXMsXG4gICAgICBzZXRMb2NhbGVcbiAgICB9XG4gIH0sIFtsb2NhbGVzLCBsb2NhbGVdKVxuXG4gIHJldHVybiAoXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlR2xvYmFsQ29udGV4dCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgR2xvYmFsUHJvdmlkZXInKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5jb250ZXh0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlTWVtbyIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUxvY2FsZSIsIkdsb2JhbENvbnRleHQiLCJHbG9iYWxQcm92aWRlciIsImluaXRpYWxMb2NhbGVzIiwiY2hpbGRyZW4iLCJsb2NhbGVWYWx1ZSIsImxvY2FsZXMiLCJzZXRMb2NhbGVzIiwibG9jYWxlIiwic2V0TG9jYWxlIiwiY3VycmVudExhbmdWYWx1ZSIsImZpbmQiLCJlbCIsInNob3J0IiwidmFsdWUiLCJQcm92aWRlciIsInVzZUdsb2JhbENvbnRleHQiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./global-context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-context */ \"./global-context.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_intl__WEBPACK_IMPORTED_MODULE_3__.NextIntlProvider, {\n        messages: pageProps?.messages,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_context__WEBPACK_IMPORTED_MODULE_2__.GlobalProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/alexispang/myProjectDIP/nextjs-contentlayer/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/alexispang/myProjectDIP/nextjs-contentlayer/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alexispang/myProjectDIP/nextjs-contentlayer/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBb0I7QUFFOEI7QUFDTjtBQUM3QixTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN0RCxxQkFDRSw4REFBQ0gsdURBQWdCO1FBQUNJLFFBQVEsRUFBRUQsU0FBUyxFQUFFQyxRQUFRO2tCQUM3Qyw0RUFBQ0wsMkRBQWM7c0JBQ2IsNEVBQUNHLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNiOzs7OztZQUNBLENBQ3BCO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ltMzE4MC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5pbXBvcnQgeyBHbG9iYWxQcm92aWRlciB9IGZyb20gJy4uL2dsb2JhbC1jb250ZXh0J1xuaW1wb3J0IHsgTmV4dEludGxQcm92aWRlciB9IGZyb20gJ25leHQtaW50bCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxOZXh0SW50bFByb3ZpZGVyIG1lc3NhZ2VzPXtwYWdlUHJvcHM/Lm1lc3NhZ2VzfT5cbiAgICAgIDxHbG9iYWxQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9HbG9iYWxQcm92aWRlcj5cbiAgICA8L05leHRJbnRsUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJHbG9iYWxQcm92aWRlciIsIk5leHRJbnRsUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1lc3NhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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