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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).json({\n        error: \"Method not allowed\"\n    });\n    const { username , displayName , email , password  } = req.body || {};\n    if (!username || !displayName || !email || !password) return res.status(400).json({\n        error: \"All fields are required\"\n    });\n    try {\n        const existing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (existing) return res.status(409).json({\n            error: \"Email already in use\"\n        });\n        const created = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.create({\n            data: {\n                username,\n                displayName,\n                email,\n                password\n            }\n        });\n        const safeUser = {\n            id: created.id,\n            username: created.username,\n            displayName: created.displayName,\n            email: created.email,\n            createdAt: created.createdAt\n        };\n        res.status(201).json({\n            user: safeUser\n        });\n    } catch (e) {\n        console.error(\"signup error:\", e);\n        res.status(500).json({\n            error: \"Server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbnVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTNCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsS0FBSyxFQUFFLG9CQUFvQjtLQUFFLENBQUMsQ0FBQztJQUN4RixNQUFNLEVBQUVDLFFBQVEsR0FBRUMsV0FBVyxHQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRSxHQUFHVCxHQUFHLENBQUNVLElBQUksSUFBSSxFQUFFO0lBQ2pFLElBQUksQ0FBQ0osUUFBUSxJQUFJLENBQUNDLFdBQVcsSUFBSSxDQUFDQyxLQUFLLElBQUksQ0FBQ0MsUUFBUSxFQUFFLE9BQU9SLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsS0FBSyxFQUFFLHlCQUF5QjtLQUFFLENBQUMsQ0FBQztJQUV4SCxJQUFJO1FBQ0YsTUFBTU0sUUFBUSxHQUFHLE1BQU1iLCtEQUFzQixDQUFDO1lBQUVnQixLQUFLLEVBQUU7Z0JBQUVOLEtBQUs7YUFBRTtTQUFFLENBQUM7UUFDbkUsSUFBSUcsUUFBUSxFQUFFLE9BQU9WLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLHNCQUFzQjtTQUFFLENBQUMsQ0FBQztRQUU3RSxNQUFNVSxPQUFPLEdBQUcsTUFBTWpCLDJEQUFrQixDQUFDO1lBQUVtQixJQUFJLEVBQUU7Z0JBQUVYLFFBQVE7Z0JBQUVDLFdBQVc7Z0JBQUVDLEtBQUs7Z0JBQUVDLFFBQVE7YUFBRTtTQUFFLENBQUM7UUFDOUYsTUFBTVMsUUFBUSxHQUFHO1lBQ2ZDLEVBQUUsRUFBRUosT0FBTyxDQUFDSSxFQUFFO1lBQ2RiLFFBQVEsRUFBRVMsT0FBTyxDQUFDVCxRQUFRO1lBQzFCQyxXQUFXLEVBQUVRLE9BQU8sQ0FBQ1IsV0FBVztZQUNoQ0MsS0FBSyxFQUFFTyxPQUFPLENBQUNQLEtBQUs7WUFDcEJZLFNBQVMsRUFBRUwsT0FBTyxDQUFDSyxTQUFTO1NBQzdCO1FBQ0RuQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVRLElBQUksRUFBRU0sUUFBUTtTQUFFLENBQUMsQ0FBQztJQUMzQyxFQUFFLE9BQU9HLENBQUMsRUFBRTtRQUNWQyxPQUFPLENBQUNqQixLQUFLLENBQUMsZUFBZSxFQUFFZ0IsQ0FBQyxDQUFDLENBQUM7UUFDbENwQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxjQUFjO1NBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW0zMTgwLy4vcGFnZXMvYXBpL3NpZ251cC5qcz9hODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcclxuICBjb25zdCB7IHVzZXJuYW1lLCBkaXNwbGF5TmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keSB8fCB7fTtcclxuICBpZiAoIXVzZXJuYW1lIHx8ICFkaXNwbGF5TmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiIH0pO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcclxuICAgIGlmIChleGlzdGluZykgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgZXJyb3I6IFwiRW1haWwgYWxyZWFkeSBpbiB1c2VcIiB9KTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHsgZGF0YTogeyB1c2VybmFtZSwgZGlzcGxheU5hbWUsIGVtYWlsLCBwYXNzd29yZCB9IH0pO1xyXG4gICAgY29uc3Qgc2FmZVVzZXIgPSB7XHJcbiAgICAgIGlkOiBjcmVhdGVkLmlkLFxyXG4gICAgICB1c2VybmFtZTogY3JlYXRlZC51c2VybmFtZSxcclxuICAgICAgZGlzcGxheU5hbWU6IGNyZWF0ZWQuZGlzcGxheU5hbWUsXHJcbiAgICAgIGVtYWlsOiBjcmVhdGVkLmVtYWlsLFxyXG4gICAgICBjcmVhdGVkQXQ6IGNyZWF0ZWQuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgdXNlcjogc2FmZVVzZXIgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcInNpZ251cCBlcnJvcjpcIiwgZSk7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIlNlcnZlciBlcnJvclwiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInVzZXJuYW1lIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsImV4aXN0aW5nIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNyZWF0ZWQiLCJjcmVhdGUiLCJkYXRhIiwic2FmZVVzZXIiLCJpZCIsImNyZWF0ZWRBdCIsImUiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/signup.js\n");

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