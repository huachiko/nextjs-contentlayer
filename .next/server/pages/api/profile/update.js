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
exports.id = "pages/api/profile/update";
exports.ids = ["pages/api/profile/update"];
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

/***/ "(api)/./pages/api/profile/update.js":
/*!*************************************!*\
  !*** ./pages/api/profile/update.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"PUT\") {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n    try {\n        const { userId , displayName , email , gender  } = req.body;\n        if (!userId) {\n            return res.status(400).json({\n                error: \"User ID required\"\n            });\n        }\n        // Check if email is already taken by another user\n        if (email) {\n            const existingUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findFirst({\n                where: {\n                    email: email,\n                    NOT: {\n                        id: parseInt(userId)\n                    }\n                }\n            });\n            if (existingUser) {\n                return res.status(400).json({\n                    error: \"Email already in use\"\n                });\n            }\n        }\n        const updatedUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.update({\n            where: {\n                id: parseInt(userId)\n            },\n            data: {\n                displayName: displayName,\n                email: email,\n                gender: gender\n            },\n            select: {\n                id: true,\n                username: true,\n                displayName: true,\n                email: true,\n                gender: true\n            }\n        });\n        return res.status(200).json({\n            success: true,\n            user: updatedUser,\n            message: \"Profile updated successfully\"\n        });\n    } catch (error) {\n        console.error(\"Error updating profile:\", error);\n        return res.status(500).json({\n            error: \"Internal server error\",\n            details: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS91cGRhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFFOUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEdBQUVDLFdBQVcsR0FBRUMsS0FBSyxHQUFFQyxNQUFNLEdBQUUsR0FBR1QsR0FBRyxDQUFDVSxJQUFJO1FBRXZELElBQUksQ0FBQ0osTUFBTSxFQUFFO1lBQ1gsT0FBT0wsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLGtCQUFrQjthQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBRUQsa0RBQWtEO1FBQ2xELElBQUlHLEtBQUssRUFBRTtZQUNULE1BQU1HLFlBQVksR0FBRyxNQUFNYiw4REFBcUIsQ0FBQztnQkFDL0NnQixLQUFLLEVBQUU7b0JBQ0xOLEtBQUssRUFBRUEsS0FBSztvQkFDWk8sR0FBRyxFQUFFO3dCQUFFQyxFQUFFLEVBQUVDLFFBQVEsQ0FBQ1gsTUFBTSxDQUFDO3FCQUFFO2lCQUM5QjthQUNGLENBQUM7WUFFRixJQUFJSyxZQUFZLEVBQUU7Z0JBQ2hCLE9BQU9WLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLEtBQUssRUFBRSxzQkFBc0I7aUJBQUUsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7UUFDSCxDQUFDO1FBRUQsTUFBTWEsV0FBVyxHQUFHLE1BQU1wQiwyREFBa0IsQ0FBQztZQUMzQ2dCLEtBQUssRUFBRTtnQkFBRUUsRUFBRSxFQUFFQyxRQUFRLENBQUNYLE1BQU0sQ0FBQzthQUFFO1lBQy9CYyxJQUFJLEVBQUU7Z0JBQ0piLFdBQVcsRUFBRUEsV0FBVztnQkFDeEJDLEtBQUssRUFBRUEsS0FBSztnQkFDWkMsTUFBTSxFQUFFQSxNQUFNO2FBQ2Y7WUFDRFksTUFBTSxFQUFFO2dCQUNOTCxFQUFFLEVBQUUsSUFBSTtnQkFDUk0sUUFBUSxFQUFFLElBQUk7Z0JBQ2RmLFdBQVcsRUFBRSxJQUFJO2dCQUNqQkMsS0FBSyxFQUFFLElBQUk7Z0JBQ1hDLE1BQU0sRUFBRSxJQUFJO2FBQ2I7U0FDRixDQUFDO1FBRUYsT0FBT1IsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQm1CLE9BQU8sRUFBRSxJQUFJO1lBQ2JYLElBQUksRUFBRU0sV0FBVztZQUNqQk0sT0FBTyxFQUFFLDhCQUE4QjtTQUN4QyxDQUFDLENBQUM7SUFDTCxFQUFFLE9BQU9uQixLQUFLLEVBQUU7UUFDZG9CLE9BQU8sQ0FBQ3BCLEtBQUssQ0FBQyx5QkFBeUIsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDaEQsT0FBT0osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQkMsS0FBSyxFQUFFLHVCQUF1QjtZQUM5QnFCLE9BQU8sRUFBRXJCLEtBQUssQ0FBQ21CLE9BQU87U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbTMxODAvLi9wYWdlcy9hcGkvcHJvZmlsZS91cGRhdGUuanM/NTIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BVVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlcklkLCBkaXNwbGF5TmFtZSwgZW1haWwsIGdlbmRlciB9ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdVc2VyIElEIHJlcXVpcmVkJyB9KTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBlbWFpbCBpcyBhbHJlYWR5IHRha2VuIGJ5IGFub3RoZXIgdXNlclxuICAgIGlmIChlbWFpbCkge1xuICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgTk9UOiB7IGlkOiBwYXJzZUludCh1c2VySWQpIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdFbWFpbCBhbHJlYWR5IGluIHVzZScgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHVzZXJJZCkgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgIGdlbmRlcjogZ2VuZGVyLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgdXNlcm5hbWU6IHRydWUsXG4gICAgICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgZ2VuZGVyOiB0cnVlLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcbiAgICAgIHVzZXI6IHVwZGF0ZWRVc2VyLFxuICAgICAgbWVzc2FnZTogJ1Byb2ZpbGUgdXBkYXRlZCBzdWNjZXNzZnVsbHknXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcHJvZmlsZTonLCBlcnJvcik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgXG4gICAgICBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicsXG4gICAgICBkZXRhaWxzOiBlcnJvci5tZXNzYWdlIFxuICAgIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ1c2VySWQiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiZ2VuZGVyIiwiYm9keSIsImV4aXN0aW5nVXNlciIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsIk5PVCIsImlkIiwicGFyc2VJbnQiLCJ1cGRhdGVkVXNlciIsInVwZGF0ZSIsImRhdGEiLCJzZWxlY3QiLCJ1c2VybmFtZSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiY29uc29sZSIsImRldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile/update.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile/update.js"));
module.exports = __webpack_exports__;

})();