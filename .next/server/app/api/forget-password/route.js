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
exports.id = "app/api/forget-password/route";
exports.ids = ["app/api/forget-password/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fforget-password%2Froute&page=%2Fapi%2Fforget-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fforget-password%2Froute.ts&appDir=D%3A%5Creact-hobby-projects%5CNew%20folder%5CNew%20folder%5Cnext-auth-mongodb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Creact-hobby-projects%5CNew%20folder%5CNew%20folder%5Cnext-auth-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fforget-password%2Froute&page=%2Fapi%2Fforget-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fforget-password%2Froute.ts&appDir=D%3A%5Creact-hobby-projects%5CNew%20folder%5CNew%20folder%5Cnext-auth-mongodb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Creact-hobby-projects%5CNew%20folder%5CNew%20folder%5Cnext-auth-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_react_hobby_projects_New_folder_New_folder_next_auth_mongodb_src_app_api_forget_password_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/forget-password/route.ts */ \"(rsc)/./src/app/api/forget-password/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/forget-password/route\",\n        pathname: \"/api/forget-password\",\n        filename: \"route\",\n        bundlePath: \"app/api/forget-password/route\"\n    },\n    resolvedPagePath: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\next-auth-mongodb\\\\src\\\\app\\\\api\\\\forget-password\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_react_hobby_projects_New_folder_New_folder_next_auth_mongodb_src_app_api_forget_password_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/forget-password/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmb3JnZXQtcGFzc3dvcmQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmZvcmdldC1wYXNzd29yZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmZvcmdldC1wYXNzd29yZCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDcmVhY3QtaG9iYnktcHJvamVjdHMlNUNOZXclMjBmb2xkZXIlNUNOZXclMjBmb2xkZXIlNUNuZXh0LWF1dGgtbW9uZ29kYiU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q3JlYWN0LWhvYmJ5LXByb2plY3RzJTVDTmV3JTIwZm9sZGVyJTVDTmV3JTIwZm9sZGVyJTVDbmV4dC1hdXRoLW1vbmdvZGImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNkQ7QUFDMUk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtcmVnaXN0ZXIvPzAyY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxccmVhY3QtaG9iYnktcHJvamVjdHNcXFxcTmV3IGZvbGRlclxcXFxOZXcgZm9sZGVyXFxcXG5leHQtYXV0aC1tb25nb2RiXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGZvcmdldC1wYXNzd29yZFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZm9yZ2V0LXBhc3N3b3JkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZm9yZ2V0LXBhc3N3b3JkXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9mb3JnZXQtcGFzc3dvcmQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxyZWFjdC1ob2JieS1wcm9qZWN0c1xcXFxOZXcgZm9sZGVyXFxcXE5ldyBmb2xkZXJcXFxcbmV4dC1hdXRoLW1vbmdvZGJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZm9yZ2V0LXBhc3N3b3JkXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2ZvcmdldC1wYXNzd29yZC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fforget-password%2Froute&page=%2Fapi%2Fforget-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fforget-password%2Froute.ts&appDir=D%3A%5Creact-hobby-projects%5CNew%20folder%5CNew%20folder%5Cnext-auth-mongodb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Creact-hobby-projects%5CNew%20folder%5CNew%20folder%5Cnext-auth-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/forget-password/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/forget-password/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/db */ \"(rsc)/./src/utils/db.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sendgrid/mail */ \"(rsc)/./node_modules/@sendgrid/mail/index.js\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst POST = async (request)=>{\n    const { email } = await request.json();\n    const SENDGRID_API_KEY = \"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\";\n    await (0,_utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const existingUser = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n        email\n    });\n    if (!existingUser) {\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Email doesn't exist\", {\n            status: 400\n        });\n    }\n    const resetToken = crypto__WEBPACK_IMPORTED_MODULE_3___default().randomBytes(20).toString(\"hex\");\n    const passwordRestToken = crypto__WEBPACK_IMPORTED_MODULE_3___default().createHash(\"sha256\").update(resetToken).digest(\"hex\");\n    const passwordRestExpires = Date.now() + 3600000;\n    existingUser.resetToken = passwordRestToken;\n    existingUser.resetTokenExpiry = passwordRestExpires;\n    const resetUrl = `localhost:3000/reset-password/${resetToken}`;\n    console.log(resetUrl);\n    const body = \"Reset Password by clicking on following url\" + \" \" + resetUrl;\n    const msg = {\n        to: email,\n        from: \"rajat.namdev@forgeahead.io\",\n        subject: \"Reset Password\",\n        text: body\n    };\n    _sendgrid_mail__WEBPACK_IMPORTED_MODULE_4___default().setApiKey(SENDGRID_API_KEY || \"\");\n    _sendgrid_mail__WEBPACK_IMPORTED_MODULE_4___default().send(msg).then(()=>{\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Reset Passwpord email is sent\", {\n            status: 200\n        });\n    }).catch(async (error)=>{\n        existingUser.resetToken = undefined;\n        existingUser.resetTokenExpiry = undefined;\n        await existingUser.dave();\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Failed  sending email, Try Again\", {\n            status: 400\n        });\n    });\n    try {\n        await existingUser.save();\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Email is sent for resetting Password\", {\n            status: 200\n        });\n    } catch (err) {\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"](err, {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9mb3JnZXQtcGFzc3dvcmQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDQTtBQUN1QjtBQUM1QjtBQUNPO0FBRTVCLE1BQU1LLE9BQU8sT0FBT0M7SUFDekIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxRQUFRRSxJQUFJO0lBQ3BDLE1BQU1DLG1CQUFtQjtJQUV6QixNQUFNUixxREFBT0E7SUFFYixNQUFNUyxlQUFlLE1BQU1WLG9EQUFJQSxDQUFDVyxPQUFPLENBQUM7UUFBRUo7SUFBTTtJQUVoRCxJQUFJLENBQUNHLGNBQWM7UUFDakIsT0FBTyxJQUFJUixrRkFBWUEsQ0FBQyx1QkFBdUI7WUFBRVUsUUFBUTtRQUFJO0lBQy9EO0lBRUEsTUFBTUMsYUFBYVYseURBQWtCLENBQUMsSUFBSVksUUFBUSxDQUFDO0lBRW5ELE1BQU1DLG9CQUFvQmIsd0RBQWlCLENBQUMsVUFBVWUsTUFBTSxDQUFDTCxZQUMxRE0sTUFBTSxDQUFDO0lBRVYsTUFBTUMsc0JBQXNCQyxLQUFLQyxHQUFHLEtBQUs7SUFDekNaLGFBQWFHLFVBQVUsR0FBR0c7SUFFMUJOLGFBQWFhLGdCQUFnQixHQUFHSDtJQUNoQyxNQUFNSSxXQUFXLENBQUMsOEJBQThCLEVBQUVYLFdBQVcsQ0FBQztJQUM5RFksUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLE9BQU8sZ0RBQWdELE1BQU1IO0lBRW5FLE1BQU1JLE1BQU07UUFDVkMsSUFBSXRCO1FBQ0p1QixNQUFNO1FBQ05DLFNBQVM7UUFDVEMsTUFBTUw7SUFDUjtJQUNBdkIsK0RBQWdCLENBQUNLLG9CQUFvQjtJQUVyQ0wsMERBQVcsQ0FBQ3dCLEtBQUtPLElBQUksQ0FBQztRQUNwQixPQUFPLElBQUlqQyxrRkFBWUEsQ0FBQyxpQ0FBaUM7WUFBRVUsUUFBUTtRQUFJO0lBQ3pFLEdBQUd3QixLQUFLLENBQUMsT0FBT0M7UUFDZDNCLGFBQWFHLFVBQVUsR0FBR3lCO1FBQzFCNUIsYUFBYWEsZ0JBQWdCLEdBQUdlO1FBQ2hDLE1BQU01QixhQUFhNkIsSUFBSTtRQUV2QixPQUFPLElBQUlyQyxrRkFBWUEsQ0FBQyxvQ0FBb0M7WUFDMURVLFFBQVE7UUFDVjtJQUNGO0lBQ0EsSUFBSTtRQUNGLE1BQU1GLGFBQWE4QixJQUFJO1FBQ3ZCLE9BQU8sSUFBSXRDLGtGQUFZQSxDQUFDLHdDQUF3QztZQUM5RFUsUUFBUTtRQUNWO0lBQ0YsRUFBRSxPQUFPNkIsS0FBVTtRQUNqQixPQUFPLElBQUl2QyxrRkFBWUEsQ0FBQ3VDLEtBQUs7WUFDM0I3QixRQUFRO1FBQ1Y7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtcmVnaXN0ZXIvLi9zcmMvYXBwL2FwaS9mb3JnZXQtcGFzc3dvcmQvcm91dGUudHM/NTM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiQC91dGlscy9kYlwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UsIE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xyXG5pbXBvcnQgc2dNYWlsIGZyb20gXCJAc2VuZGdyaWQvbWFpbFwiXHJcblxyXG5leHBvcnQgY29uc3QgUE9TVCA9IGFzeW5jIChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkgPT4ge1xyXG4gIGNvbnN0IHsgZW1haWwgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gIGNvbnN0IFNFTkRHUklEX0FQSV9LRVkgPSBcIlNHLmVlVHZRQXVsUkVLRXlXdmVxRnFCMHcuZW9FUmxzQ3FUQkNCVHV6d2NBbmxXUzVSclUzWVNRcEo0NGc1Z2pnWDM0NFwiXHJcblxyXG4gIGF3YWl0IGNvbm5lY3QoKTtcclxuXHJcbiAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcblxyXG4gIGlmICghZXhpc3RpbmdVc2VyKSB7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkVtYWlsIGRvZXNuJ3QgZXhpc3RcIiwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0VG9rZW4gPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMjApLnRvU3RyaW5nKCdoZXgnKTtcclxuXHJcbiAgY29uc3QgcGFzc3dvcmRSZXN0VG9rZW4gPSBjcnlwdG8uY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUocmVzZXRUb2tlbilcclxuICAgIC5kaWdlc3QoXCJoZXhcIik7XHJcblxyXG4gIGNvbnN0IHBhc3N3b3JkUmVzdEV4cGlyZXMgPSBEYXRlLm5vdygpICsgMzYwMDAwMDtcclxuICBleGlzdGluZ1VzZXIucmVzZXRUb2tlbiA9IHBhc3N3b3JkUmVzdFRva2VuO1xyXG5cclxuICBleGlzdGluZ1VzZXIucmVzZXRUb2tlbkV4cGlyeSA9IHBhc3N3b3JkUmVzdEV4cGlyZXM7XHJcbiAgY29uc3QgcmVzZXRVcmwgPSBgbG9jYWxob3N0OjMwMDAvcmVzZXQtcGFzc3dvcmQvJHtyZXNldFRva2VufWBcclxuICBjb25zb2xlLmxvZyhyZXNldFVybCk7XHJcbiAgY29uc3QgYm9keSA9IFwiUmVzZXQgUGFzc3dvcmQgYnkgY2xpY2tpbmcgb24gZm9sbG93aW5nIHVybFwiICsgXCIgXCIgKyByZXNldFVybDtcclxuXHJcbiAgY29uc3QgbXNnID0ge1xyXG4gICAgdG86IGVtYWlsLFxyXG4gICAgZnJvbTogXCJyYWphdC5uYW1kZXZAZm9yZ2VhaGVhZC5pb1wiLFxyXG4gICAgc3ViamVjdDogXCJSZXNldCBQYXNzd29yZFwiLFxyXG4gICAgdGV4dDogYm9keVxyXG4gIH1cclxuICBzZ01haWwuc2V0QXBpS2V5KFNFTkRHUklEX0FQSV9LRVkgfHwgXCJcIik7XHJcblxyXG4gIHNnTWFpbC5zZW5kKG1zZykudGhlbigoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlJlc2V0IFBhc3N3cG9yZCBlbWFpbCBpcyBzZW50XCIsIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgfSkuY2F0Y2goYXN5bmMgKGVycm9yKSA9PiB7XHJcbiAgICBleGlzdGluZ1VzZXIucmVzZXRUb2tlbiA9IHVuZGVmaW5lZDtcclxuICAgIGV4aXN0aW5nVXNlci5yZXNldFRva2VuRXhwaXJ5ID0gdW5kZWZpbmVkO1xyXG4gICAgYXdhaXQgZXhpc3RpbmdVc2VyLmRhdmUoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkZhaWxlZCAgc2VuZGluZyBlbWFpbCwgVHJ5IEFnYWluXCIsIHtcclxuICAgICAgc3RhdHVzOiA0MDBcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBleGlzdGluZ1VzZXIuc2F2ZSgpO1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJFbWFpbCBpcyBzZW50IGZvciByZXNldHRpbmcgUGFzc3dvcmRcIiwge1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKGVyciwge1xyXG4gICAgICBzdGF0dXM6IDUwMCxcclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiVXNlciIsImNvbm5lY3QiLCJOZXh0UmVzcG9uc2UiLCJjcnlwdG8iLCJzZ01haWwiLCJQT1NUIiwicmVxdWVzdCIsImVtYWlsIiwianNvbiIsIlNFTkRHUklEX0FQSV9LRVkiLCJleGlzdGluZ1VzZXIiLCJmaW5kT25lIiwic3RhdHVzIiwicmVzZXRUb2tlbiIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJwYXNzd29yZFJlc3RUb2tlbiIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJwYXNzd29yZFJlc3RFeHBpcmVzIiwiRGF0ZSIsIm5vdyIsInJlc2V0VG9rZW5FeHBpcnkiLCJyZXNldFVybCIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwibXNnIiwidG8iLCJmcm9tIiwic3ViamVjdCIsInRleHQiLCJzZXRBcGlLZXkiLCJzZW5kIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJkYXZlIiwic2F2ZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/forget-password/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst userSchema = new Schema({\n    email: {\n        type: String,\n        unique: true,\n        required: true\n    },\n    password: {\n        type: String,\n        required: false\n    },\n    resetToken: {\n        type: String,\n        required: false\n    },\n    resetTokenExpiry: {\n        type: Date,\n        required: false\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)?.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdELGlEQUFRQTtBQUUzQixNQUFNRSxhQUFhLElBQUlELE9BQ3JCO0lBQ0VFLE9BQU87UUFDTEMsTUFBTUM7UUFDTkMsUUFBUTtRQUNSQyxVQUFVO0lBQ1o7SUFDQUMsVUFBVTtRQUNSSixNQUFNQztRQUNORSxVQUFVO0lBQ1o7SUFDQUUsWUFBWTtRQUNWTCxNQUFNQztRQUNORSxVQUFVO0lBQ1o7SUFDQUcsa0JBQWlCO1FBQ2ZOLE1BQU1PO1FBQ05KLFVBQVU7SUFDWjtBQUNGLEdBQ0E7SUFBRUssWUFBWTtBQUFLO0FBR3JCLGlFQUFlWix3REFBZSxFQUFFYyxRQUFRZCxxREFBYyxDQUFDLFFBQVFFLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtcmVnaXN0ZXIvLi9zcmMvbW9kZWxzL1VzZXIuanM/N2QwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgcmVzZXRUb2tlbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICByZXNldFRva2VuRXhwaXJ5OntcclxuICAgICAgdHlwZTogRGF0ZSxcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscz8uVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwicmVzZXRUb2tlbiIsInJlc2V0VG9rZW5FeHBpcnkiLCJEYXRlIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/db.js":
/*!*************************!*\
  !*** ./src/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connect = async ()=>{\n    const URL = \"mongodb+srv://rjtnamdev:hRvbh4mDfo5rcblv@cluster0.trsqyvl.mongodb.net/?retryWrites=true&w=majority\";\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) return;\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(URL, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"Mongo Connection successfully established.\");\n    } catch (error) {\n        throw new Error(\"Error connecting to Mongoose\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFVBQVU7SUFDZCxNQUFNQyxNQUFPO0lBQ2IsSUFBSUYsNkRBQW9CLENBQUMsRUFBRSxDQUFDSSxVQUFVLEVBQUU7SUFFeEMsSUFBSTtRQUNGLE1BQU1KLHVEQUFnQixDQUFDRSxLQUFLO1lBQzFCRyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZCxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRjtBQUVBLGlFQUFlVCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLXJlZ2lzdGVyLy4vc3JjL3V0aWxzL2RiLmpzP2QzODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBVUkwgID0gXCJtb25nb2RiK3NydjovL3JqdG5hbWRldjpoUnZiaDRtRGZvNXJjYmx2QGNsdXN0ZXIwLnRyc3F5dmwubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHJldHVybjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoVVJMLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvIENvbm5lY3Rpb24gc3VjY2Vzc2Z1bGx5IGVzdGFibGlzaGVkLlwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBNb25nb29zZVwiKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0O1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwiVVJMIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@sendgrid","vendor-chunks/asynckit","vendor-chunks/debug","vendor-chunks/mime-db","vendor-chunks/form-data","vendor-chunks/follow-redirects","vendor-chunks/axios","vendor-chunks/supports-color","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/mime-types","vendor-chunks/has-flag","vendor-chunks/delayed-stream","vendor-chunks/deepmerge","vendor-chunks/combined-stream"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fforget-password%2Froute&page=%2Fapi%2Fforget-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fforget-password%2Froute.ts&appDir=D%3A%5Creact-hobby-projects%5CNew%20folder%5CNew%20folder%5Cnext-auth-mongodb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Creact-hobby-projects%5CNew%20folder%5CNew%20folder%5Cnext-auth-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();