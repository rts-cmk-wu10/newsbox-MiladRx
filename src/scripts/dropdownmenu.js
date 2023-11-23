document.addEventListener('DOMContentLoaded', function () {
  const dropdownHeaders = document.querySelectorAll('.news-category.dropdown');

  dropdownHeaders.forEach(dropdownHeader => {
    const dropdownContent = dropdownHeader.querySelector('.dropdown-content');
    const dropdownArrow = dropdownHeader.querySelector('.box');

    dropdownArrow.addEventListener('click', function (event) {
      
      event.stopPropagation();

      
      dropdownHeader.classList.toggle('expanded');

     
      dropdownContent.classList.toggle('hidden');
    });

    
    document.addEventListener('click', function (event) {
      if (!dropdownHeader.contains(event.target)) {
        dropdownHeader.classList.remove('expanded');
        dropdownContent.classList.add('hidden');
      }
    });
  });
});