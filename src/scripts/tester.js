document.addEventListener('DOMContentLoaded', function() {
    const darkmodeBtn = document.querySelector('.darkmodebtn');
    const container = document.querySelector('.flexButton');
  
    darkmodeBtn.addEventListener('click', () => {
      document.body.classList.toggle('darkmode');
      container.classList.toggle('darkmode');
      darkmodeBtn.textContent = document.body.classList.contains('darkmode') ? 'TOGGLE LIGHT MODE' : 'TOGGLE DARK MODE';
    });
  });