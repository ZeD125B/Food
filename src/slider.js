export default function getSlider({
  slidesSelector, sliderSelector, nextArrow, prevArrow, current, total, wrapper, field, carouselIndicatorsSelector, dotsSelector,
}) {
  const slides = document.querySelectorAll(slidesSelector);
  const slider = document.querySelector(sliderSelector);
  const nextSlide = document.querySelector(nextArrow);
  const prevSlide = document.querySelector(prevArrow);
  const currentSlide = document.querySelector(current);
  const totalSlide = document.querySelector(total);
  const slidesWrapper = document.querySelector(wrapper);
  const slidesField = document.querySelector(field);
  const { width } = window.getComputedStyle(slidesWrapper);

  let slideIndex = 1;
  let offset = 0;

  function getCarouselNumber() {
    if (slides.length < 10) {
      totalSlide.textContent = `0${slides.length}`;
      currentSlide.textContent = `0${slideIndex}`;
    } else {
      totalSlide.textContent = slides.length;
      currentSlide.textContent = slideIndex;
    }
  }

  getCarouselNumber();

  slidesField.style.width = `${100 * slides.length}%`;

  slides.forEach((slide) => {
    const currentItem = slide;
    currentItem.style.width = width;
  });

  function removeWords(word) {
    return +word.replace(/\D+/g, '');
  }

  const indicators = document.createElement('ol');

  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  for (let i = 0; i < slides.length; i += 1) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    indicators.append(dot);
    if (i === 0) {
      dot.classList.add('dot-active');
    }
  }

  const carouselIndicators = document.querySelector(carouselIndicatorsSelector);
  const dots = carouselIndicators.querySelectorAll(dotsSelector);

  function currentCarouselDot() {
    dots.forEach((dot) => {
      dot.classList.remove('dot-active');
      if (+dot.getAttribute('data-slide-to') === slideIndex) {
        dot.classList.add('dot-active');
      }
    });
  }

  nextSlide.addEventListener('click', () => {
    if (offset === removeWords(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += removeWords(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex === slides.length) {
      slideIndex = 1;
    } else {
      slideIndex += 1;
    }

    getCarouselNumber();
    currentCarouselDot();
  });

  prevSlide.addEventListener('click', () => {
    if (offset === 0) {
      offset = removeWords(width) * (slides.length - 1);
    } else {
      offset -= removeWords(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex === 1) {
      slideIndex = slides.length;
    } else {
      slideIndex -= 1;
    }

    getCarouselNumber();
    currentCarouselDot();
  });

  carouselIndicators.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('dot')) {
      offset = +width.replace(/\D+/g, '') * (+target.getAttribute('data-slide-to') - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      slideIndex = +target.getAttribute('data-slide-to');
      currentCarouselDot();
      getCarouselNumber();
    }
  });
}
