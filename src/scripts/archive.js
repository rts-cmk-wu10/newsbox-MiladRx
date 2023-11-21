// Archive button click event listener
document.querySelectorAll('.archive-button').forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the article container
      const articleContainer = this.parentNode;
  
      // Get the article HTML
      const articleHTML = articleContainer.outerHTML;
  
      // Get the data-category
      const dataCategory = articleContainer.closest('section').dataset.category;
  
      // Retrieve the existing archived articles from local storage
      const archivedArticles = JSON.parse(localStorage.getItem('archivedArticles')) || {};
  
      // Create an array for the data-category if it doesn't exist
      if (!archivedArticles[dataCategory]) {
        archivedArticles[dataCategory] = [];
      }
  
      // Store the article HTML in the corresponding data-category array
      archivedArticles[dataCategory].push(articleHTML);
  
      // Store the updated object in local storage
      localStorage.setItem('archivedArticles', JSON.stringify(archivedArticles));
  
      // Remove the article container from the DOM
      articleContainer.remove();
  
      // Move the archived articles to the corresponding archive sections
      moveArchivedArticles();
  
      // Print the HTML of the archive sections to archive.html
      printHTMLToFile();
    });
  });
  
  // Move archived articles to corresponding archive sections
  function moveArchivedArticles() {
    // Retrieve the archived articles from local storage
    const archivedArticles = JSON.parse(localStorage.getItem('archivedArticles')) || {};
  
    // Loop through each data-category
    for (const dataCategory in archivedArticles) {
      // Get the corresponding archive section
      const archiveSection = document.querySelector(`${dataCategory}-ARCHIVE`);
  
      // Get the array of archived articles for the data-category
      const articles = archivedArticles[dataCategory];
  
      // Loop through the archived articles
      articles.forEach(function(articleHTML) {
        // Create a temporary element to hold the article HTML
        const tempElement = document.createElement('div');
        tempElement.innerHTML = articleHTML;
  
        // Modify the data-category of the article container
        const articleContainer = tempElement.querySelector('.article-container');
        articleContainer.setAttribute('data-category', `${dataCategory}-ARCHIVE`);
  
        // Append the article container to the archive section
        archiveSection.appendChild(articleContainer);
      });
  
      // Clear the array of archived articles for the data-category
      archivedArticles[dataCategory] = [];
    }
  
    // Store the updated object in local storage
    localStorage.setItem('archivedArticles', JSON.stringify(archivedArticles));
  }
  
  
  
  // Call the function to move the archived articles
  moveArchivedArticles();