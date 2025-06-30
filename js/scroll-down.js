document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('scroll-down-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    });
  }
});