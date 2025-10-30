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
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
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

/***/ "(api)/./pages/api/signup.js":
/*!*****************************!*\
  !*** ./pages/api/signup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.js\");\n// pages/api/signup.js\n // adjust path if needed\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).json({\n        error: \"Method not allowed\"\n    });\n    const { username , displayName , email , password  } = req.body || {};\n    if (!username || !displayName || !email || !password) {\n        return res.status(400).json({\n            error: \"All fields are required\"\n        });\n    }\n    try {\n        const existing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (existing) return res.status(409).json({\n            error: \"Email already in use\"\n        });\n        const created = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.create({\n            data: {\n                username,\n                displayName,\n                email,\n                password\n            }\n        });\n        const safeUser = {\n            id: created.id,\n            username: created.username,\n            displayName: created.displayName,\n            email: created.email,\n            createdAt: created.createdAt\n        };\n        return res.status(201).json({\n            user: safeUser\n        });\n    } catch (e) {\n        console.error(\"signup error:\", e);\n        return res.status(500).json({\n            error: \"Server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbnVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0JBQXNCO0FBQ29CLENBQUMsd0JBQXdCO0FBRXBELGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsS0FBSyxFQUFFLG9CQUFvQjtLQUFFLENBQUMsQ0FBQztJQUV4RixNQUFNLEVBQUVDLFFBQVEsR0FBRUMsV0FBVyxHQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRSxHQUFHVCxHQUFHLENBQUNVLElBQUksSUFBSSxFQUFFO0lBQ2pFLElBQUksQ0FBQ0osUUFBUSxJQUFJLENBQUNDLFdBQVcsSUFBSSxDQUFDQyxLQUFLLElBQUksQ0FBQ0MsUUFBUSxFQUFFO1FBQ3BELE9BQU9SLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLHlCQUF5QjtTQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1NLFFBQVEsR0FBRyxNQUFNYiwrREFBc0IsQ0FBQztZQUFFZ0IsS0FBSyxFQUFFO2dCQUFFTixLQUFLO2FBQUU7U0FBRSxDQUFDO1FBQ25FLElBQUlHLFFBQVEsRUFBRSxPQUFPVixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxzQkFBc0I7U0FBRSxDQUFDLENBQUM7UUFFN0UsTUFBTVUsT0FBTyxHQUFHLE1BQU1qQiwyREFBa0IsQ0FBQztZQUN2Q21CLElBQUksRUFBRTtnQkFBRVgsUUFBUTtnQkFBRUMsV0FBVztnQkFBRUMsS0FBSztnQkFBRUMsUUFBUTthQUFFO1NBQ2pELENBQUM7UUFFRixNQUFNUyxRQUFRLEdBQUc7WUFDZkMsRUFBRSxFQUFFSixPQUFPLENBQUNJLEVBQUU7WUFDZGIsUUFBUSxFQUFFUyxPQUFPLENBQUNULFFBQVE7WUFDMUJDLFdBQVcsRUFBRVEsT0FBTyxDQUFDUixXQUFXO1lBQ2hDQyxLQUFLLEVBQUVPLE9BQU8sQ0FBQ1AsS0FBSztZQUNwQlksU0FBUyxFQUFFTCxPQUFPLENBQUNLLFNBQVM7U0FDN0I7UUFFRCxPQUFPbkIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFUSxJQUFJLEVBQUVNLFFBQVE7U0FBRSxDQUFDLENBQUM7SUFDbEQsRUFBRSxPQUFPRyxDQUFDLEVBQUU7UUFDVkMsT0FBTyxDQUFDakIsS0FBSyxDQUFDLGVBQWUsRUFBRWdCLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU9wQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxjQUFjO1NBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW0zMTgwLy4vcGFnZXMvYXBpL3NpZ251cC5qcz9hODlmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9zaWdudXAuanNcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIjsgLy8gYWRqdXN0IHBhdGggaWYgbmVlZGVkXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcclxuXHJcbiAgY29uc3QgeyB1c2VybmFtZSwgZGlzcGxheU5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHkgfHwge307XHJcbiAgaWYgKCF1c2VybmFtZSB8fCAhZGlzcGxheU5hbWUgfHwgIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIiB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbCB9IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBlcnJvcjogXCJFbWFpbCBhbHJlYWR5IGluIHVzZVwiIH0pO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IHVzZXJuYW1lLCBkaXNwbGF5TmFtZSwgZW1haWwsIHBhc3N3b3JkIH0sIC8vIHBsYWluIHRleHQgYXMgcmVxdWVzdGVkXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzYWZlVXNlciA9IHtcclxuICAgICAgaWQ6IGNyZWF0ZWQuaWQsXHJcbiAgICAgIHVzZXJuYW1lOiBjcmVhdGVkLnVzZXJuYW1lLFxyXG4gICAgICBkaXNwbGF5TmFtZTogY3JlYXRlZC5kaXNwbGF5TmFtZSxcclxuICAgICAgZW1haWw6IGNyZWF0ZWQuZW1haWwsXHJcbiAgICAgIGNyZWF0ZWRBdDogY3JlYXRlZC5jcmVhdGVkQXQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7IHVzZXI6IHNhZmVVc2VyIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJzaWdudXAgZXJyb3I6XCIsIGUpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiU2VydmVyIGVycm9yXCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidXNlcm5hbWUiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwiZXhpc3RpbmciLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiY3JlYXRlZCIsImNyZWF0ZSIsImRhdGEiLCJzYWZlVXNlciIsImlkIiwiY3JlYXRlZEF0IiwiZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signup.js"));
module.exports = __webpack_exports__;

})();