// Function to fetch data from the API and update headlines and descriptions
async function updateHeadlinesAndDescriptions() {
  try {
      const apiKey = "F7Q16NruiZVUiGVH934NpdQgCBkkIz2s";
      const apiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
      
      // Fetch data from the API
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Check if data was fetched successfully
      if (response.ok && data.results) {
          // Loop through the articles and update headlines and descriptions
          const articles = document.querySelectorAll('.news-category .headline');
          const descriptions = document.querySelectorAll('.news-category .description');
          
          for (let i = 0; i < articles.length; i++) {
              const article = articles[i];
              const description = descriptions[i];
              
              // Update headline
              article.textContent = data.results[i]?.title || "No Title Available";
              
              // Update description
              description.textContent = data.results[i]?.abstract || "No Description Available";
          }
      } else {
          console.error("Error fetching data from API");
      }
  } catch (error) {
      console.error("An error occurred:", error);
  }
}

// Call the function to update headlines and descriptions when the page loads
window.addEventListener('load', updateHeadlinesAndDescriptions);


export default (function () {
  fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s')
    .then(response => response.json())
    .then(data => {

      console.log(data);

    });
})()