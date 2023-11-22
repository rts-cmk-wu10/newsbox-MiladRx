/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 117:
/***/ (function() {

document.querySelectorAll('.archive-button').forEach(function (button) {
  button.addEventListener('click', function () {
    const articleContainer = this.parentNode;
    const articleHTML = articleContainer.outerHTML;
    const dataCategory = articleContainer.closest('section').dataset.category;
    let archivedArticles = JSON.parse(localStorage.getItem('archivedArticles')) || {};

    if (!archivedArticles[dataCategory]) {
      archivedArticles[dataCategory] = [];
    }

    archivedArticles[dataCategory].push(articleHTML);
    localStorage.setItem('archivedArticles', JSON.stringify(archivedArticles));

    articleContainer.remove();
    moveArchivedArticles();
    printHTMLToFile();
  });
});

function moveArchivedArticles() {
  let archivedArticles = JSON.parse(localStorage.getItem('archivedArticles')) || {};

  for (const dataCategory in archivedArticles) {
    const articles = archivedArticles[dataCategory];
    const targetSection = document.querySelector(`section[data-category="${dataCategory}-ARCHIVE"]`);
    targetSection.innerHTML = '';

    articles.forEach(function (articleHTML) {
      const articleElement = document.createElement('article');
      articleElement.innerHTML = articleHTML;
      targetSection.appendChild(articleElement);
    });

    archivedArticles[dataCategory] = [];
  }

  localStorage.setItem('archivedArticles', JSON.stringify(archivedArticles));
}

function printHTMLToFile() {
  const archivedArticles = JSON.parse(localStorage.getItem('archivedArticles')) || {};
  let archiveHTML = '';

  for (const dataCategory in archivedArticles) {
    const articles = archivedArticles[dataCategory];
    let sectionHTML = '';

    articles.forEach(function (articleHTML) {
      sectionHTML += articleHTML;
    });

    archiveHTML += `<section data-category="${dataCategory}-ARCHIVE">${sectionHTML}</section>`;
  }


}

moveArchivedArticles();
printHTMLToFile();

/***/ }),

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

/***/ 198:
/***/ (function() {

// Define the API endpoints for each category
const apiEndpoints = {
  WORLD: 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s',
  US: 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s',
  SCIENCE: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s',
  HOME: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s',
  ARTS: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s'
};

// Fetch data and generate articles for each category
for (const category in apiEndpoints) {
  fetch(apiEndpoints[category])
    .then(response => response.json())
    .then(data => {
      const articles = data.results.slice(0, 10); // Limit the articles to 10

      // Get the section container based on the category
      const section = document.querySelector(`section[data-category="${category}"]`);

      // Loop through the articles
      articles.forEach(article => {
        // Create the article container
        const articleContainer = document.createElement('div');
        articleContainer.classList.add('article-container');

        // Create the article element
        const articleElement = document.createElement('article');

        // Create the image element
        const imageElement = document.createElement('img');
        imageElement.classList.add('articleImage');
        imageElement.src = article.multimedia[0]?.url || ''; // Use optional chaining to handle missing multimedia
        imageElement.alt = 'Description of Image';

        // Create the content container
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('content');

        // Create the headline element
        const headlineElement = document.createElement('h3');
        headlineElement.classList.add('headline');
        headlineElement.textContent = article.title || '';

        // Create the description element
        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('description');
        descriptionElement.textContent = article.abstract || '';

        // Create the archive button
        const archiveButton = document.createElement('div');
        archiveButton.classList.add('archive-button');
        const archiveButtonIcon = document.createElement('i');
        archiveButtonIcon.classList.add('fa-solid', 'fa-inbox', 'inbox2');
        archiveButtonIcon.style.color = '#ffffff';
        archiveButton.appendChild(archiveButtonIcon);

        // Append elements to the article container
        contentContainer.appendChild(headlineElement);
        contentContainer.appendChild(descriptionElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(contentContainer);
        articleElement.appendChild(archiveButton);
        articleContainer.appendChild(articleElement);

        // Append the article container to the section
        section.appendChild(articleContainer);
      });
    })

   
}

// Create script elements for each script
const script1 = document.createElement('script');
script1.src = '/src/scripts/swipefunction.js';

const script2 = document.createElement('script');
script2.src = '/src/scripts/archive.js';

const script3 = document.createElement('script');
script3.src = '/src/scripts/script3.js';

// Append the script elements to the head of the document
document.head.appendChild(script1);
document.head.appendChild(script2);





/***/ }),

/***/ 627:
/***/ (function() {

setTimeout(function() {
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
},);

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _scripts_fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(198);
/* harmony import */ var _scripts_fetch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_fetch_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_swipefunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(627);
/* harmony import */ var _scripts_swipefunction_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_swipefunction_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_dropdownmenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(879);
/* harmony import */ var _scripts_dropdownmenu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropdownmenu_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_archive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(117);
/* harmony import */ var _scripts_archive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_archive_js__WEBPACK_IMPORTED_MODULE_3__);








}();
/******/ })()
;
//# sourceMappingURL=main.js.map