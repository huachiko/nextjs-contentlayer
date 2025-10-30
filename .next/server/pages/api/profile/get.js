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
exports.id = "pages/api/profile/get";
exports.ids = ["pages/api/profile/get"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    globalForPrisma.prisma = prisma;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxlQUFlLEdBQUdDLE1BQU07QUFFdkIsTUFBTUMsTUFBTSxHQUFHRixlQUFlLENBQUNFLE1BQU0sSUFBSSxJQUFJSCx3REFBWSxFQUFFLENBQUM7QUFFbkUsSUFBSUksSUFBcUMsRUFBRTtJQUN6Q0gsZUFBZSxDQUFDRSxNQUFNLEdBQUdBLE1BQU0sQ0FBQztBQUNsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW0zMTgwLy4vbGliL3ByaXNtYS5qcz83NTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsO1xuXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/profile/get.js":
/*!**********************************!*\
  !*** ./pages/api/profile/get.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n    try {\n        const { userId  } = req.query;\n        if (!userId) {\n            return res.status(400).json({\n                error: \"User ID required\"\n            });\n        }\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n            where: {\n                id: parseInt(userId)\n            },\n            select: {\n                id: true,\n                username: true,\n                displayName: true,\n                email: true,\n                gender: true\n            }\n        });\n        if (!user) {\n            return res.status(404).json({\n                error: \"User not found\"\n            });\n        }\n        return res.status(200).json({\n            success: true,\n            user\n        });\n    } catch (error) {\n        console.error(\"Error fetching profile:\", error);\n        return res.status(500).json({\n            error: \"Internal server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS9nZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFFOUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxLQUFLO1FBRTVCLElBQUksQ0FBQ0QsTUFBTSxFQUFFO1lBQ1gsT0FBT0wsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLGtCQUFrQjthQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBRUQsTUFBTUcsSUFBSSxHQUFHLE1BQU1WLCtEQUFzQixDQUFDO1lBQ3hDWSxLQUFLLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRUMsUUFBUSxDQUFDTixNQUFNLENBQUM7YUFBRTtZQUMvQk8sTUFBTSxFQUFFO2dCQUNORixFQUFFLEVBQUUsSUFBSTtnQkFDUkcsUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLFdBQVcsRUFBRSxJQUFJO2dCQUNqQkMsS0FBSyxFQUFFLElBQUk7Z0JBQ1hDLE1BQU0sRUFBRSxJQUFJO2FBQ2I7U0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDVCxJQUFJLEVBQUU7WUFDVCxPQUFPUCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsZ0JBQWdCO2FBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFRCxPQUFPSixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVjLE9BQU8sRUFBRSxJQUFJO1lBQUVWLElBQUk7U0FBRSxDQUFDLENBQUM7SUFDdkQsRUFBRSxPQUFPSCxLQUFLLEVBQUU7UUFDZGMsT0FBTyxDQUFDZCxLQUFLLENBQUMseUJBQXlCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQ2hELE9BQU9KLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLHVCQUF1QjtTQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ltMzE4MC8uL3BhZ2VzL2FwaS9wcm9maWxlL2dldC5qcz8xMmZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQgfSA9IHJlcS5xdWVyeTtcblxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1VzZXIgSUQgcmVxdWlyZWQnIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBwYXJzZUludCh1c2VySWQpIH0sXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgIHVzZXJuYW1lOiB0cnVlLFxuICAgICAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgIGdlbmRlcjogdHJ1ZSxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZCcgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdXNlciB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9maWxlOicsIGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInVzZXJJZCIsInF1ZXJ5IiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIiwicGFyc2VJbnQiLCJzZWxlY3QiLCJ1c2VybmFtZSIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJnZW5kZXIiLCJzdWNjZXNzIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile/get.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile/get.js"));
module.exports = __webpack_exports__;

})();