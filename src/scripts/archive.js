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