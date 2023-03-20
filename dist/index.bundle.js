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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  padding: 2rem;\r\n  position: relative;\r\n}\r\n\r\nheader h1 {\r\n  font-size: 3rem;\r\n  background-color: #1b335c;\r\n  padding: 0.5rem;\r\n  padding-left: 5rem;\r\n  color: #ccc;\r\n  border-radius: 0.4rem;\r\n  border: 4px #ccc solid;\r\n}\r\n\r\nheader img {\r\n  position: absolute;\r\n  width: 55px;\r\n  top: 50%;\r\n  left: 3rem;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.content-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.score,\r\n.add-score {\r\n  width: 40%;\r\n}\r\n\r\n.recent-score-and-refresh-btn {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nh2 {\r\n  color: #1b335c;\r\n}\r\n\r\nbutton {\r\n  background-color: #2397cb;\r\n  padding: 0.5rem;\r\n  padding-inline: 1rem;\r\n  border: none;\r\n  border-radius: 0.2rem;\r\n  border-bottom: 3px solid #ccc;\r\n  cursor: pointer;\r\n  color: #fff;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #2091c5;\r\n}\r\n\r\n.name-and-score-container {\r\n  margin-top: 2rem;\r\n  list-style: none;\r\n  counter-reset: item;\r\n  max-height: 40%;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.name-and-score-container::-webkit-scrollbar {\r\n  width: 0.4em;\r\n}\r\n\r\n.name-and-score-container::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.name-and-score-container::-webkit-scrollbar-thumb {\r\n  background-color: #ccc;\r\n  outline: 1px solid slategrey;\r\n  border-radius: 0.2em;\r\n}\r\n\r\n.name-and-score-container li {\r\n  counter-increment: item;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.2rem;\r\n  color: white;\r\n}\r\n\r\n.name-and-score-container li span {\r\n  width: 100%;\r\n  padding: 0.7rem;\r\n  background-color: #2397cb;\r\n  border-radius: 0.2rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4) {\r\n  height: 3.2rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4) span {\r\n  position: relative;\r\n  left: 0.7rem;\r\n  padding: 0.7rem;\r\n}\r\n\r\n.name-and-score-container :nth-child(1) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(2) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(3) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4)::before {\r\n  padding: 0.4rem;\r\n  content: counter(item);\r\n  background-color: darkblue;\r\n  border-radius: 100%;\r\n  color: white;\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.name-and-score-container li:first-child::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.name-and-score-container li:nth-child(2)::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.name-and-score-container li:nth-child(3)::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.input-container {\r\n  margin-top: 2.8rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-container form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.input-container form input {\r\n  margin-bottom: 1.2rem;\r\n  padding: 1rem;\r\n  background-color: #ccc;\r\n  border: none;\r\n  font-size: 1rem;\r\n  outline: none;\r\n  border-radius: 0.2rem;\r\n  border-bottom: #1b335c 3px solid;\r\n}\r\n\r\n.input-container form .submit-btn {\r\n  width: 100%;\r\n}\r\n\r\n.input-container form .submit-btn button {\r\n  float: right;\r\n  padding-inline: 3rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yDAAoD;EACpD,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,gDAAgD;EAChD,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,qBAAqB;EACrB,6BAA6B;EAC7B,eAAe;EACf,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,yBAAyB;EACzB,qBAAqB;EACrB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,0BAA0B;EAC1B,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-image: url('./assets/leaderboard-bg.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  padding: 2rem;\r\n  position: relative;\r\n}\r\n\r\nheader h1 {\r\n  font-size: 3rem;\r\n  background-color: #1b335c;\r\n  padding: 0.5rem;\r\n  padding-left: 5rem;\r\n  color: #ccc;\r\n  border-radius: 0.4rem;\r\n  border: 4px #ccc solid;\r\n}\r\n\r\nheader img {\r\n  position: absolute;\r\n  width: 55px;\r\n  top: 50%;\r\n  left: 3rem;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.content-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.score,\r\n.add-score {\r\n  width: 40%;\r\n}\r\n\r\n.recent-score-and-refresh-btn {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nh2 {\r\n  color: #1b335c;\r\n}\r\n\r\nbutton {\r\n  background-color: #2397cb;\r\n  padding: 0.5rem;\r\n  padding-inline: 1rem;\r\n  border: none;\r\n  border-radius: 0.2rem;\r\n  border-bottom: 3px solid #ccc;\r\n  cursor: pointer;\r\n  color: #fff;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #2091c5;\r\n}\r\n\r\n.name-and-score-container {\r\n  margin-top: 2rem;\r\n  list-style: none;\r\n  counter-reset: item;\r\n  max-height: 40%;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.name-and-score-container::-webkit-scrollbar {\r\n  width: 0.4em;\r\n}\r\n\r\n.name-and-score-container::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.name-and-score-container::-webkit-scrollbar-thumb {\r\n  background-color: #ccc;\r\n  outline: 1px solid slategrey;\r\n  border-radius: 0.2em;\r\n}\r\n\r\n.name-and-score-container li {\r\n  counter-increment: item;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.2rem;\r\n  color: white;\r\n}\r\n\r\n.name-and-score-container li span {\r\n  width: 100%;\r\n  padding: 0.7rem;\r\n  background-color: #2397cb;\r\n  border-radius: 0.2rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4) {\r\n  height: 3.2rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4) span {\r\n  position: relative;\r\n  left: 0.7rem;\r\n  padding: 0.7rem;\r\n}\r\n\r\n.name-and-score-container :nth-child(1) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(2) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(3) {\r\n  list-style-type: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-and-score-container :nth-child(n+4)::before {\r\n  padding: 0.4rem;\r\n  content: counter(item);\r\n  background-color: darkblue;\r\n  border-radius: 100%;\r\n  color: white;\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.name-and-score-container li:first-child::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url('./assets/rank-1.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.name-and-score-container li:nth-child(2)::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url('./assets/rank-2.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.name-and-score-container li:nth-child(3)::before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-image: url('./assets/rank-3.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.input-container {\r\n  margin-top: 2.8rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-container form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.input-container form input {\r\n  margin-bottom: 1.2rem;\r\n  padding: 1rem;\r\n  background-color: #ccc;\r\n  border: none;\r\n  font-size: 1rem;\r\n  outline: none;\r\n  border-radius: 0.2rem;\r\n  border-bottom: #1b335c 3px solid;\r\n}\r\n\r\n.input-container form .submit-btn {\r\n  width: 100%;\r\n}\r\n\r\n.input-container form .submit-btn button {\r\n  float: right;\r\n  padding-inline: 3rem;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_lead_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/lead.png */ "./src/assets/lead.png");


const gameId = {
  ID: 'IGguM6mf7978NPbdDq37',
};
const lead = document.getElementById('leadImage');
lead.src = _assets_lead_png__WEBPACK_IMPORTED_MODULE_0__;

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
  listContainer.innerHTML = data.map((element) => `<li><span><strong> ${element.user}</strong> <strong>${element.score}</strong></span></li>`).join(' ');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderData);

/***/ }),

/***/ "./src/assets/lead.png":
/*!*****************************!*\
  !*** ./src/assets/lead.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afdba527f04074ed57d8.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSUFBOEM7QUFDMUYsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QyxtSEFBc0M7QUFDbEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkNBQTZDLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEtBQUssY0FBYyx3RUFBd0UsbUNBQW1DLGtDQUFrQyw2QkFBNkIsdURBQXVELHdCQUF3Qix1QkFBdUIsS0FBSyxjQUFjLGtCQUFrQixvQkFBb0IsNkJBQTZCLEtBQUssZ0JBQWdCLG9CQUFvQix5QkFBeUIsS0FBSyxtQkFBbUIsc0JBQXNCLGdDQUFnQyxzQkFBc0IseUJBQXlCLGtCQUFrQiw0QkFBNEIsNkJBQTZCLEtBQUssb0JBQW9CLHlCQUF5QixrQkFBa0IsZUFBZSxpQkFBaUIsa0NBQWtDLEtBQUssNEJBQTRCLGtCQUFrQixvQkFBb0Isb0NBQW9DLEtBQUssK0JBQStCLGlCQUFpQixLQUFLLHVDQUF1QyxvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLFlBQVkscUJBQXFCLEtBQUssZ0JBQWdCLGdDQUFnQyxzQkFBc0IsMkJBQTJCLG1CQUFtQiw0QkFBNEIsb0NBQW9DLHNCQUFzQixrQkFBa0IsS0FBSyxzQkFBc0IsZ0NBQWdDLEtBQUssbUNBQW1DLHVCQUF1Qix1QkFBdUIsMEJBQTBCLHNCQUFzQix1QkFBdUIseUJBQXlCLEtBQUssc0RBQXNELG1CQUFtQixLQUFLLDREQUE0RCxtREFBbUQsS0FBSyw0REFBNEQsNkJBQTZCLG1DQUFtQywyQkFBMkIsS0FBSyxzQ0FBc0MsOEJBQThCLG9CQUFvQiwwQkFBMEIsc0JBQXNCLG1CQUFtQixLQUFLLDJDQUEyQyxrQkFBa0Isc0JBQXNCLGdDQUFnQyw0QkFBNEIsb0JBQW9CLHFDQUFxQywwQkFBMEIsS0FBSyxtREFBbUQscUJBQXFCLDBCQUEwQixLQUFLLHdEQUF3RCx5QkFBeUIsbUJBQW1CLHNCQUFzQixLQUFLLGlEQUFpRCw0QkFBNEIsb0JBQW9CLDBCQUEwQixLQUFLLGlEQUFpRCw0QkFBNEIsb0JBQW9CLDBCQUEwQixLQUFLLGlEQUFpRCw0QkFBNEIsb0JBQW9CLDBCQUEwQixLQUFLLDJEQUEyRCxzQkFBc0IsNkJBQTZCLGlDQUFpQywwQkFBMEIsbUJBQW1CLG9CQUFvQixxQkFBcUIsd0JBQXdCLHlCQUF5Qiw0QkFBNEIsS0FBSywwREFBMEQsa0JBQWtCLDRCQUE0QixtQkFBbUIsa0JBQWtCLHdFQUF3RSwrQkFBK0IsbUNBQW1DLEtBQUssMkRBQTJELGtCQUFrQiw0QkFBNEIsbUJBQW1CLGtCQUFrQix3RUFBd0UsK0JBQStCLG1DQUFtQyxLQUFLLDJEQUEyRCxrQkFBa0IsNEJBQTRCLG1CQUFtQixrQkFBa0Isd0VBQXdFLCtCQUErQixtQ0FBbUMsS0FBSywwQkFBMEIseUJBQXlCLG9CQUFvQiw2QkFBNkIsS0FBSywrQkFBK0Isb0JBQW9CLDZCQUE2QixnQ0FBZ0Msb0NBQW9DLGtCQUFrQixLQUFLLHFDQUFxQyw0QkFBNEIsb0JBQW9CLDZCQUE2QixtQkFBbUIsc0JBQXNCLG9CQUFvQiw0QkFBNEIsdUNBQXVDLEtBQUssMkNBQTJDLGtCQUFrQixLQUFLLGtEQUFrRCxtQkFBbUIsMkJBQTJCLEtBQUssV0FBVyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSw2QkFBNkIsNkJBQTZCLGdCQUFnQixpQkFBaUIsS0FBSyxjQUFjLDJEQUEyRCxtQ0FBbUMsa0NBQWtDLDZCQUE2Qix1REFBdUQsd0JBQXdCLHVCQUF1QixLQUFLLGNBQWMsa0JBQWtCLG9CQUFvQiw2QkFBNkIsS0FBSyxnQkFBZ0Isb0JBQW9CLHlCQUF5QixLQUFLLG1CQUFtQixzQkFBc0IsZ0NBQWdDLHNCQUFzQix5QkFBeUIsa0JBQWtCLDRCQUE0Qiw2QkFBNkIsS0FBSyxvQkFBb0IseUJBQXlCLGtCQUFrQixlQUFlLGlCQUFpQixrQ0FBa0MsS0FBSyw0QkFBNEIsa0JBQWtCLG9CQUFvQixvQ0FBb0MsS0FBSywrQkFBK0IsaUJBQWlCLEtBQUssdUNBQXVDLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssWUFBWSxxQkFBcUIsS0FBSyxnQkFBZ0IsZ0NBQWdDLHNCQUFzQiwyQkFBMkIsbUJBQW1CLDRCQUE0QixvQ0FBb0Msc0JBQXNCLGtCQUFrQixLQUFLLHNCQUFzQixnQ0FBZ0MsS0FBSyxtQ0FBbUMsdUJBQXVCLHVCQUF1QiwwQkFBMEIsc0JBQXNCLHVCQUF1Qix5QkFBeUIsS0FBSyxzREFBc0QsbUJBQW1CLEtBQUssNERBQTRELG1EQUFtRCxLQUFLLDREQUE0RCw2QkFBNkIsbUNBQW1DLDJCQUEyQixLQUFLLHNDQUFzQyw4QkFBOEIsb0JBQW9CLDBCQUEwQixzQkFBc0IsbUJBQW1CLEtBQUssMkNBQTJDLGtCQUFrQixzQkFBc0IsZ0NBQWdDLDRCQUE0QixvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLG1EQUFtRCxxQkFBcUIsMEJBQTBCLEtBQUssd0RBQXdELHlCQUF5QixtQkFBbUIsc0JBQXNCLEtBQUssaURBQWlELDRCQUE0QixvQkFBb0IsMEJBQTBCLEtBQUssaURBQWlELDRCQUE0QixvQkFBb0IsMEJBQTBCLEtBQUssaURBQWlELDRCQUE0QixvQkFBb0IsMEJBQTBCLEtBQUssMkRBQTJELHNCQUFzQiw2QkFBNkIsaUNBQWlDLDBCQUEwQixtQkFBbUIsb0JBQW9CLHFCQUFxQix3QkFBd0IseUJBQXlCLDRCQUE0QixLQUFLLDBEQUEwRCxrQkFBa0IsNEJBQTRCLG1CQUFtQixrQkFBa0IsbURBQW1ELCtCQUErQixtQ0FBbUMsS0FBSywyREFBMkQsa0JBQWtCLDRCQUE0QixtQkFBbUIsa0JBQWtCLG1EQUFtRCwrQkFBK0IsbUNBQW1DLEtBQUssMkRBQTJELGtCQUFrQiw0QkFBNEIsbUJBQW1CLGtCQUFrQixtREFBbUQsK0JBQStCLG1DQUFtQyxLQUFLLDBCQUEwQix5QkFBeUIsb0JBQW9CLDZCQUE2QixLQUFLLCtCQUErQixvQkFBb0IsNkJBQTZCLGdDQUFnQyxvQ0FBb0Msa0JBQWtCLEtBQUsscUNBQXFDLDRCQUE0QixvQkFBb0IsNkJBQTZCLG1CQUFtQixzQkFBc0Isb0JBQW9CLDRCQUE0Qix1Q0FBdUMsS0FBSywyQ0FBMkMsa0JBQWtCLEtBQUssa0RBQWtELG1CQUFtQiwyQkFBMkIsS0FBSyx1QkFBdUI7QUFDaDZXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjs7QUFFd0I7QUFDQTtBQUNKO0FBQ0k7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxnRUFBUSxDQUFDLDBEQUFNO0FBQ3JCLHdCQUF3QixnRUFBUSxDQUFDLDBEQUFNO0FBQ3ZDLE1BQU0sOERBQVU7QUFDaEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQVEsQ0FBQywwREFBTTtBQUN2QyxNQUFNLDhEQUFVO0FBQ2hCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdFQUFRLENBQUMsMERBQU07QUFDbkMsRUFBRSw4REFBVTtBQUNaO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNtQzs7QUFFbkM7QUFDQTtBQUNBLG1CQUFtQixtREFBTyxDQUFDLFFBQVEsVUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNsQnZCO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDRHFCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkNBQVM7O0FBRXBCLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ1JjOztBQUVuQztBQUNBO0FBQ0EsbUJBQW1CLG1EQUFPLENBQUMsUUFBUSxVQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ1p2QjtBQUNBO0FBQ0Esd0VBQXdFLGFBQWEsb0JBQW9CLGNBQWM7QUFDdkg7QUFDQSxpRUFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvYWRkU2NvcmUuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9iYXNlVXJsLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvZ2FtZUlkLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvbG9hZERhdGEuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2xlYWRlcmJvYXJkLWJnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3JhbmstMS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9yYW5rLTIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvcmFuay0zLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMzM1YztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXJlbTtcXHJcXG4gIGNvbG9yOiAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgYm9yZGVyOiA0cHggI2NjYyBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogNTVweDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogM3JlbTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUsXFxyXFxuLmFkZC1zY29yZSB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50LXNjb3JlLWFuZC1yZWZyZXNoLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgY29sb3I6ICMxYjMzNWM7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5N2NiO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2NjYztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwOTFjNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuICBtYXgtaGVpZ2h0OiA0MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIGxpIHtcXHJcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBpdGVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGkgc3BhbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk3Y2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lciA6bnRoLWNoaWxkKG4rNCkge1xcclxcbiAgaGVpZ2h0OiAzLjJyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIDpudGgtY2hpbGQobis0KSBzcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDAuN3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIDpudGgtY2hpbGQoMikge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgOm50aC1jaGlsZCgzKSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lciA6bnRoLWNoaWxkKG4rNCk6OmJlZm9yZSB7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICBjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEuM3JlbTtcXHJcXG4gIGhlaWdodDogMS4zcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGk6bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIGxpOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAyLjhyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIgZm9ybSBpbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAjMWIzMzVjIDNweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciBmb3JtIC5zdWJtaXQtYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIGZvcm0gLnN1Ym1pdC1idG4gYnV0dG9uIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAzcmVtO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5REFBb0Q7RUFDcEQsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZ0RBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBNEM7RUFDNUMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBNEM7RUFDNUMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBNEM7RUFDNUMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9sZWFkZXJib2FyZC1iZy5wbmcnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMzM1YztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXJlbTtcXHJcXG4gIGNvbG9yOiAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgYm9yZGVyOiA0cHggI2NjYyBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogNTVweDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogM3JlbTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUsXFxyXFxuLmFkZC1zY29yZSB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50LXNjb3JlLWFuZC1yZWZyZXNoLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgY29sb3I6ICMxYjMzNWM7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5N2NiO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2NjYztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwOTFjNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuICBtYXgtaGVpZ2h0OiA0MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIGxpIHtcXHJcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBpdGVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGkgc3BhbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk3Y2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lciA6bnRoLWNoaWxkKG4rNCkge1xcclxcbiAgaGVpZ2h0OiAzLjJyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIDpudGgtY2hpbGQobis0KSBzcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDAuN3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIDpudGgtY2hpbGQoMikge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgOm50aC1jaGlsZCgzKSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lciA6bnRoLWNoaWxkKG4rNCk6OmJlZm9yZSB7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICBjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEuM3JlbTtcXHJcXG4gIGhlaWdodDogMS4zcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9yYW5rLTEucG5nJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1hbmQtc2NvcmUtY29udGFpbmVyIGxpOm50aC1jaGlsZCgyKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL3JhbmstMi5wbmcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWFuZC1zY29yZS1jb250YWluZXIgbGk6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvcmFuay0zLnBuZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAyLjhyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIgZm9ybSBpbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAjMWIzMzVjIDNweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciBmb3JtIC5zdWJtaXQtYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIGZvcm0gLnN1Ym1pdC1idG4gYnV0dG9uIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAzcmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCBsb2FkRGF0YSBmcm9tICcuL21vZHVsZXMvbG9hZERhdGEuanMnO1xuaW1wb3J0IHJlbmRlckRhdGEgZnJvbSAnLi9tb2R1bGVzL3JlbmRlci5qcyc7XG5pbXBvcnQgZ2FtZUlkIGZyb20gJy4vbW9kdWxlcy9nYW1lSWQuanMnO1xuaW1wb3J0IGFkZFNjb3JlIGZyb20gJy4vbW9kdWxlcy9hZGRTY29yZS5qcyc7XG5cbmNsYXNzIExlYWRlcmJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlRm9ybScpO1xuICAgIHRoaXMuZ2V0dXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllck5hbWUnKTtcbiAgICB0aGlzLmdldHVzZXJTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJTY29yZScpO1xuICAgIHRoaXMucmVmcmVzaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoQnRuJyk7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBwbGF5ZXIgPSB7XG4gICAgICAgIHVzZXI6IHRoaXMuZ2V0dXNlcklucHV0LnZhbHVlLFxuICAgICAgICBzY29yZTogdGhpcy5nZXR1c2VyU2NvcmUudmFsdWUsXG4gICAgICB9O1xuICAgICAgdGhpcy5nZXR1c2VySW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHRoaXMuZ2V0dXNlclNjb3JlLnZhbHVlID0gJyc7XG5cbiAgICAgIGFkZFNjb3JlKGdhbWVJZCwgcGxheWVyKTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxvYWREYXRhKGdhbWVJZCk7XG4gICAgICByZW5kZXJEYXRhKHJlcy5yZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBsb2FkRGF0YShnYW1lSWQpO1xuICAgICAgcmVuZGVyRGF0YShyZXMucmVzdWx0KTtcbiAgICB9KTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBsb2FkRGF0YShnYW1lSWQpO1xuICByZW5kZXJEYXRhKHJlcy5yZXN1bHQpO1xuICBjb25zdCBnYW1lID0gbmV3IExlYWRlcmJvYXJkKCk7XG4gIGdhbWUucmVmcmVzaCgpO1xufTsiLCJpbXBvcnQgYmFzZVVybCBmcm9tICcuL2Jhc2VVcmwuanMnO1xuXG5jb25zdCBhZGRTY29yZSA9IGFzeW5jIChnYW1lSWQsIHBsYXllcikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9Z2FtZXMvJHtnYW1lSWQuSUR9L3Njb3Jlc2A7XG4gICAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGxheWVyKSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRTY29yZTsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpLyc7XG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsOyIsImltcG9ydCBsZWFkSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2xlYWQucG5nJztcblxuY29uc3QgZ2FtZUlkID0ge1xuICBJRDogJ0lHZ3VNNm1mNzk3OE5QYmREcTM3Jyxcbn07XG5jb25zdCBsZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlYWRJbWFnZScpO1xubGVhZC5zcmMgPSBsZWFkSW1hZ2U7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVJZDsiLCJpbXBvcnQgYmFzZVVybCBmcm9tICcuL2Jhc2VVcmwuanMnO1xuXG5jb25zdCBsb2FkRGF0YSA9IGFzeW5jIChnYW1lSWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfWdhbWVzLyR7Z2FtZUlkLklEfS9zY29yZXNgO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyEnKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvYWREYXRhOyIsImNvbnN0IHJlbmRlckRhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUtYW5kLXNjb3JlLWNvbnRhaW5lcicpO1xuICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGEubWFwKChlbGVtZW50KSA9PiBgPGxpPjxzcGFuPjxzdHJvbmc+ICR7ZWxlbWVudC51c2VyfTwvc3Ryb25nPiA8c3Ryb25nPiR7ZWxlbWVudC5zY29yZX08L3N0cm9uZz48L3NwYW4+PC9saT5gKS5qb2luKCcgJyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRGF0YTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=