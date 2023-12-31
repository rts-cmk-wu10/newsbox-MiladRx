// ARKIVERE virker ikke når jeg prøver på Netlify. men virker når jeg prøver på npm run build watch

var articleContainers = document.querySelectorAll('.article-container');
var maxDragDistance = -110; // Maximum trække distance for a swipe
var startX, currentX;
var isDragging = false;

articleContainers.forEach(function(container) {
  var article = container.querySelector('article');
  var archiveButton = container.querySelector('.archive-button');
  
  article.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  article.addEventListener('touchmove', function(e) {
    if (isDragging) {
      currentX = e.touches[0].clientX;
      var distance = currentX - startX;
      if (distance <= 0 && distance > maxDragDistance) {
        this.style.transform = `translateX(${distance}px)`;
        if (archiveButton) {
          archiveButton.style.opacity = (Math.abs(distance) / Math.abs(maxDragDistance)).toString();
        }
      }
    }
  });

  article.addEventListener('touchend', function(e) {
    isDragging = false;
    var totalDragDistance = currentX - startX;
    if (totalDragDistance <= maxDragDistance) {
      this.style.transform = `translateX(${maxDragDistance}px)`;
      if (archiveButton) {
        archiveButton.style.opacity = '1';
      }
    } else {
      this.style.transform = '';
      if (archiveButton) {
        archiveButton.style.opacity = '1';
      }
    }
  });
});