export default (function () {

    document.addEventListener('DOMContentLoaded', function () {
        const travelHeader = document.querySelector('.travel h2');
        const dropdownIconBtn = document.querySelector('.travel .dropdown-icon-btn');

        function toggleArticles() {
            const travelContainer = travelHeader.parentElement;
            if (travelContainer.classList.contains('expanded')) {
                travelContainer.classList.remove('expanded');
            } else {
                travelContainer.classList.add('expanded');
            }
        }

        travelHeader.addEventListener('click', toggleArticles);
        dropdownIconBtn.addEventListener('click', toggleArticles);
    });

})()