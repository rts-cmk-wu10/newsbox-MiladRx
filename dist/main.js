/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 879:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  const dropdownHeaders = document.querySelectorAll('.news-category.dropdown');

  dropdownHeaders.forEach(dropdownHeader => {
    dropdownHeader.addEventListener('click', function (event) {
      // Prevents the event from affecting parent elements
      event.stopPropagation();

      // Toggle the 'expanded' class on the clicked dropdown
      this.classList.toggle('expanded');

      // Optional: Close other dropdowns when one is opened
      dropdownHeaders.forEach(otherHeader => {
        if (otherHeader !== this) {
          otherHeader.classList.remove('expanded');
        }
      });
    });
  });

  // Optional: Clicking anywhere outside of the dropdowns will close them
  document.addEventListener('click', function () {
    dropdownHeaders.forEach(dropdownHeader => {
      dropdownHeader.classList.remove('expanded');
    });
  });

  // New: Ensure that elements inside the articles are clickable
  document.querySelectorAll('.news-category.dropdown .articles *').forEach(element => {
    element.addEventListener('click', function (event) {
      // This allows interaction with the element
      console.log('Element clicked:', this);

      // Stop the event from closing the dropdown
      event.stopPropagation();
    });
  });
});


/***/ }),

/***/ 736:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function() {
    var articleContainers = document.querySelectorAll('.article-container');
    var maxDragDistance = -110; // Maximum left drag distance
    var startX, currentX;
    var isDragging = false;

    articleContainers.forEach(function(container) {
        var article = container.querySelector('article');
        var archiveButton = container.querySelector('.archive-button');

        article.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        article.addEventListener('touchmove', function(e) {
            if (isDragging) {
                currentX = e.touches[0].clientX;
                var distance = currentX - startX;
                if (distance <= 0 && distance > maxDragDistance) {
                    this.style.transform = `translateX(${distance}px)`;
                    archiveButton.style.opacity = (Math.abs(distance) / Math.abs(maxDragDistance)).toString();
                }
            }
        });

        article.addEventListener('touchend', function(e) {
            isDragging = false;
            var totalDragDistance = currentX - startX;
            if (totalDragDistance <= maxDragDistance) {
                this.style.transform = `translateX(${maxDragDistance}px)`;
                archiveButton.style.opacity = '1';
            } else {
                this.style.transform = '';
                archiveButton.style.opacity = '1';
            }
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
// EXTERNAL MODULE: ./src/scripts/tester.js
var tester = __webpack_require__(736);
;// CONCATENATED MODULE: ./src/index.js





}();
/******/ })()
;
//# sourceMappingURL=main.js.map