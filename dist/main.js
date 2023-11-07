/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/dropdownmenu.js
/* harmony default export */ var dropdownmenu = ((function () {

    document.addEventListener('DOMContentLoaded', function () {
      // Select all dropdown headers and icon buttons
      const dropdownHeaders = document.querySelectorAll('.dropdown h2');
      const dropdownIconButtons = document.querySelectorAll('.dropdown-icon-btn');
  
      // Toggle function for the articles
      function toggleArticles(dropdownContainer) {
        // Toggle the 'expanded' class on the '.dropdown' container
        dropdownContainer.classList.toggle('expanded');
      }
  
      // Attach the event listener to each header
      dropdownHeaders.forEach(header => {
        header.addEventListener('click', function(event) {
          // Find the closest parent container with class '.dropdown'
          const dropdownContainer = event.target.closest('.dropdown');
          toggleArticles(dropdownContainer);
        });
      });
  
      // Attach the event listener to each dropdown button
      dropdownIconButtons.forEach(button => {
        button.addEventListener('click', function(event) {
          event.stopPropagation(); // Prevent the event from bubbling up to the header
          // Find the closest parent container with class '.dropdown'
          const dropdownContainer = event.target.closest('.dropdown');
          toggleArticles(dropdownContainer);
        });
      });
  
    });
  
  })());
  
;// CONCATENATED MODULE: ./src/scripts/setting.js
/* harmony default export */ var setting = ((function () {


})());
;// CONCATENATED MODULE: ./src/index.js




/******/ })()
;
//# sourceMappingURL=main.js.map