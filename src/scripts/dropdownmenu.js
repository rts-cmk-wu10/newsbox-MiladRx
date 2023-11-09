// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Get all the dropdown headers
  const dropdownHeaders = document.querySelectorAll('.news-category.dropdown');

  // Attach the event listener to each header
  dropdownHeaders.forEach(dropdownHeader => {
    dropdownHeader.addEventListener('click', function() {
      // Toggle the 'expanded' class on the '.articles' container of this dropdown
      this.classList.toggle('expanded');
    });
  });
});
