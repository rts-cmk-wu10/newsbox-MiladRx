document.addEventListener('DOMContentLoaded', function() {
    // Retrieve archived articles from local storage
    const archivedArticles = localStorage.getItem('archivedArticles');

    // Check if there are any archived articles
    if (archivedArticles) {
        // Get the archived articles container
        const archivedArticlesContainer = document.getElementById('archived-articles-container');

        // Set the innerHTML of the container to the archived articles
        archivedArticlesContainer.innerHTML = archivedArticles;
    }
});