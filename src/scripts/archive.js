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