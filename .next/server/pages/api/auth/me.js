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
exports.id = "pages/api/auth/me";
exports.ids = ["pages/api/auth/me"];
exports.modules = {

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ "(api)/./lib/session.js":
/*!************************!*\
  !*** ./lib/session.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSession\": () => (/* binding */ getSession),\n/* harmony export */   \"withSessionRoute\": () => (/* binding */ withSessionRoute)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst sessionOptions = {\n    password: process.env.SESSION_SECRET || \"complex_password_at_least_32_characters_long\",\n    cookieName: \"amath_session\",\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n};\nasync function getSession(req, res) {\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    return session;\n}\nfunction withSessionRoute(handler) {\n    return async function(req, res) {\n        req.session = await getSession(req, res);\n        return handler(req, res);\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2Vzc2lvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsY0FBYyxHQUFHO0lBQ3JCQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLElBQUksOENBQThDO0lBQ3RGQyxVQUFVLEVBQUUsZUFBZTtJQUMzQkMsYUFBYSxFQUFFO1FBQ2JDLE1BQU0sRUFBRUwsYUFOQyxLQU13QixZQUFZO0tBQzlDO0NBQ0Y7QUFFTSxlQUFlTSxVQUFVLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3pDLE1BQU1DLE9BQU8sR0FBRyxNQUFNWiw0REFBYyxDQUFDVSxHQUFHLEVBQUVDLEdBQUcsRUFBRVYsY0FBYyxDQUFDO0lBQzlELE9BQU9XLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRU0sU0FBU0MsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRTtJQUN4QyxPQUFPLGVBQWdCSixHQUFHLEVBQUVDLEdBQUcsRUFBRTtRQUMvQkQsR0FBRyxDQUFDRSxPQUFPLEdBQUcsTUFBTUgsVUFBVSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE9BQU9HLE9BQU8sQ0FBQ0osR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW0zMTgwLy4vbGliL3Nlc3Npb24uanM/ZmY5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRJcm9uU2Vzc2lvbiB9IGZyb20gJ2lyb24tc2Vzc2lvbic7XG5cbmNvbnN0IHNlc3Npb25PcHRpb25zID0ge1xuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQgfHwgJ2NvbXBsZXhfcGFzc3dvcmRfYXRfbGVhc3RfMzJfY2hhcmFjdGVyc19sb25nJyxcbiAgY29va2llTmFtZTogJ2FtYXRoX3Nlc3Npb24nLFxuICBjb29raWVPcHRpb25zOiB7XG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICB9LFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24ocmVxLCByZXMpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gIHJldHVybiBzZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2l0aFNlc3Npb25Sb3V0ZShoYW5kbGVyKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICByZXEuc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxLCByZXMpO1xuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcbiAgfTtcbn0iXSwibmFtZXMiOlsiZ2V0SXJvblNlc3Npb24iLCJzZXNzaW9uT3B0aW9ucyIsInBhc3N3b3JkIiwicHJvY2VzcyIsImVudiIsIlNFU1NJT05fU0VDUkVUIiwiY29va2llTmFtZSIsImNvb2tpZU9wdGlvbnMiLCJzZWN1cmUiLCJnZXRTZXNzaW9uIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsIndpdGhTZXNzaW9uUm91dGUiLCJoYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/session.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/me.js":
/*!******************************!*\
  !*** ./pages/api/auth/me.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/session */ \"(api)/./lib/session.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_session__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n    try {\n        const session = await (0,_lib_session__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n        if (session.user) {\n            return res.status(200).json({\n                isLoggedIn: true,\n                user: session.user\n            });\n        } else {\n            return res.status(200).json({\n                isLoggedIn: false,\n                user: null\n            });\n        }\n    } catch (error) {\n        console.error(\"Session error:\", error);\n        return res.status(200).json({\n            isLoggedIn: false,\n            user: null\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRDtBQUVuQyxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNQyxPQUFPLEdBQUcsTUFBTVIsd0RBQVUsQ0FBQ0UsR0FBRyxFQUFFQyxHQUFHLENBQUM7UUFFMUMsSUFBSUssT0FBTyxDQUFDQyxJQUFJLEVBQUU7WUFDaEIsT0FBT04sR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDMUJJLFVBQVUsRUFBRSxJQUFJO2dCQUNoQkQsSUFBSSxFQUFFRCxPQUFPLENBQUNDLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1FBQ0wsT0FBTztZQUNMLE9BQU9OLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQzFCSSxVQUFVLEVBQUUsS0FBSztnQkFDakJELElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILEVBQUUsT0FBT0YsS0FBSyxFQUFFO1FBQ2RJLE9BQU8sQ0FBQ0osS0FBSyxDQUFDLGdCQUFnQixFQUFFQSxLQUFLLENBQUMsQ0FBQztRQUN2QyxPQUFPSixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQzFCSSxVQUFVLEVBQUUsS0FBSztZQUNqQkQsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ltMzE4MC8uL3BhZ2VzL2FwaS9hdXRoL21lLmpzPzJjNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJy4uLy4uLy4uL2xpYi9zZXNzaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcSwgcmVzKTtcbiAgICBcbiAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICB1c2VyOiBzZXNzaW9uLnVzZXJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgdXNlcjogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1Nlc3Npb24gZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgIHVzZXI6IG51bGxcbiAgICB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInNlc3Npb24iLCJ1c2VyIiwiaXNMb2dnZWRJbiIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/me.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/me.js"));
module.exports = __webpack_exports__;

})();