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

;// CONCATENATED MODULE: ./src/scripts/app.js
// Function to fetch data from the API and update headlines and descriptions
async function updateHeadlinesAndDescriptions() {
  try {
      const apiKey = "F7Q16NruiZVUiGVH934NpdQgCBkkIz2s";
      const apiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
      
      // Fetch data from the API
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Check if data was fetched successfully
      if (response.ok && data.results) {
          // Loop through the articles and update headlines and descriptions
          const articles = document.querySelectorAll('.news-category .headline');
          const descriptions = document.querySelectorAll('.news-category .description');
          
          for (let i = 0; i < articles.length; i++) {
              const article = articles[i];
              const description = descriptions[i];
              
              // Update headline
              article.textContent = data.results[i]?.title || "No Title Available";
              
              // Update description
              description.textContent = data.results[i]?.abstract || "No Description Available";
          }
      } else {
          console.error("Error fetching data from API");
      }
  } catch (error) {
      console.error("An error occurred:", error);
  }
}

// Call the function to update headlines and descriptions when the page loads
window.addEventListener('load', updateHeadlinesAndDescriptions);


/* harmony default export */ var app = ((function () {
  fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s')
    .then(response => response.json())
    .then(data => {

      console.log(data);

    });
})());
// EXTERNAL MODULE: ./src/scripts/dropdownmenu.js
var dropdownmenu = __webpack_require__(879);
;// CONCATENATED MODULE: ./src/index.js





}();
/******/ })()
;
//# sourceMappingURL=main.js.map