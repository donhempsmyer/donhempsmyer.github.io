const root = document.body;
const themeToggle = document.getElementById('theme-toggle');
const year = document.getElementById('year');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
  root.classList.add('light');
}

themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('portfolio-theme', root.classList.contains('light') ? 'light' : 'dark');
});

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
  const dots = Array.from(carousel.querySelectorAll('[data-carousel-dot]'));
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');

  if (!slides.length) {
    return;
  }

  let currentIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (currentIndex < 0) {
    currentIndex = 0;
  }

  const updateCarousel = (nextIndex) => {
    currentIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === currentIndex);
    });

    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  };

  prevButton?.addEventListener('click', () => {
    updateCarousel(currentIndex - 1);
  });

  nextButton?.addEventListener('click', () => {
    updateCarousel(currentIndex + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateCarousel(index);
    });
  });

  updateCarousel(currentIndex);
});
