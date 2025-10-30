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
exports.id = "pages/api/signin";
exports.ids = ["pages/api/signin"];
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

/***/ "(api)/./pages/api/signin.js":
/*!*****************************!*\
  !*** ./pages/api/signin.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).json({\n        error: \"Method not allowed\"\n    });\n    const { email , password  } = req.body || {};\n    if (!email || !password) return res.status(400).json({\n        error: \"Email and password required\"\n    });\n    try {\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (!user || user.password !== password) return res.status(401).json({\n            error: \"Invalid credentials\"\n        });\n        const safeUser = {\n            id: user.id,\n            username: user.username,\n            displayName: user.displayName,\n            email: user.email,\n            createdAt: user.createdAt\n        };\n        res.status(200).json({\n            user: safeUser\n        });\n    } catch (e) {\n        console.error(\"signin error:\", e);\n        res.status(500).json({\n            error: \"Server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTNCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsS0FBSyxFQUFFLG9CQUFvQjtLQUFFLENBQUMsQ0FBQztJQUN4RixNQUFNLEVBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdQLEdBQUcsQ0FBQ1EsSUFBSSxJQUFJLEVBQUU7SUFDMUMsSUFBSSxDQUFDRixLQUFLLElBQUksQ0FBQ0MsUUFBUSxFQUFFLE9BQU9OLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsS0FBSyxFQUFFLDZCQUE2QjtLQUFFLENBQUMsQ0FBQztJQUUvRixJQUFJO1FBQ0YsTUFBTUksSUFBSSxHQUFHLE1BQU1YLCtEQUFzQixDQUFDO1lBQUVhLEtBQUssRUFBRTtnQkFBRUwsS0FBSzthQUFFO1NBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUNHLElBQUksSUFBSUEsSUFBSSxDQUFDRixRQUFRLEtBQUtBLFFBQVEsRUFBRSxPQUFPTixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxxQkFBcUI7U0FBRSxDQUFDLENBQUM7UUFFdkcsTUFBTU8sUUFBUSxHQUFHO1lBQ2ZDLEVBQUUsRUFBRUosSUFBSSxDQUFDSSxFQUFFO1lBQ1hDLFFBQVEsRUFBRUwsSUFBSSxDQUFDSyxRQUFRO1lBQ3ZCQyxXQUFXLEVBQUVOLElBQUksQ0FBQ00sV0FBVztZQUM3QlQsS0FBSyxFQUFFRyxJQUFJLENBQUNILEtBQUs7WUFDakJVLFNBQVMsRUFBRVAsSUFBSSxDQUFDTyxTQUFTO1NBQzFCO1FBQ0RmLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUssSUFBSSxFQUFFRyxRQUFRO1NBQUUsQ0FBQyxDQUFDO0lBQzNDLEVBQUUsT0FBT0ssQ0FBQyxFQUFFO1FBQ1ZDLE9BQU8sQ0FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRVksQ0FBQyxDQUFDLENBQUM7UUFDbENoQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxjQUFjO1NBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW0zMTgwLy4vcGFnZXMvYXBpL3NpZ25pbi5qcz82ZGUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHkgfHwge307XHJcbiAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIkVtYWlsIGFuZCBwYXNzd29yZCByZXF1aXJlZFwiIH0pO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbCB9IH0pO1xyXG4gICAgaWYgKCF1c2VyIHx8IHVzZXIucGFzc3dvcmQgIT09IHBhc3N3b3JkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSk7XHJcblxyXG4gICAgY29uc3Qgc2FmZVVzZXIgPSB7XHJcbiAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBjcmVhdGVkQXQ6IHVzZXIuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXNlcjogc2FmZVVzZXIgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcInNpZ25pbiBlcnJvcjpcIiwgZSk7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIlNlcnZlciBlcnJvclwiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNhZmVVc2VyIiwiaWQiLCJ1c2VybmFtZSIsImRpc3BsYXlOYW1lIiwiY3JlYXRlZEF0IiwiZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signin.js"));
module.exports = __webpack_exports__;

})();