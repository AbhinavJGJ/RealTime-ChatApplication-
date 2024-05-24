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
exports.id = "app/api/image/route";
exports.ids = ["app/api/image/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

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

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:zlib");

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

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

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

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimage%2Froute&page=%2Fapi%2Fimage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimage%2Froute.ts&appDir=C%3A%5CUsers%5Cabhin%5COneDrive%5CDesktop%5CNew%20folder%5CChatApp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cabhin%5COneDrive%5CDesktop%5CNew%20folder%5CChatApp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimage%2Froute&page=%2Fapi%2Fimage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimage%2Froute.ts&appDir=C%3A%5CUsers%5Cabhin%5COneDrive%5CDesktop%5CNew%20folder%5CChatApp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cabhin%5COneDrive%5CDesktop%5CNew%20folder%5CChatApp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_abhin_OneDrive_Desktop_New_folder_ChatApp_app_api_image_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/image/route.ts */ \"(rsc)/./app/api/image/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/image/route\",\n        pathname: \"/api/image\",\n        filename: \"route\",\n        bundlePath: \"app/api/image/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\abhin\\\\OneDrive\\\\Desktop\\\\New folder\\\\ChatApp\\\\app\\\\api\\\\image\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_abhin_OneDrive_Desktop_New_folder_ChatApp_app_api_image_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/image/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZpbWFnZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaW1hZ2UlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZpbWFnZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNhYmhpbiU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q05ldyUyMGZvbGRlciU1Q0NoYXRBcHAlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2FiaGluJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDTmV3JTIwZm9sZGVyJTVDQ2hhdEFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNtQztBQUNoSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL0NoYXRBcHAvPzdmNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcYWJoaW5cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxOZXcgZm9sZGVyXFxcXENoYXRBcHBcXFxcYXBwXFxcXGFwaVxcXFxpbWFnZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvaW1hZ2Uvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9pbWFnZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvaW1hZ2Uvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxhYmhpblxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXE5ldyBmb2xkZXJcXFxcQ2hhdEFwcFxcXFxhcHBcXFxcYXBpXFxcXGltYWdlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2ltYWdlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimage%2Froute&page=%2Fapi%2Fimage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimage%2Froute.ts&appDir=C%3A%5CUsers%5Cabhin%5COneDrive%5CDesktop%5CNew%20folder%5CChatApp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cabhin%5COneDrive%5CDesktop%5CNew%20folder%5CChatApp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/image/route.ts":
/*!********************************!*\
  !*** ./app/api/image/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/dist/index.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_api_limit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/api-limit */ \"(rsc)/./lib/api-limit.ts\");\n/* harmony import */ var _lib_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/subscription */ \"(rsc)/./lib/subscription.ts\");\n\n\n\n\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_1__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_1__.OpenAIApi(configuration);\nasync function POST(req) {\n    try {\n        const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.auth)();\n        const body = await req.json();\n        const { prompt, amount = \"1\", resolution = \"512x512\" } = body;\n        if (!userId) return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Unauthorized.\", {\n            status: 401\n        });\n        if (!configuration.apiKey) return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"OpenAI api key not configured.\", {\n            status: 500\n        });\n        if (!prompt) return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Prompt is required.\", {\n            status: 400\n        });\n        if (!amount) return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Amount is required.\", {\n            status: 400\n        });\n        if (!resolution) return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Resolution is required.\", {\n            status: 400\n        });\n        const freeTrial = await (0,_lib_api_limit__WEBPACK_IMPORTED_MODULE_2__.checkApiLimit)();\n        const isPro = await (0,_lib_subscription__WEBPACK_IMPORTED_MODULE_3__.checkSubscription)();\n        if (!freeTrial && !isPro) return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Free trial has expired.\", {\n            status: 403\n        });\n        const response = await openai.createImage({\n            prompt,\n            n: parseInt(amount, 10),\n            size: resolution\n        });\n        if (!isPro) await (0,_lib_api_limit__WEBPACK_IMPORTED_MODULE_2__.increaseApiLimit)();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(response.data.data, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"[IMAGE_ERROR]: \", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Internal server error.\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ltYWdlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDd0I7QUFDWDtBQUVnQjtBQUNYO0FBRXZELE1BQU1PLGdCQUFnQixJQUFJTCxpREFBYUEsQ0FBQztJQUN0Q00sUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJVCw2Q0FBU0EsQ0FBQ0k7QUFFdEIsZUFBZU0sS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdmLG1EQUFJQTtRQUV2QixNQUFNZ0IsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1FBQzNCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEdBQUcsRUFBRUMsYUFBYSxTQUFTLEVBQUUsR0FBR0o7UUFFekQsSUFBSSxDQUFDRCxRQUFRLE9BQU8sSUFBSWQscURBQVlBLENBQUMsaUJBQWlCO1lBQUVvQixRQUFRO1FBQUk7UUFDcEUsSUFBSSxDQUFDZCxjQUFjQyxNQUFNLEVBQ3ZCLE9BQU8sSUFBSVAscURBQVlBLENBQUMsa0NBQWtDO1lBQ3hEb0IsUUFBUTtRQUNWO1FBRUYsSUFBSSxDQUFDSCxRQUNILE9BQU8sSUFBSWpCLHFEQUFZQSxDQUFDLHVCQUF1QjtZQUFFb0IsUUFBUTtRQUFJO1FBRS9ELElBQUksQ0FBQ0YsUUFDSCxPQUFPLElBQUlsQixxREFBWUEsQ0FBQyx1QkFBdUI7WUFBRW9CLFFBQVE7UUFBSTtRQUUvRCxJQUFJLENBQUNELFlBQ0gsT0FBTyxJQUFJbkIscURBQVlBLENBQUMsMkJBQTJCO1lBQUVvQixRQUFRO1FBQUk7UUFFbkUsTUFBTUMsWUFBWSxNQUFNakIsNkRBQWFBO1FBQ3JDLE1BQU1rQixRQUFRLE1BQU1qQixvRUFBaUJBO1FBRXJDLElBQUksQ0FBQ2dCLGFBQWEsQ0FBQ0MsT0FDakIsT0FBTyxJQUFJdEIscURBQVlBLENBQUMsMkJBQTJCO1lBQUVvQixRQUFRO1FBQUk7UUFFbkUsTUFBTUcsV0FBVyxNQUFNWixPQUFPYSxXQUFXLENBQUM7WUFDeENQO1lBQ0FRLEdBQUdDLFNBQVNSLFFBQVE7WUFDcEJTLE1BQU1SO1FBQ1I7UUFFQSxJQUFJLENBQUNHLE9BQU8sTUFBTW5CLGdFQUFnQkE7UUFFbEMsT0FBT0gscURBQVlBLENBQUNnQixJQUFJLENBQUNPLFNBQVNLLElBQUksQ0FBQ0EsSUFBSSxFQUFFO1lBQUVSLFFBQVE7UUFBSTtJQUM3RCxFQUFFLE9BQU9TLE9BQWdCO1FBQ3ZCQyxRQUFRRCxLQUFLLENBQUMsbUJBQW1CQTtRQUNqQyxPQUFPLElBQUk3QixxREFBWUEsQ0FBQywwQkFBMEI7WUFBRW9CLFFBQVE7UUFBSTtJQUNsRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ2hhdEFwcC8uL2FwcC9hcGkvaW1hZ2Uvcm91dGUudHM/NjNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcclxuaW1wb3J0IHsgdHlwZSBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcclxuXHJcbmltcG9ydCB7IGluY3JlYXNlQXBpTGltaXQsIGNoZWNrQXBpTGltaXQgfSBmcm9tIFwiQC9saWIvYXBpLWxpbWl0XCI7XHJcbmltcG9ydCB7IGNoZWNrU3Vic2NyaXB0aW9uIH0gZnJvbSBcIkAvbGliL3N1YnNjcmlwdGlvblwiO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxyXG59KTtcclxuXHJcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSBhdXRoKCk7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBjb25zdCB7IHByb21wdCwgYW1vdW50ID0gXCIxXCIsIHJlc29sdXRpb24gPSBcIjUxMng1MTJcIiB9ID0gYm9keTtcclxuXHJcbiAgICBpZiAoIXVzZXJJZCkgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJVbmF1dGhvcml6ZWQuXCIsIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uYXBpS2V5KVxyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIk9wZW5BSSBhcGkga2V5IG5vdCBjb25maWd1cmVkLlwiLCB7XHJcbiAgICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICghcHJvbXB0KVxyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlByb21wdCBpcyByZXF1aXJlZC5cIiwgeyBzdGF0dXM6IDQwMCB9KTtcclxuXHJcbiAgICBpZiAoIWFtb3VudClcclxuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJBbW91bnQgaXMgcmVxdWlyZWQuXCIsIHsgc3RhdHVzOiA0MDAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNvbHV0aW9uKVxyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlJlc29sdXRpb24gaXMgcmVxdWlyZWQuXCIsIHsgc3RhdHVzOiA0MDAgfSk7XHJcblxyXG4gICAgY29uc3QgZnJlZVRyaWFsID0gYXdhaXQgY2hlY2tBcGlMaW1pdCgpO1xyXG4gICAgY29uc3QgaXNQcm8gPSBhd2FpdCBjaGVja1N1YnNjcmlwdGlvbigpO1xyXG5cclxuICAgIGlmICghZnJlZVRyaWFsICYmICFpc1BybylcclxuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJGcmVlIHRyaWFsIGhhcyBleHBpcmVkLlwiLCB7IHN0YXR1czogNDAzIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUltYWdlKHtcclxuICAgICAgcHJvbXB0LFxyXG4gICAgICBuOiBwYXJzZUludChhbW91bnQsIDEwKSxcclxuICAgICAgc2l6ZTogcmVzb2x1dGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghaXNQcm8pIGF3YWl0IGluY3JlYXNlQXBpTGltaXQoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmVzcG9uc2UuZGF0YS5kYXRhLCB7IHN0YXR1czogMjAwIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiW0lNQUdFX0VSUk9SXTogXCIsIGVycm9yKTtcclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiSW50ZXJuYWwgc2VydmVyIGVycm9yLlwiLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYXV0aCIsIk5leHRSZXNwb25zZSIsIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJpbmNyZWFzZUFwaUxpbWl0IiwiY2hlY2tBcGlMaW1pdCIsImNoZWNrU3Vic2NyaXB0aW9uIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsIlBPU1QiLCJyZXEiLCJ1c2VySWQiLCJib2R5IiwianNvbiIsInByb21wdCIsImFtb3VudCIsInJlc29sdXRpb24iLCJzdGF0dXMiLCJmcmVlVHJpYWwiLCJpc1BybyIsInJlc3BvbnNlIiwiY3JlYXRlSW1hZ2UiLCJuIiwicGFyc2VJbnQiLCJzaXplIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/image/route.ts\n");

/***/ }),

/***/ "(rsc)/./constants/index.ts":
/*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FOOTER_LINKS: () => (/* binding */ FOOTER_LINKS),\n/* harmony export */   MAX_FREE_COUNTS: () => (/* binding */ MAX_FREE_COUNTS),\n/* harmony export */   ROUTES: () => (/* binding */ ROUTES),\n/* harmony export */   TESTIMONIALS: () => (/* binding */ TESTIMONIALS),\n/* harmony export */   TOOLS: () => (/* binding */ TOOLS)\n/* harmony export */ });\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/message-square.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/music.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/image.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/video.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/code.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/layout-dashboard.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/facebook.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/twitter.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/instagram.js\");\n/* harmony import */ var _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Code,Facebook,Github,ImageIcon,Instagram,LayoutDashboard,MessageSquare,Music,Settings,Twitter,VideoIcon!=!lucide-react */ \"(rsc)/./node_modules/lucide-react/dist/esm/icons/github.js\");\n\nconst MAX_FREE_COUNTS = 5;\nconst TESTIMONIALS = [\n    {\n        name: \"Carlos\",\n        image: \"/testimonials/user-1.jpeg\",\n        title: \"Marketing Specialist\",\n        description: \"This application has significantly boosted our marketing efforts.\"\n    },\n    {\n        name: \"Emily\",\n        image: \"/testimonials/user-2.jpeg\",\n        title: \"Student\",\n        description: \"As a student, this app has been a lifesaver for organizing my tasks and schedules.\"\n    },\n    {\n        name: \"David\",\n        image: \"/testimonials/user-3.jpeg\",\n        title: \"Entrepreneur\",\n        description: \"The efficiency and reliability of this tool are unparalleled. Highly recommended!\"\n    },\n    {\n        name: \"Sophia\",\n        image: \"/testimonials/user-4.jpeg\",\n        title: \"Graphic Designer\",\n        description: \"Incredible features and user-friendly design. Love it!\"\n    }\n];\nconst TOOLS = [\n    {\n        label: \"Conversation\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        color: \"text-violet-500\",\n        bgColor: \"bg-violet-500/10\",\n        href: \"/conversation\"\n    },\n    {\n        label: \"Music Generation\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        color: \"text-emerald-500\",\n        bgColor: \"bg-violet-500/10\",\n        href: \"/music\"\n    },\n    {\n        label: \"Image Generation\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        color: \"text-pink-700\",\n        bgColor: \"bg-pink-700/10\",\n        href: \"/image\"\n    },\n    {\n        label: \"Video Generation\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        color: \"text-orange-700\",\n        bgColor: \"bg-orange-700/10\",\n        href: \"/video\"\n    },\n    {\n        label: \"Code Generation\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        color: \"text-green-700\",\n        bgColor: \"bg-green-700/10\",\n        href: \"/code\"\n    }\n];\nconst ROUTES = [\n    {\n        label: \"Dashboard\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        href: \"/dashboard\",\n        color: \"text-sky-500\"\n    },\n    ...TOOLS,\n    {\n        label: \"Settings\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        href: \"/settings\",\n        color: null\n    }\n];\nconst FOOTER_LINKS = [\n    {\n        name: \"Facebook\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        link: \"https://facebook.com\"\n    },\n    {\n        name: \"Twitter\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        link: \"https://twitter.com\"\n    },\n    {\n        name: \"Instagram\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        link: \"https://instagram.com\"\n    },\n    {\n        name: \"Github\",\n        icon: _barrel_optimize_names_Code_Facebook_Github_ImageIcon_Instagram_LayoutDashboard_MessageSquare_Music_Settings_Twitter_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        link: \"https://github.com\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25zdGFudHMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlzQjtBQUVmLE1BQU1XLGtCQUFrQixFQUFXO0FBRW5DLE1BQU1DLGVBQWU7SUFDMUI7UUFDRUMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsYUFBYTtJQUNmO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLFFBQVE7SUFDbkI7UUFDRUMsT0FBTztRQUNQQyxNQUFNYixtTEFBYUE7UUFDbkJjLE9BQU87UUFDUEMsU0FBUztRQUNUQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLE1BQU1aLG1MQUFLQTtRQUNYYSxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxNQUFNaEIsbUxBQVNBO1FBQ2ZpQixPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxNQUFNVCxtTEFBU0E7UUFDZlUsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsTUFBTW5CLG1MQUFJQTtRQUNWb0IsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxTQUFTO0lBQ3BCO1FBQ0VMLE9BQU87UUFDUEMsTUFBTWQsbUxBQWVBO1FBQ3JCaUIsTUFBTTtRQUNORixPQUFPO0lBQ1Q7T0FDR0g7SUFDSDtRQUNFQyxPQUFPO1FBQ1BDLE1BQU1YLG1MQUFRQTtRQUNkYyxNQUFNO1FBQ05GLE9BQU87SUFDVDtDQUNELENBQVU7QUFFSixNQUFNSSxlQUFlO0lBQzFCO1FBQ0VYLE1BQU07UUFDTk0sTUFBTWxCLG1MQUFRQTtRQUNkd0IsTUFBTTtJQUNSO0lBQ0E7UUFDRVosTUFBTTtRQUNOTSxNQUFNVixtTEFBT0E7UUFDYmdCLE1BQU07SUFDUjtJQUNBO1FBQ0VaLE1BQU07UUFDTk0sTUFBTWYsbUxBQVNBO1FBQ2ZxQixNQUFNO0lBQ1I7SUFDQTtRQUNFWixNQUFNO1FBQ05NLE1BQU1qQixvTEFBTUE7UUFDWnVCLE1BQU07SUFDUjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DaGF0QXBwLy4vY29uc3RhbnRzL2luZGV4LnRzPzY2NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb2RlLFxyXG4gIEZhY2Vib29rLFxyXG4gIEdpdGh1YixcclxuICBJbWFnZUljb24sXHJcbiAgSW5zdGFncmFtLFxyXG4gIExheW91dERhc2hib2FyZCxcclxuICBNZXNzYWdlU3F1YXJlLFxyXG4gIE11c2ljLFxyXG4gIFNldHRpbmdzLFxyXG4gIFR3aXR0ZXIsXHJcbiAgVmlkZW9JY29uLFxyXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfRlJFRV9DT1VOVFMgPSA1IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRFU1RJTU9OSUFMUyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkNhcmxvc1wiLFxyXG4gICAgaW1hZ2U6IFwiL3Rlc3RpbW9uaWFscy91c2VyLTEuanBlZ1wiLFxyXG4gICAgdGl0bGU6IFwiTWFya2V0aW5nIFNwZWNpYWxpc3RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgYXBwbGljYXRpb24gaGFzIHNpZ25pZmljYW50bHkgYm9vc3RlZCBvdXIgbWFya2V0aW5nIGVmZm9ydHMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkVtaWx5XCIsXHJcbiAgICBpbWFnZTogXCIvdGVzdGltb25pYWxzL3VzZXItMi5qcGVnXCIsXHJcbiAgICB0aXRsZTogXCJTdHVkZW50XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBcyBhIHN0dWRlbnQsIHRoaXMgYXBwIGhhcyBiZWVuIGEgbGlmZXNhdmVyIGZvciBvcmdhbml6aW5nIG15IHRhc2tzIGFuZCBzY2hlZHVsZXMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRhdmlkXCIsXHJcbiAgICBpbWFnZTogXCIvdGVzdGltb25pYWxzL3VzZXItMy5qcGVnXCIsXHJcbiAgICB0aXRsZTogXCJFbnRyZXByZW5ldXJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoZSBlZmZpY2llbmN5IGFuZCByZWxpYWJpbGl0eSBvZiB0aGlzIHRvb2wgYXJlIHVucGFyYWxsZWxlZC4gSGlnaGx5IHJlY29tbWVuZGVkIVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTb3BoaWFcIixcclxuICAgIGltYWdlOiBcIi90ZXN0aW1vbmlhbHMvdXNlci00LmpwZWdcIixcclxuICAgIHRpdGxlOiBcIkdyYXBoaWMgRGVzaWduZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkluY3JlZGlibGUgZmVhdHVyZXMgYW5kIHVzZXItZnJpZW5kbHkgZGVzaWduLiBMb3ZlIGl0IVwiLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgVE9PTFMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiQ29udmVyc2F0aW9uXCIsXHJcbiAgICBpY29uOiBNZXNzYWdlU3F1YXJlLFxyXG4gICAgY29sb3I6IFwidGV4dC12aW9sZXQtNTAwXCIsXHJcbiAgICBiZ0NvbG9yOiBcImJnLXZpb2xldC01MDAvMTBcIixcclxuICAgIGhyZWY6IFwiL2NvbnZlcnNhdGlvblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiTXVzaWMgR2VuZXJhdGlvblwiLFxyXG4gICAgaWNvbjogTXVzaWMsXHJcbiAgICBjb2xvcjogXCJ0ZXh0LWVtZXJhbGQtNTAwXCIsXHJcbiAgICBiZ0NvbG9yOiBcImJnLXZpb2xldC01MDAvMTBcIixcclxuICAgIGhyZWY6IFwiL211c2ljXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogXCJJbWFnZSBHZW5lcmF0aW9uXCIsXHJcbiAgICBpY29uOiBJbWFnZUljb24sXHJcbiAgICBjb2xvcjogXCJ0ZXh0LXBpbmstNzAwXCIsXHJcbiAgICBiZ0NvbG9yOiBcImJnLXBpbmstNzAwLzEwXCIsXHJcbiAgICBocmVmOiBcIi9pbWFnZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiVmlkZW8gR2VuZXJhdGlvblwiLFxyXG4gICAgaWNvbjogVmlkZW9JY29uLFxyXG4gICAgY29sb3I6IFwidGV4dC1vcmFuZ2UtNzAwXCIsXHJcbiAgICBiZ0NvbG9yOiBcImJnLW9yYW5nZS03MDAvMTBcIixcclxuICAgIGhyZWY6IFwiL3ZpZGVvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogXCJDb2RlIEdlbmVyYXRpb25cIixcclxuICAgIGljb246IENvZGUsXHJcbiAgICBjb2xvcjogXCJ0ZXh0LWdyZWVuLTcwMFwiLFxyXG4gICAgYmdDb2xvcjogXCJiZy1ncmVlbi03MDAvMTBcIixcclxuICAgIGhyZWY6IFwiL2NvZGVcIixcclxuICB9LFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJPVVRFUyA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogXCJEYXNoYm9hcmRcIixcclxuICAgIGljb246IExheW91dERhc2hib2FyZCxcclxuICAgIGhyZWY6IFwiL2Rhc2hib2FyZFwiLFxyXG4gICAgY29sb3I6IFwidGV4dC1za3ktNTAwXCIsXHJcbiAgfSxcclxuICAuLi5UT09MUyxcclxuICB7XHJcbiAgICBsYWJlbDogXCJTZXR0aW5nc1wiLFxyXG4gICAgaWNvbjogU2V0dGluZ3MsXHJcbiAgICBocmVmOiBcIi9zZXR0aW5nc1wiLFxyXG4gICAgY29sb3I6IG51bGwsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBGT09URVJfTElOS1MgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJGYWNlYm9va1wiLFxyXG4gICAgaWNvbjogRmFjZWJvb2ssXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZmFjZWJvb2suY29tXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlR3aXR0ZXJcIixcclxuICAgIGljb246IFR3aXR0ZXIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vdHdpdHRlci5jb21cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiSW5zdGFncmFtXCIsXHJcbiAgICBpY29uOiBJbnN0YWdyYW0sXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vaW5zdGFncmFtLmNvbVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJHaXRodWJcIixcclxuICAgIGljb246IEdpdGh1YixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tXCIsXHJcbiAgfSxcclxuXTtcclxuIl0sIm5hbWVzIjpbIkNvZGUiLCJGYWNlYm9vayIsIkdpdGh1YiIsIkltYWdlSWNvbiIsIkluc3RhZ3JhbSIsIkxheW91dERhc2hib2FyZCIsIk1lc3NhZ2VTcXVhcmUiLCJNdXNpYyIsIlNldHRpbmdzIiwiVHdpdHRlciIsIlZpZGVvSWNvbiIsIk1BWF9GUkVFX0NPVU5UUyIsIlRFU1RJTU9OSUFMUyIsIm5hbWUiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJUT09MUyIsImxhYmVsIiwiaWNvbiIsImNvbG9yIiwiYmdDb2xvciIsImhyZWYiLCJST1VURVMiLCJGT09URVJfTElOS1MiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./constants/index.ts\n");

/***/ }),

/***/ "(rsc)/./lib/api-limit.ts":
/*!**************************!*\
  !*** ./lib/api-limit.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkApiLimit: () => (/* binding */ checkApiLimit),\n/* harmony export */   getApiLimitCount: () => (/* binding */ getApiLimitCount),\n/* harmony export */   increaseApiLimit: () => (/* binding */ increaseApiLimit)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/nextjs */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants */ \"(rsc)/./constants/index.ts\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"(rsc)/./lib/db.ts\");\n\n\n\nconst increaseApiLimit = async ()=>{\n    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.auth)();\n    if (!userId) return;\n    const userApiLimit = await _db__WEBPACK_IMPORTED_MODULE_1__.db.userApiLimit.findUnique({\n        where: {\n            userId\n        }\n    });\n    if (userApiLimit) {\n        await _db__WEBPACK_IMPORTED_MODULE_1__.db.userApiLimit.update({\n            where: {\n                userId\n            },\n            data: {\n                count: userApiLimit.count + 1\n            }\n        });\n    } else {\n        await _db__WEBPACK_IMPORTED_MODULE_1__.db.userApiLimit.create({\n            data: {\n                userId,\n                count: 1\n            }\n        });\n    }\n};\nconst checkApiLimit = async ()=>{\n    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.auth)();\n    if (!userId) return false;\n    const userApiLimit = await _db__WEBPACK_IMPORTED_MODULE_1__.db.userApiLimit.findUnique({\n        where: {\n            userId\n        }\n    });\n    return !userApiLimit || userApiLimit.count < _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_FREE_COUNTS;\n};\nconst getApiLimitCount = async ()=>{\n    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.auth)();\n    if (!userId) return 0;\n    const userApiLimit = await _db__WEBPACK_IMPORTED_MODULE_1__.db.userApiLimit.findUnique({\n        where: {\n            userId\n        }\n    });\n    if (!userApiLimit) return 0;\n    return userApiLimit.count;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXBpLWxpbWl0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQztBQUVTO0FBRXBCO0FBRW5CLE1BQU1HLG1CQUFtQjtJQUM5QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHSixtREFBSUE7SUFFdkIsSUFBSSxDQUFDSSxRQUFRO0lBRWIsTUFBTUMsZUFBZSxNQUFNSCxtQ0FBRUEsQ0FBQ0csWUFBWSxDQUFDQyxVQUFVLENBQUM7UUFDcERDLE9BQU87WUFDTEg7UUFDRjtJQUNGO0lBRUEsSUFBSUMsY0FBYztRQUNoQixNQUFNSCxtQ0FBRUEsQ0FBQ0csWUFBWSxDQUFDRyxNQUFNLENBQUM7WUFDM0JELE9BQU87Z0JBQ0xIO1lBQ0Y7WUFDQUssTUFBTTtnQkFDSkMsT0FBT0wsYUFBYUssS0FBSyxHQUFHO1lBQzlCO1FBQ0Y7SUFDRixPQUFPO1FBQ0wsTUFBTVIsbUNBQUVBLENBQUNHLFlBQVksQ0FBQ00sTUFBTSxDQUFDO1lBQzNCRixNQUFNO2dCQUFFTDtnQkFBUU0sT0FBTztZQUFFO1FBQzNCO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTUUsZ0JBQWdCO0lBQzNCLE1BQU0sRUFBRVIsTUFBTSxFQUFFLEdBQUdKLG1EQUFJQTtJQUV2QixJQUFJLENBQUNJLFFBQVEsT0FBTztJQUVwQixNQUFNQyxlQUFlLE1BQU1ILG1DQUFFQSxDQUFDRyxZQUFZLENBQUNDLFVBQVUsQ0FBQztRQUNwREMsT0FBTztZQUNMSDtRQUNGO0lBQ0Y7SUFFQSxPQUFPLENBQUNDLGdCQUFnQkEsYUFBYUssS0FBSyxHQUFHVCx1REFBZUE7QUFDOUQsRUFBRTtBQUVLLE1BQU1ZLG1CQUFtQjtJQUM5QixNQUFNLEVBQUVULE1BQU0sRUFBRSxHQUFHSixtREFBSUE7SUFFdkIsSUFBSSxDQUFDSSxRQUFRLE9BQU87SUFFcEIsTUFBTUMsZUFBZSxNQUFNSCxtQ0FBRUEsQ0FBQ0csWUFBWSxDQUFDQyxVQUFVLENBQUM7UUFDcERDLE9BQU87WUFDTEg7UUFDRjtJQUNGO0lBRUEsSUFBSSxDQUFDQyxjQUFjLE9BQU87SUFFMUIsT0FBT0EsYUFBYUssS0FBSztBQUMzQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ2hhdEFwcC8uL2xpYi9hcGktbGltaXQudHM/ZTEzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcclxuXHJcbmltcG9ydCB7IE1BWF9GUkVFX0NPVU5UUyB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlYXNlQXBpTGltaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHJldHVybjtcclxuXHJcbiAgY29uc3QgdXNlckFwaUxpbWl0ID0gYXdhaXQgZGIudXNlckFwaUxpbWl0LmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgdXNlcklkLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKHVzZXJBcGlMaW1pdCkge1xyXG4gICAgYXdhaXQgZGIudXNlckFwaUxpbWl0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY291bnQ6IHVzZXJBcGlMaW1pdC5jb3VudCArIDEsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgYXdhaXQgZGIudXNlckFwaUxpbWl0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgdXNlcklkLCBjb3VudDogMSB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrQXBpTGltaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgY29uc3QgdXNlckFwaUxpbWl0ID0gYXdhaXQgZGIudXNlckFwaUxpbWl0LmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgdXNlcklkLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuICF1c2VyQXBpTGltaXQgfHwgdXNlckFwaUxpbWl0LmNvdW50IDwgTUFYX0ZSRUVfQ09VTlRTO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFwaUxpbWl0Q291bnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHJldHVybiAwO1xyXG5cclxuICBjb25zdCB1c2VyQXBpTGltaXQgPSBhd2FpdCBkYi51c2VyQXBpTGltaXQuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICB1c2VySWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXJBcGlMaW1pdCkgcmV0dXJuIDA7XHJcblxyXG4gIHJldHVybiB1c2VyQXBpTGltaXQuY291bnQ7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhdXRoIiwiTUFYX0ZSRUVfQ09VTlRTIiwiZGIiLCJpbmNyZWFzZUFwaUxpbWl0IiwidXNlcklkIiwidXNlckFwaUxpbWl0IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidXBkYXRlIiwiZGF0YSIsImNvdW50IiwiY3JlYXRlIiwiY2hlY2tBcGlMaW1pdCIsImdldEFwaUxpbWl0Q291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/api-limit.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = db;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTXZDLE1BQU1DLEtBQUtDLFdBQVdDLE1BQU0sSUFBSSxJQUFJSCx3REFBWUEsR0FBRztBQUUxRCxJQUFJSSxJQUFxQyxFQUFFRixXQUFXQyxNQUFNLEdBQUdGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ2hhdEFwcC8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBkYjtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImRiIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/subscription.ts":
/*!*****************************!*\
  !*** ./lib/subscription.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkSubscription: () => (/* binding */ checkSubscription)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"(rsc)/./lib/db.ts\");\n\n\nconst DAY_IN_MS = 86400000;\nconst checkSubscription = async ()=>{\n    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__.auth)();\n    if (!userId) return false;\n    const userSubscription = await _db__WEBPACK_IMPORTED_MODULE_0__.db.userSubscription.findUnique({\n        where: {\n            userId\n        },\n        select: {\n            stripeSubscriptionId: true,\n            stripeCurrentPeriodEnd: true,\n            stripeCustomerId: true,\n            stripePriceId: true\n        }\n    });\n    if (!userSubscription) return false;\n    const isSubscribed = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime() + DAY_IN_MS > Date.now();\n    return !!isSubscribed;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3Vic2NyaXB0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUVYO0FBRTFCLE1BQU1FLFlBQVk7QUFFWCxNQUFNQyxvQkFBb0I7SUFDL0IsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0osbURBQUlBO0lBRXZCLElBQUksQ0FBQ0ksUUFBUSxPQUFPO0lBRXBCLE1BQU1DLG1CQUFtQixNQUFNSixtQ0FBRUEsQ0FBQ0ksZ0JBQWdCLENBQUNDLFVBQVUsQ0FBQztRQUM1REMsT0FBTztZQUNMSDtRQUNGO1FBQ0FJLFFBQVE7WUFDTkMsc0JBQXNCO1lBQ3RCQyx3QkFBd0I7WUFDeEJDLGtCQUFrQjtZQUNsQkMsZUFBZTtRQUNqQjtJQUNGO0lBRUEsSUFBSSxDQUFDUCxrQkFBa0IsT0FBTztJQUU5QixNQUFNUSxlQUNKUixpQkFBaUJPLGFBQWEsSUFDOUJQLGlCQUFpQkssc0JBQXNCLEVBQUVJLFlBQWFaLFlBQ3BEYSxLQUFLQyxHQUFHO0lBRVosT0FBTyxDQUFDLENBQUNIO0FBQ1gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL0NoYXRBcHAvLi9saWIvc3Vic2NyaXB0aW9uLnRzPzA0NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuL2RiXCI7XHJcblxyXG5jb25zdCBEQVlfSU5fTVMgPSA4Nl80MDBfMDAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrU3Vic2NyaXB0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIGNvbnN0IHVzZXJTdWJzY3JpcHRpb24gPSBhd2FpdCBkYi51c2VyU3Vic2NyaXB0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgdXNlcklkLFxyXG4gICAgfSxcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICBzdHJpcGVTdWJzY3JpcHRpb25JZDogdHJ1ZSxcclxuICAgICAgc3RyaXBlQ3VycmVudFBlcmlvZEVuZDogdHJ1ZSxcclxuICAgICAgc3RyaXBlQ3VzdG9tZXJJZDogdHJ1ZSxcclxuICAgICAgc3RyaXBlUHJpY2VJZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlclN1YnNjcmlwdGlvbikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBjb25zdCBpc1N1YnNjcmliZWQgPVxyXG4gICAgdXNlclN1YnNjcmlwdGlvbi5zdHJpcGVQcmljZUlkICYmXHJcbiAgICB1c2VyU3Vic2NyaXB0aW9uLnN0cmlwZUN1cnJlbnRQZXJpb2RFbmQ/LmdldFRpbWUoKSEgKyBEQVlfSU5fTVMgPlxyXG4gICAgICBEYXRlLm5vdygpO1xyXG5cclxuICByZXR1cm4gISFpc1N1YnNjcmliZWQ7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhdXRoIiwiZGIiLCJEQVlfSU5fTVMiLCJjaGVja1N1YnNjcmlwdGlvbiIsInVzZXJJZCIsInVzZXJTdWJzY3JpcHRpb24iLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzZWxlY3QiLCJzdHJpcGVTdWJzY3JpcHRpb25JZCIsInN0cmlwZUN1cnJlbnRQZXJpb2RFbmQiLCJzdHJpcGVDdXN0b21lcklkIiwic3RyaXBlUHJpY2VJZCIsImlzU3Vic2NyaWJlZCIsImdldFRpbWUiLCJEYXRlIiwibm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/subscription.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/node-fetch-native","vendor-chunks/@clerk","vendor-chunks/mime-db","vendor-chunks/@peculiar","vendor-chunks/asn1js","vendor-chunks/webcrypto-core","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/tslib","vendor-chunks/lucide-react","vendor-chunks/asynckit","vendor-chunks/path-to-regexp","vendor-chunks/pvtsutils","vendor-chunks/pvutils","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/cookie","vendor-chunks/delayed-stream","vendor-chunks/deepmerge","vendor-chunks/@swc","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/has-flag","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case","vendor-chunks/openai"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimage%2Froute&page=%2Fapi%2Fimage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimage%2Froute.ts&appDir=C%3A%5CUsers%5Cabhin%5COneDrive%5CDesktop%5CNew%20folder%5CChatApp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cabhin%5COneDrive%5CDesktop%5CNew%20folder%5CChatApp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();