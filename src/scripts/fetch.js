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



