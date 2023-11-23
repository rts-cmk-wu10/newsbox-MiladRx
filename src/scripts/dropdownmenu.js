document.addEventListener('DOMContentLoaded', function () {
  const dropdownHeaders = document.querySelectorAll('.news-category.dropdown');

  dropdownHeaders.forEach(dropdownHeader => {
    const dropdownContent = dropdownHeader.querySelector('.dropdown-content');
    const dropdownArrow = dropdownHeader.querySelector('.box');

    dropdownArrow.addEventListener('click', function (event) {
      // Prevents the event from affecting parent elements
      event.stopPropagation();

      // Toggle the 'expanded' class on the dropdown header
      dropdownHeader.classList.toggle('expanded');

      // Toggle the 'hidden' class on the dropdown content
      dropdownContent.classList.toggle('hidden');
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
      if (!dropdownHeader.contains(event.target)) {
        dropdownHeader.classList.remove('expanded');
        dropdownContent.classList.add('hidden');
      }
    });
  });
});