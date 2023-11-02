export default (function() {
fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s')
  .then(response => response.json())
  .then(data => {
   
    console.log(data);
  });
})()