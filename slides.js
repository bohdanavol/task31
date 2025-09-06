document.addEventListener('DOMContentLoaded', () => {
  const slideshows = document.querySelectorAll('.slideshow');
  slideshows.forEach(startSlideshow);
});

function startSlideshow(container) {
  const slides = container.querySelectorAll('img');
  if (slides.length < 2) return;

  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 3000);
}