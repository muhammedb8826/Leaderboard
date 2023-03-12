"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/leaderboard-bg.png */ "./src/assets/leaderboard-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/rank-1.png */ "./src/assets/rank-1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/rank-2.png */ "./src/assets/rank-2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/rank-3.png */ "./src/assets/rank-3.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.title-container {\r\n  padding: 2rem;\r\n}\r\n\r\n.title-container div {\r\n  font-size: 3rem;\r\n  background-color: #1b335c;\r\n  text-align: center;\r\n  padding: 0.5rem;\r\n  color: #ccc;\r\n  border-radius: 0.4rem;\r\n  border: 4px #ccc solid;\r\n}\r\n\r\n.content-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.score,\r\n.add-score {\r\n  width: 40%;\r\n}\r\n\r\n.recent-score-and-refresh-btn {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nh2 {\r\n  color: #1b335c;\r\n}\r\n\r\nbutton {\r\n  background-color: #2397cb;\r\n  padding: 0.5rem;\r\n  padding-inline: 1rem;\r\n  border: none;\r\n  border-radius: 0.2rem;\r\n  border-bottom: 3px solid #ccc;\r\n  cursor: pointer;\r\n  color: #fff;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #239fd9;\r\n}\r\n\r\n.name-and-score-container {\r\n  margin-top: 2rem;\r\n  list-style: none;\r\n  counter-reset: item;\r\n}\r\n\r\n.name-and-score-container li {\r\n  counter-increment: item;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.2rem;\r\n  color: white;\r\n}\r\n\r\n.name-and-score-container li span {\r\n  width: 100%;\r\n  padding: 0.7rem;\r\n  background-color: #2397cb;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4) {\r\n  height: 3.2rem;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4) span {\r\n  position: relative;\r\n  left: 1rem;\r\n  padding: 0.7rem;\r\n}\r\n\r\n.name-and-score-container :nth-child(1) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(2) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(3) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4)::before {\r\n  margin-left: -3.1rem;\r\n  padding: 0.4rem;\r\n  content: counter(item);\r\n  background-color: darkblue;\r\n  border-radius: 100%;\r\n  color: white;\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.name-and-score-container li:first-child::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  margin-left: -3rem;\r\n}\r\n\r\n.name-and-score-container li:nth-child(2)::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  margin-left: -3rem;\r\n}\r\n\r\n.name-and-score-container li:nth-child(3)::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  margin-left: -3rem;\r\n}\r\n\r\n.input-container {\r\n  margin-top: 2.8rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-container form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.input-container form input {\r\n  margin-bottom: 1.2rem;\r\n  padding: 1rem;\r\n  background-color: #ccc;\r\n  border: none;\r\n  font-size: 1rem;\r\n  outline: none;\r\n  border-radius: 0.2rem;\r\n  border-bottom: #1b335c 3px solid;\r\n}\r\n\r\n.input-container form .submit-btn {\r\n  width: 100%;\r\n}\r\n\r\n.input-container form .submit-btn button {\r\n  float: right;\r\n  padding-inline: 3rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yDAAoD;EACpD,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,gDAAgD;AAClD;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,qBAAqB;EACrB,6BAA6B;EAC7B,eAAe;EACf,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,sBAAsB;EACtB,0BAA0B;EAC1B,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,wBAAwB;EACxB,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,wBAAwB;EACxB,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,wBAAwB;EACxB,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-image: url('./assets/leaderboard-bg.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.title-container {\r\n  padding: 2rem;\r\n}\r\n\r\n.title-container div {\r\n  font-size: 3rem;\r\n  background-color: #1b335c;\r\n  text-align: center;\r\n  padding: 0.5rem;\r\n  color: #ccc;\r\n  border-radius: 0.4rem;\r\n  border: 4px #ccc solid;\r\n}\r\n\r\n.content-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.score,\r\n.add-score {\r\n  width: 40%;\r\n}\r\n\r\n.recent-score-and-refresh-btn {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nh2 {\r\n  color: #1b335c;\r\n}\r\n\r\nbutton {\r\n  background-color: #2397cb;\r\n  padding: 0.5rem;\r\n  padding-inline: 1rem;\r\n  border: none;\r\n  border-radius: 0.2rem;\r\n  border-bottom: 3px solid #ccc;\r\n  cursor: pointer;\r\n  color: #fff;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #239fd9;\r\n}\r\n\r\n.name-and-score-container {\r\n  margin-top: 2rem;\r\n  list-style: none;\r\n  counter-reset: item;\r\n}\r\n\r\n.name-and-score-container li {\r\n  counter-increment: item;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.2rem;\r\n  color: white;\r\n}\r\n\r\n.name-and-score-container li span {\r\n  width: 100%;\r\n  padding: 0.7rem;\r\n  background-color: #2397cb;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4) {\r\n  height: 3.2rem;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4) span {\r\n  position: relative;\r\n  left: 1rem;\r\n  padding: 0.7rem;\r\n}\r\n\r\n.name-and-score-container :nth-child(1) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(2) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(3) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4)::before {\r\n  margin-left: -3.1rem;\r\n  padding: 0.4rem;\r\n  content: counter(item);\r\n  background-color: darkblue;\r\n  border-radius: 100%;\r\n  color: white;\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.name-and-score-container li:first-child::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url('./assets/rank-1.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  margin-left: -3rem;\r\n}\r\n\r\n.name-and-score-container li:nth-child(2)::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url('./assets/rank-2.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  margin-left: -3rem;\r\n}\r\n\r\n.name-and-score-container li:nth-child(3)::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url('./assets/rank-3.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  margin-left: -3rem;\r\n}\r\n\r\n.input-container {\r\n  margin-top: 2.8rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-container form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.input-container form input {\r\n  margin-bottom: 1.2rem;\r\n  padding: 1rem;\r\n  background-color: #ccc;\r\n  border: none;\r\n  font-size: 1rem;\r\n  outline: none;\r\n  border-radius: 0.2rem;\r\n  border-bottom: #1b335c 3px solid;\r\n}\r\n\r\n.input-container form .submit-btn {\r\n  width: 100%;\r\n}\r\n\r\n.input-container form .submit-btn button {\r\n  float: right;\r\n  padding-inline: 3rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_loadData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadData.js */ "./src/modules/loadData.js");
/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render.js */ "./src/modules/render.js");
/* harmony import */ var _modules_gameId_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/gameId.js */ "./src/modules/gameId.js");
/* harmony import */ var _modules_addScore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addScore.js */ "./src/modules/addScore.js");






class Leaderboard {
  constructor() {
    this.form = document.getElementById('scoreForm');
    this.getuserInput = document.getElementById('playerName');
    this.getuserScore = document.getElementById('playerScore');
    this.refreshBtn = document.getElementById('refreshBtn');
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const player = {
        user: this.getuserInput.value,
        score: this.getuserScore.value,
      };
      this.getuserInput.value = '';
      this.getuserScore.value = '';

      (0,_modules_addScore_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_modules_gameId_js__WEBPACK_IMPORTED_MODULE_3__["default"], player);
      const res = await (0,_modules_loadData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_modules_gameId_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res.result);
    });
  }

  refresh() {
    this.refreshBtn.addEventListener('click', async () => {
      const res = await (0,_modules_loadData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_modules_gameId_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res.result);
    });
  }
}

window.onload = async () => {
  const res = await (0,_modules_loadData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_modules_gameId_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res.result);
  const game = new Leaderboard();
  game.refresh();
};

/***/ }),

/***/ "./src/modules/addScore.js":
/*!*********************************!*\
  !*** ./src/modules/addScore.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseUrl.js */ "./src/modules/baseUrl.js");


const addScore = async (gameId, player) => {
  try {
    const url = `${_baseUrl_js__WEBPACK_IMPORTED_MODULE_0__["default"]}games/${gameId.ID}/scores`;
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);

/***/ }),

/***/ "./src/modules/baseUrl.js":
/*!********************************!*\
  !*** ./src/modules/baseUrl.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);

/***/ }),

/***/ "./src/modules/gameId.js":
/*!*******************************!*\
  !*** ./src/modules/gameId.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gameId = {
  ID: 'IGguM6mf7978NPbdDq37',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameId);

/***/ }),

/***/ "./src/modules/loadData.js":
/*!*********************************!*\
  !*** ./src/modules/loadData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseUrl.js */ "./src/modules/baseUrl.js");


const loadData = async (gameId) => {
  try {
    const url = `${_baseUrl_js__WEBPACK_IMPORTED_MODULE_0__["default"]}games/${gameId.ID}/scores`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadData);

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderData = (data) => {
  const listContainer = document.querySelector('.name-and-score-container');
  listContainer.innerHTML = data.map((element) => `<li><span>${element.user}: ${element.score}</span></li>`).join(' ');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderData);

/***/ }),

/***/ "./src/assets/leaderboard-bg.png":
/*!***************************************!*\
  !*** ./src/assets/leaderboard-bg.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f98a4f32ea3f57111c01.png";

/***/ }),

/***/ "./src/assets/rank-1.png":
/*!*******************************!*\
  !*** ./src/assets/rank-1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56bbde064b930b8a02d5.png";

/***/ }),

/***/ "./src/assets/rank-2.png":
/*!*******************************!*\
  !*** ./src/assets/rank-2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c73cc35715e2ceb862a4.png";

/***/ }),

/***/ "./src/assets/rank-3.png":
/*!*******************************!*\
  !*** ./src/assets/rank-3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2083d7a3532ff42963c5.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ2xCdkI7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQ0R0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ0pjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBTyxDQUFDLFFBQVEsVUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNadkI7QUFDQTtBQUNBLCtEQUErRCxhQUFhLElBQUksY0FBYztBQUM5RjtBQUNBLGlFQUFlLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9hZGRTY29yZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9nYW1lSWQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9sb2FkRGF0YS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3JlbmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbGVhZGVyYm9hcmQtYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvcmFuay0xLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3JhbmstMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9yYW5rLTMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1jb250YWluZXIgZGl2IHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjMzNWM7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXHJcXG4gIGJvcmRlcjogNHB4ICNjY2Mgc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLFxcclxcbi5hZGQtc2NvcmUge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2VudC1zY29yZS1hbmQtcmVmcmVzaC1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiAjMWIzMzVjO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTdjYjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNjY2M7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzlmZDk7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb3VudGVyLXJlc2V0OiBpdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIGxpIHtcXHJcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBpdGVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGkgc3BhbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk3Y2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgOm50aC1jaGlsZChuKzQpIHtcXHJcXG4gIGhlaWdodDogMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIDpudGgtY2hpbGQobis0KSBzcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgOm50aC1jaGlsZCgxKSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIDpudGgtY2hpbGQoMykge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgOm50aC1jaGlsZChuKzQpOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zLjFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICBjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEuM3JlbTtcXHJcXG4gIGhlaWdodDogMS4zcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBtYXJnaW4tbGVmdDogLTNyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGk6bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIGxpOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAyLjhyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIgZm9ybSBpbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAjMWIzMzVjIDNweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciBmb3JtIC5zdWJtaXQtYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIGZvcm0gLnN1Ym1pdC1idG4gYnV0dG9uIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAzcmVtO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5REFBb0Q7RUFDcEQsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLHlEQUE0QztFQUM1Qyx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBNEM7RUFDNUMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gseURBQTRDO0VBQzVDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2xlYWRlcmJvYXJkLWJnLnBuZycpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1jb250YWluZXIgZGl2IHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjMzNWM7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXHJcXG4gIGJvcmRlcjogNHB4ICNjY2Mgc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLFxcclxcbi5hZGQtc2NvcmUge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2VudC1zY29yZS1hbmQtcmVmcmVzaC1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiAjMWIzMzVjO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTdjYjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNjY2M7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzlmZDk7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb3VudGVyLXJlc2V0OiBpdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIGxpIHtcXHJcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBpdGVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGkgc3BhbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk3Y2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgOm50aC1jaGlsZChuKzQpIHtcXHJcXG4gIGhlaWdodDogMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIDpudGgtY2hpbGQobis0KSBzcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgOm50aC1jaGlsZCgxKSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIDpudGgtY2hpbGQoMykge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgOm50aC1jaGlsZChuKzQpOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zLjFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICBjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEuM3JlbTtcXHJcXG4gIGhlaWdodDogMS4zcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9yYW5rLTEucG5nJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIGxpOm50aC1jaGlsZCgyKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL3JhbmstMi5wbmcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBtYXJnaW4tbGVmdDogLTNyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGk6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvcmFuay0zLnBuZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAyLjhyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIgZm9ybSBpbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAjMWIzMzVjIDNweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciBmb3JtIC5zdWJtaXQtYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIGZvcm0gLnN1Ym1pdC1idG4gYnV0dG9uIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAzcmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBsb2FkRGF0YSBmcm9tICcuL21vZHVsZXMvbG9hZERhdGEuanMnO1xyXG5pbXBvcnQgcmVuZGVyRGF0YSBmcm9tICcuL21vZHVsZXMvcmVuZGVyLmpzJztcclxuaW1wb3J0IGdhbWVJZCBmcm9tICcuL21vZHVsZXMvZ2FtZUlkLmpzJztcclxuaW1wb3J0IGFkZFNjb3JlIGZyb20gJy4vbW9kdWxlcy9hZGRTY29yZS5qcyc7XHJcblxyXG5jbGFzcyBMZWFkZXJib2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmVGb3JtJyk7XHJcbiAgICB0aGlzLmdldHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJOYW1lJyk7XHJcbiAgICB0aGlzLmdldHVzZXJTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJTY29yZScpO1xyXG4gICAgdGhpcy5yZWZyZXNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZnJlc2hCdG4nKTtcclxuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHBsYXllciA9IHtcclxuICAgICAgICB1c2VyOiB0aGlzLmdldHVzZXJJbnB1dC52YWx1ZSxcclxuICAgICAgICBzY29yZTogdGhpcy5nZXR1c2VyU2NvcmUudmFsdWUsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZ2V0dXNlcklucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMuZ2V0dXNlclNjb3JlLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICBhZGRTY29yZShnYW1lSWQsIHBsYXllcik7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxvYWREYXRhKGdhbWVJZCk7XHJcbiAgICAgIHJlbmRlckRhdGEocmVzLnJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICB0aGlzLnJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxvYWREYXRhKGdhbWVJZCk7XHJcbiAgICAgIHJlbmRlckRhdGEocmVzLnJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgbG9hZERhdGEoZ2FtZUlkKTtcclxuICByZW5kZXJEYXRhKHJlcy5yZXN1bHQpO1xyXG4gIGNvbnN0IGdhbWUgPSBuZXcgTGVhZGVyYm9hcmQoKTtcclxuICBnYW1lLnJlZnJlc2goKTtcclxufTsiLCJpbXBvcnQgYmFzZVVybCBmcm9tICcuL2Jhc2VVcmwuanMnO1xyXG5cclxuY29uc3QgYWRkU2NvcmUgPSBhc3luYyAoZ2FtZUlkLCBwbGF5ZXIpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH1nYW1lcy8ke2dhbWVJZC5JRH0vc2NvcmVzYDtcclxuICAgIGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBsYXllciksXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyEnKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRTY29yZTsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpLyc7XHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7IiwiY29uc3QgZ2FtZUlkID0ge1xyXG4gIElEOiAnSUdndU02bWY3OTc4TlBiZERxMzcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZUlkOyIsImltcG9ydCBiYXNlVXJsIGZyb20gJy4vYmFzZVVybC5qcyc7XHJcblxyXG5jb25zdCBsb2FkRGF0YSA9IGFzeW5jIChnYW1lSWQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH1nYW1lcy8ke2dhbWVJZC5JRH0vc2NvcmVzYDtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbG9hZERhdGE7IiwiY29uc3QgcmVuZGVyRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLWFuZC1zY29yZS1jb250YWluZXInKTtcclxuICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGEubWFwKChlbGVtZW50KSA9PiBgPGxpPjxzcGFuPiR7ZWxlbWVudC51c2VyfTogJHtlbGVtZW50LnNjb3JlfTwvc3Bhbj48L2xpPmApLmpvaW4oJyAnKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRGF0YTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=