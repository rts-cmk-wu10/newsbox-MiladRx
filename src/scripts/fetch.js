
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



