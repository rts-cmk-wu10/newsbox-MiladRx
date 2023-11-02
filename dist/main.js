/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/app.js
/* harmony default export */ var app = ((function() {
fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s')
  .then(response => response.json())
  .then(data => {
   
    console.log(data);
  });
})());
;// CONCATENATED MODULE: ./src/index.js

/******/ })()
;
//# sourceMappingURL=main.js.map