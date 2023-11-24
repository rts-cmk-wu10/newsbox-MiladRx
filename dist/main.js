/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 805:
/***/ (function() {

const darkModeButton = document.querySelector('.darkmodebtn');
const darkModeState = localStorage.getItem('darkModeState');

if (darkModeState === 'enabled') {
  document.body.classList.add('dark-mode');
}

darkModeButton.addEventListener('click', function () {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkModeState', 'disabled');
  } else {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkModeState', 'enabled');
  }
});

/***/ }),

/***/ 879:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  const dropdownHeaders = document.querySelectorAll('.news-category.dropdown');

  dropdownHeaders.forEach(dropdownHeader => {
    const dropdownContent = dropdownHeader.querySelector('.dropdown-content');
    const dropdownArrow = dropdownHeader.querySelector('.box');

    dropdownArrow.addEventListener('click', function (event) {
      
      event.stopPropagation();

      
      dropdownHeader.classList.toggle('expanded');

     
      dropdownContent.classList.toggle('hidden');
    });

    
    document.addEventListener('click', function (event) {
      if (!dropdownHeader.contains(event.target)) {
        dropdownHeader.classList.remove('expanded');
        dropdownContent.classList.add('hidden');
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

;// CONCATENATED MODULE: ./src/scripts/swipefunction.js
function initializeSwipe() {
  var articleContainers = document.querySelectorAll('.article-container');
  var maxDragDistance = -110; // Maximum trække distance for a swipe
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
          if (archiveButton) {
            archiveButton.style.opacity = (Math.abs(distance) / Math.abs(maxDragDistance)).toString();
          }
        }
      }
    });

    article.addEventListener('touchend', function(e) {
      isDragging = false;
      var totalDragDistance = currentX - startX;
      if (totalDragDistance <= maxDragDistance) {
        this.style.transform = `translateX(${maxDragDistance}px)`;
        if (archiveButton) {
          archiveButton.style.opacity = '1';
        }
      } else {
        this.style.transform = '';
        if (archiveButton) {
          archiveButton.style.opacity = '1';
        }
      }
    });
  });
}

;// CONCATENATED MODULE: ./src/scripts/archive.js
// Initialize archiving functionality
function initializeArchiving() {
  document.addEventListener('DOMContentLoaded', function () {
    // When the DOM is loaded, move archived articles
    moveArchivedArticles();
  });

  // Add click event listeners to all elements with the class 'archive-button'
  document.querySelectorAll('.archive-button').forEach(function (button) {
    button.addEventListener('click', function () {
      const articleContainer = this.parentNode; // Get the parent container of the clicked button
      const articleHTML = removeTransformStyle(articleContainer.outerHTML); // Get HTML content and clean it up
      const dataCategory = articleContainer.closest('.news-category').querySelector('.text').innerText; // Get the data category
      let archivedArticles = JSON.parse(localStorage.getItem('archivedArticles')) || {}; // Retrieve archived articles from local storage

      if (!archivedArticles[dataCategory]) {
        archivedArticles[dataCategory] = [];
      }

      // Add the current article HTML to the corresponding data category
      archivedArticles[dataCategory].push(articleHTML);
      localStorage.setItem('archivedArticles', JSON.stringify(archivedArticles)); // Update local storage

      articleContainer.remove(); // Remove the article container from the DOM
      moveArchivedArticles(); // Move archived articles to their corresponding sections
    });
  });
}

// Move archived articles to their corresponding sections
function moveArchivedArticles() {
  let archivedArticles = JSON.parse(localStorage.getItem('archivedArticles')) || {}; // Retrieve archived articles from local storage

  for (const dataCategory in archivedArticles) {
    const articles = archivedArticles[dataCategory];
    const targetSection = document.querySelector(`#${dataCategory}-ARCHIVE`); // Get the target section in the DOM

    targetSection.innerHTML = articles.join(''); // Update the target section with the joined HTML content of archived articles

    archivedArticles[dataCategory] = []; // Clear the array of archived articles for the current data category
  }

  localStorage.setItem('archivedArticles', JSON.stringify(archivedArticles)); // Update local storage with the cleared archived articles
}

// Remove transformation styles from article HTML
function removeTransformStyle(articleHTML) {
  const div = document.createElement('div');
  div.classList.add('article-container');
  div.innerHTML = articleHTML;
  const article = div.querySelector('article');

  if (article) {
    article.removeAttribute('style');

    const archiveButton = article.querySelector('.archive-button');
    if (archiveButton) {
      archiveButton.classList.remove('archive-button');
      archiveButton.classList.add('delete-button');
      archiveButton.innerHTML = '<i class="fa-solid fa-trash inbox2" style="color: rgb(255, 255, 255);"></i>';
    }

    return div.outerHTML;
  }

  return articleHTML;
}

;// CONCATENATED MODULE: ./src/scripts/fetch.js



const apiEndpoints = {
  WORLD: 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s',
  US: 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s',
  SCIENCE: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s',
  HOME: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s',
  ARTS: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s'
};

for (const category in apiEndpoints) {
  fetch(apiEndpoints[category])
    .then(response => response.json())
    .then(data => {
      const articles = data.results.slice(0, 10); // begrænser 10 artikler

      const section = document.querySelector(`section[data-category="${category}"]`);

      articles.forEach(article => {
        const articleContainer = document.createElement('div');
        articleContainer.classList.add('article-container');

        const articleElement = document.createElement('article');

        const imageElement = document.createElement('img');
        imageElement.classList.add('articleImage');
        imageElement.src = article.multimedia[0]?.url || '';
        imageElement.alt = 'Description of Image';

        const contentContainer = document.createElement('div');
        contentContainer.classList.add('content');

        const headlineElement = document.createElement('h3');
        headlineElement.classList.add('headline');
        headlineElement.textContent = article.title || '';

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('description');
        descriptionElement.textContent = article.abstract || '';

        const archiveButton = document.createElement('div');
        archiveButton.classList.add('archive-button');
        const archiveButtonIcon = document.createElement('i');
        archiveButtonIcon.classList.add('fa-solid', 'fa-inbox', 'inbox2');
        archiveButtonIcon.style.color = '#ffffff';
        archiveButton.appendChild(archiveButtonIcon);

        contentContainer.appendChild(headlineElement);
        contentContainer.appendChild(descriptionElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(contentContainer);
        articleElement.appendChild(archiveButton);
        articleContainer.appendChild(articleElement);

        section.appendChild(articleContainer);
        
      });

      // Call the initializeArchiving and initializeSwipe functions after articles are added to the DOM
      initializeArchiving();
      initializeSwipe();
    });
}


// EXTERNAL MODULE: ./src/scripts/dropdownmenu.js
var dropdownmenu = __webpack_require__(879);
// EXTERNAL MODULE: ./src/scripts/darkmode.js
var darkmode = __webpack_require__(805);
;// CONCATENATED MODULE: ./src/index.js









}();
/******/ })()
;
//# sourceMappingURL=main.js.map