
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();

      // 1. switch tabs
      document.querySelectorAll('main section')
        .forEach(sec => sec.classList.remove('active'));
      document.getElementById(tab.dataset.tab)
        .classList.add('active');
    });
  });
});


