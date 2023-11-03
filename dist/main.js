/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/app.js
/* harmony default export */ var app = ((function() {
fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s')
  .then(response => response.json())
  .then(data => {

  });
})());
;// CONCATENATED MODULE: ./src/scripts/dropdownmenu.js
/* harmony default export */ var dropdownmenu = ((function () {

    document.addEventListener('DOMContentLoaded', function () {
        const travelHeader = document.querySelector('.travel h2');
        const dropdownIconBtn = document.querySelector('.travel .dropdown-icon-btn');

        function toggleArticles() {
            const travelContainer = travelHeader.parentElement;
            if (travelContainer.classList.contains('expanded')) {
                travelContainer.classList.remove('expanded');
            } else {
                travelContainer.classList.add('expanded');
            }
        }

        travelHeader.addEventListener('click', toggleArticles);
        dropdownIconBtn.addEventListener('click', toggleArticles);
    });

})());
;// CONCATENATED MODULE: ./src/scripts/setting.js
/* harmony default export */ var setting = ((function () {


})());
;// CONCATENATED MODULE: ./src/index.js




/******/ })()
;
//# sourceMappingURL=main.js.map