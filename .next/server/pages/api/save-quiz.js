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
exports.id = "pages/api/save-quiz";
exports.ids = ["pages/api/save-quiz"];
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

/***/ "(api)/./pages/api/save-quiz.js":
/*!********************************!*\
  !*** ./pages/api/save-quiz.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.js\");\n// pages/api/save-quiz.js\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).json({\n        error: \"Method not allowed\"\n    });\n    const { userId , topic , correct , total  } = req.body || {};\n    if (!userId || !topic || typeof correct !== \"number\" || typeof total !== \"number\") {\n        return res.status(400).json({\n            error: \"Missing or invalid fields\",\n            got: req.body\n        });\n    }\n    try {\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n            where: {\n                id: Number(userId)\n            }\n        });\n        if (!user) return res.status(404).json({\n            error: \"User not found\",\n            userId\n        });\n        const saved = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.quizSession.create({\n            data: {\n                userId: Number(userId),\n                topic,\n                correct,\n                total\n            },\n            select: {\n                id: true,\n                topic: true,\n                correct: true,\n                total: true,\n                createdAt: true\n            }\n        });\n        res.status(200).json(saved);\n    } catch (e) {\n        console.error(\"save-quiz error:\", e);\n        res.status(500).json({\n            error: \"Failed to save quiz result\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZS1xdWl6LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUJBQXlCO0FBQ2lCO0FBRTNCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsS0FBSyxFQUFFLG9CQUFvQjtLQUFFLENBQUMsQ0FBQztJQUV4RixNQUFNLEVBQUVDLE1BQU0sR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRSxHQUFHVCxHQUFHLENBQUNVLElBQUksSUFBSSxFQUFFO0lBQ3hELElBQUksQ0FBQ0osTUFBTSxJQUFJLENBQUNDLEtBQUssSUFBSSxPQUFPQyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU9DLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDakYsT0FBT1IsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsMkJBQTJCO1lBQUVNLEdBQUcsRUFBRVgsR0FBRyxDQUFDVSxJQUFJO1NBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTUUsSUFBSSxHQUFHLE1BQU1kLCtEQUFzQixDQUFDO1lBQUVnQixLQUFLLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRUMsTUFBTSxDQUFDVixNQUFNLENBQUM7YUFBRTtTQUFFLENBQUM7UUFDNUUsSUFBSSxDQUFDTSxJQUFJLEVBQUUsT0FBT1gsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsZ0JBQWdCO1lBQUVDLE1BQU07U0FBRSxDQUFDLENBQUM7UUFFNUUsTUFBTVcsS0FBSyxHQUFHLE1BQU1uQixrRUFBeUIsQ0FBQztZQUM1Q3NCLElBQUksRUFBRTtnQkFBRWQsTUFBTSxFQUFFVSxNQUFNLENBQUNWLE1BQU0sQ0FBQztnQkFBRUMsS0FBSztnQkFBRUMsT0FBTztnQkFBRUMsS0FBSzthQUFFO1lBQ3ZEWSxNQUFNLEVBQUU7Z0JBQUVOLEVBQUUsRUFBRSxJQUFJO2dCQUFFUixLQUFLLEVBQUUsSUFBSTtnQkFBRUMsT0FBTyxFQUFFLElBQUk7Z0JBQUVDLEtBQUssRUFBRSxJQUFJO2dCQUFFYSxTQUFTLEVBQUUsSUFBSTthQUFFO1NBQy9FLENBQUM7UUFFRnJCLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNhLEtBQUssQ0FBQyxDQUFDO0lBQzlCLEVBQUUsT0FBT00sQ0FBQyxFQUFFO1FBQ1ZDLE9BQU8sQ0FBQ25CLEtBQUssQ0FBQyxrQkFBa0IsRUFBRWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3JDdEIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsNEJBQTRCO1NBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW0zMTgwLy4vcGFnZXMvYXBpL3NhdmUtcXVpei5qcz81NzZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9zYXZlLXF1aXouanNcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xyXG5cclxuICBjb25zdCB7IHVzZXJJZCwgdG9waWMsIGNvcnJlY3QsIHRvdGFsIH0gPSByZXEuYm9keSB8fCB7fTtcclxuICBpZiAoIXVzZXJJZCB8fCAhdG9waWMgfHwgdHlwZW9mIGNvcnJlY3QgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHRvdGFsICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJNaXNzaW5nIG9yIGludmFsaWQgZmllbGRzXCIsIGdvdDogcmVxLmJvZHkgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogTnVtYmVyKHVzZXJJZCkgfSB9KTtcclxuICAgIGlmICghdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmRcIiwgdXNlcklkIH0pO1xyXG5cclxuICAgIGNvbnN0IHNhdmVkID0gYXdhaXQgcHJpc21hLnF1aXpTZXNzaW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgdXNlcklkOiBOdW1iZXIodXNlcklkKSwgdG9waWMsIGNvcnJlY3QsIHRvdGFsIH0sXHJcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgdG9waWM6IHRydWUsIGNvcnJlY3Q6IHRydWUsIHRvdGFsOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNhdmVkKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwic2F2ZS1xdWl6IGVycm9yOlwiLCBlKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIHNhdmUgcXVpeiByZXN1bHRcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ1c2VySWQiLCJ0b3BpYyIsImNvcnJlY3QiLCJ0b3RhbCIsImJvZHkiLCJnb3QiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJOdW1iZXIiLCJzYXZlZCIsInF1aXpTZXNzaW9uIiwiY3JlYXRlIiwiZGF0YSIsInNlbGVjdCIsImNyZWF0ZWRBdCIsImUiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/save-quiz.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/save-quiz.js"));
module.exports = __webpack_exports__;

})();