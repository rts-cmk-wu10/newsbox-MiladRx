/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 117:
/***/ (function() {

// ARKIVERE virker ikke når jeg prøver på Netlify. men virker når jeg prøver på npm run build watch

document.addEventListener('DOMContentLoaded', function () {
  moveArchivedArticles();
});

document.querySelectorAll('.archive-button').forEach(function (button) {
  button.addEventListener('click', function () {
    const articleContainer = this.parentNode;
    const articleHTML = removeTransformStyle(articleContainer.outerHTML);
    const dataCategory = articleContainer.closest('.news-category').querySelector('.text').innerText;
    let archivedArticles = JSON.parse(localStorage.getItem('archivedArticles')) || {};

    if (!archivedArticles[dataCategory]) {
      archivedArticles[dataCategory] = [];
    }

    archivedArticles[dataCategory].push(articleHTML);
    localStorage.setItem('archivedArticles', JSON.stringify(archivedArticles));

    articleContainer.remove();
    moveArchivedArticles();
  });
});

function moveArchivedArticles() {
  let archivedArticles = JSON.parse(localStorage.getItem('archivedArticles')) || {};

  for (const dataCategory in archivedArticles) {
    const articles = archivedArticles[dataCategory];
    const targetSection = document.querySelector(`#${dataCategory}-ARCHIVE`);

    targetSection.innerHTML = articles.join('');

    archivedArticles[dataCategory] = [];
  }

  localStorage.setItem('archivedArticles', JSON.stringify(archivedArticles));
}

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

/***/ }),

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

/***/ }),

/***/ 198:
/***/ (function() {

// ARKIVERE virker ikke når jeg prøver på Netlify. men virker når jeg prøver på npm run build watch

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
    })

   
}


const script1 = document.createElement('script');
script1.src = '/src/scripts/swipefunction.js';

const script2 = document.createElement('script');
script2.src = '/src/scripts/archive.js';




document.head.appendChild(script1);
document.head.appendChild(script2);





/***/ }),

/***/ 73:
/***/ (function() {


setTimeout(function() {
    showError();
}, 1000);

function showError() {
   
    alert("Når jeg forsøger at bruge Netlify, fungerer ARKIVERE og SWIPE funktionen ikke som forventet. De fungerer korrekt, når jeg kører  npm run build watch. Desuden indlæses mine liste ikoner ikke af en ukendt årsag.");
}


/***/ }),

/***/ 627:
/***/ (function() {

// ARKIVERE virker ikke når jeg prøver på Netlify. men virker når jeg prøver på npm run build watch

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
/* harmony import */ var _scripts_retrieve_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
/* harmony import */ var _scripts_retrieve_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_retrieve_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_archive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(117);
/* harmony import */ var _scripts_archive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_archive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_darkmode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(805);
/* harmony import */ var _scripts_darkmode_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_darkmode_js__WEBPACK_IMPORTED_MODULE_5__);









}();
/******/ })()
;
//# sourceMappingURL=main.js.map