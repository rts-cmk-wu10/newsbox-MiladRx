// Initialize archiving functionality
export function initializeArchiving() {
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
export function moveArchivedArticles() {
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
export function removeTransformStyle(articleHTML) {
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
