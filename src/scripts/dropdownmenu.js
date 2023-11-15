document.addEventListener('DOMContentLoaded', function () {
  const dropdownHeaders = document.querySelectorAll('.news-category.dropdown');

  dropdownHeaders.forEach(dropdownHeader => {
    dropdownHeader.addEventListener('click', function (event) {
      // Prevents the event from affecting parent elements
      event.stopPropagation();

      // Toggle the 'expanded' class on the clicked dropdown
      this.classList.toggle('expanded');

      // Optional: Close other dropdowns when one is opened
      dropdownHeaders.forEach(otherHeader => {
        if (otherHeader !== this) {
          otherHeader.classList.remove('expanded');
        }
      });
    });
  });

  // Optional: Clicking anywhere outside of the dropdowns will close them
  document.addEventListener('click', function () {
    dropdownHeaders.forEach(dropdownHeader => {
      dropdownHeader.classList.remove('expanded');
    });
  });

  // New: Ensure that elements inside the articles are clickable
  document.querySelectorAll('.news-category.dropdown .articles *').forEach(element => {
    element.addEventListener('click', function (event) {
      // This allows interaction with the element
      console.log('Element clicked:', this);

      // Stop the event from closing the dropdown
      event.stopPropagation();
    });
  });
});
