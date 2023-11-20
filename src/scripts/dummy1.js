document.addEventListener('DOMContentLoaded', function() {
    // Get all the archive buttons
    const archiveButtons = document.querySelectorAll('.archive-button');

    // Function to handle the archive button click event
    function handleArchiveButtonClick(event) {
        const articleContainer = event.target.closest('.article-container');
        const articleHTML = articleContainer.outerHTML;

        // Retrieve existing archived articles from local storage
        const archivedArticles = localStorage.getItem('archivedArticles') || '';

        // Append the new article HTML to the existing archived articles, separated by a newline
        const updatedArchivedArticles = archivedArticles + articleHTML + '\n';

        // Store the updated archived articles in local storage
        localStorage.setItem('archivedArticles', updatedArchivedArticles);

        // Replace the class of the clicked archive button
        const archiveButtonIcon = event.target.querySelector('.inbox2');
        archiveButtonIcon.classList.remove('fa-inbox');
        archiveButtonIcon.classList.add('fa-trash');

        alert('Article archived successfully!');
    }

    // Add event listener to each archive button
    archiveButtons.forEach(function(button) {
        button.addEventListener('click', handleArchiveButtonClick);
    });

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