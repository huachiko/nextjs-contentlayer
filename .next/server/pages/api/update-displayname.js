"use strict";
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
exports.id = "pages/api/update-displayname";
exports.ids = ["pages/api/update-displayname"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.js\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUM4QjtBQUM5QyxNQUFNQyxlQUFlLEdBQUdDLFVBQVU7QUFFM0IsTUFBTUMsTUFBTSxHQUNqQkYsZUFBZSxDQUFDRSxNQUFNLElBQ3RCLElBQUlILHdEQUFZLENBQUM7SUFBRUksR0FBRyxFQUFFO1FBQUMsT0FBTztRQUFFLE9BQU87UUFBRSxNQUFNO0tBQUM7Q0FBRSxDQUFDLENBQUM7QUFFeEQsSUFBSUMsSUFBcUMsRUFBRUosZUFBZSxDQUFDRSxNQUFNLEdBQUdBLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ltMzE4MC8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcHJpc21hLmpzXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XHJcbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fFxyXG4gIG5ldyBQcmlzbWFDbGllbnQoeyBsb2c6IFtcInF1ZXJ5XCIsIFwiZXJyb3JcIiwgXCJ3YXJuXCJdIH0pO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/update-displayname.js":
/*!*****************************************!*\
  !*** ./pages/api/update-displayname.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n    try {\n        const { userId , displayName  } = req.body;\n        if (!userId || !displayName) {\n            return res.status(400).json({\n                error: \"Missing userId or displayName\"\n            });\n        }\n        const updated = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.update({\n            where: {\n                id: Number(userId)\n            },\n            data: {\n                displayName\n            }\n        });\n        return res.status(200).json({\n            success: true,\n            updated\n        });\n    } catch (e) {\n        console.error(\"Failed to update display name:\", e);\n        return res.status(500).json({\n            error: \"Failed to update display name\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlLWRpc3BsYXluYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTNCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxXQUFXLEdBQUUsR0FBR1AsR0FBRyxDQUFDUSxJQUFJO1FBQ3hDLElBQUksQ0FBQ0YsTUFBTSxJQUFJLENBQUNDLFdBQVcsRUFBRTtZQUMzQixPQUFPTixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsK0JBQStCO2FBQUUsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFFRCxNQUFNSSxPQUFPLEdBQUcsTUFBTVgsMkRBQWtCLENBQUM7WUFDdkNjLEtBQUssRUFBRTtnQkFBRUMsRUFBRSxFQUFFQyxNQUFNLENBQUNSLE1BQU0sQ0FBQzthQUFFO1lBQzdCUyxJQUFJLEVBQUU7Z0JBQUVSLFdBQVc7YUFBRTtTQUN0QixDQUFDO1FBRUYsT0FBT04sR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFWSxPQUFPLEVBQUUsSUFBSTtZQUFFUCxPQUFPO1NBQUUsQ0FBQyxDQUFDO0lBQzFELEVBQUUsT0FBT1EsQ0FBQyxFQUFFO1FBQ1ZDLE9BQU8sQ0FBQ2IsS0FBSyxDQUFDLGdDQUFnQyxFQUFFWSxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPaEIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsK0JBQStCO1NBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW0zMTgwLy4vcGFnZXMvYXBpL3VwZGF0ZS1kaXNwbGF5bmFtZS5qcz9lYTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCwgZGlzcGxheU5hbWUgfSA9IHJlcS5ib2R5O1xyXG4gICAgaWYgKCF1c2VySWQgfHwgIWRpc3BsYXlOYW1lKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgdXNlcklkIG9yIGRpc3BsYXlOYW1lXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIodXNlcklkKSB9LFxyXG4gICAgICBkYXRhOiB7IGRpc3BsYXlOYW1lIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB1cGRhdGVkIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIGRpc3BsYXkgbmFtZTpcIiwgZSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGRpc3BsYXkgbmFtZVwiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInVzZXJJZCIsImRpc3BsYXlOYW1lIiwiYm9keSIsInVwZGF0ZWQiLCJ1c2VyIiwidXBkYXRlIiwid2hlcmUiLCJpZCIsIk51bWJlciIsImRhdGEiLCJzdWNjZXNzIiwiZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/update-displayname.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/update-displayname.js"));
module.exports = __webpack_exports__;

})();