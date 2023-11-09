/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 879:
/***/ (function() {

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Get all the dropdown headers
  const dropdownHeaders = document.querySelectorAll('.news-category.dropdown');

  // Attach the event listener to each header
  dropdownHeaders.forEach(dropdownHeader => {
    dropdownHeader.addEventListener('click', function() {
      // Toggle the 'expanded' class on the '.articles' container of this dropdown
      this.classList.toggle('expanded');
    });
  });
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./src/scripts/dropdownmenu.js
var dropdownmenu = __webpack_require__(879);
;// CONCATENATED MODULE: ./src/scripts/setting.js
/* harmony default export */ var setting = ((function () {


})());
;// CONCATENATED MODULE: ./src/index.js




}();
/******/ })()
;
//# sourceMappingURL=main.js.map