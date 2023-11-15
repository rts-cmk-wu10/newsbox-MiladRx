document.addEventListener('DOMContentLoaded', function() {
    var articleContainers = document.querySelectorAll('.article-container');
    var maxDragDistance = -110; // Maximum left drag distance
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
                    archiveButton.style.opacity = (Math.abs(distance) / Math.abs(maxDragDistance)).toString();
                }
            }
        });

        article.addEventListener('touchend', function(e) {
            isDragging = false;
            var totalDragDistance = currentX - startX;
            if (totalDragDistance <= maxDragDistance) {
                this.style.transform = `translateX(${maxDragDistance}px)`;
                archiveButton.style.opacity = '1';
            } else {
                this.style.transform = '';
                archiveButton.style.opacity = '1';
            }
        });
    });
});
