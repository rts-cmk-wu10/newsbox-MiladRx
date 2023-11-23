const darkModeButton = document.querySelector('.darkmodebtn');
const darkModeState = localStorage.getItem('darkModeState');

if (darkModeState === 'enabled') {
  document.body.classList.add('dark-mode');
}

darkModeButton.addEventListener('click', function () {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkModeState', 'disabled');
  } else {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkModeState', 'enabled');
  }
});