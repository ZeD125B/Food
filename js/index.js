window.addEventListener('DOMContentLoaded', () => {
  const tabsParent = document.querySelector('.tabcontainer');
  const tabs = tabsParent.querySelectorAll('.tabcontent');
  const tabHeader = document.querySelector('.tabheader__items');
  const tabHeaderItems = tabHeader.querySelectorAll('.tabheader__item');

  function hideTabsContent() {
    tabs.forEach((item) => {
      item.classList.add('hideContent');
      item.classList.remove('fade');
      tabHeaderItems.forEach((tab) => {
        tab.classList.remove('tabheader__item_active');
      });
    });
  }

  function showTabContent(i = 0) {
    tabHeaderItems[i].classList.add('tabheader__item_active');
    tabs[i].classList.remove('hideContent');
    tabs[i].classList.add('fade');
  }

  tabHeader.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('tabheader__item')) {
      tabHeaderItems.forEach((item, i) => {
        if (item === e.target) {
          hideTabsContent();
          showTabContent(i);
        }
      });
    }
  });

  hideTabsContent();
  showTabContent();

  const deadLine = '2022-09-24T20:47';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((t / (1000 * 60) % 60));
    const seconds = Math.floor((t / 1000) % 60);

    if (t > 0) {
      return {
        t, days, hours, minutes, seconds,
      };
    }
    return {
      t: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    }
    return num;
  }

  function setClock(selector) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');

    function updateClock() {
      const timeInterval = setInterval(updateClock, 1000);
      const t = getTimeRemaining(deadLine);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.t <= 0) {
        clearInterval(timeInterval);
      }
    }
    updateClock();
  }

  setClock('.timer', deadLine);

  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-modal]');

  function modalOpened() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.classList.add('overflowHidden');
    clearInterval(timerModal);
  }

  modalBtn.forEach((item) => {
    item.addEventListener('click', () => modalOpened());
  });

  function modalClosing() {
    modal.classList.add('closeItem');
    modal.classList.remove('show');
    document.body.classList.remove('overflowHidden');
  }

  modal.addEventListener('click', (e) => {
    const event = e.target;
    if (event === modal || e.target.getAttribute('data-close') == '') {
      modalClosing();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      modalClosing();
    }
  });

  const timerModal = setTimeout(modalOpened, 6000);

  function openModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.offsetHeight - 1) {
      modalOpened();
      window.removeEventListener('scroll', openModalByScroll);
    }
  }

  window.addEventListener('scroll', openModalByScroll);

  class Cards {
    constructor(src, alt, subtitle, descr, price, parent, ...classes) {
      this.src = src;
      this.alt = alt;
      this.subtitle = subtitle;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parent);
      this.classes = classes;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.includes('menu__item') === false || this.classes.length === 0) {
        this.classes = 'menu__item';
        element.classList.add(this.classes);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
        <img src="${this.src}" alt="${this.alt}">
          <h3 class="menu__item-subtitle">"${this.subtitle}"</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
        </div>
            `;
      this.parent.append(element);
    }
  }

  const getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  };

  axios.get('http://localhost:3000/menu')
    .then((data) => {
      data.data.forEach(({
        img, altImg, title, descr, price,
      }) => {
        new Cards(img, altImg, title, descr, price, '.menu .container').render();
      });
    });

  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо, мы скоро с вами свяжемся',
    error: 'Что-то пошло не так',
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: data,
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.classList.add('spinner');
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      postData('http://localhost:3000/requests', json)
        .then((data) => {
          showThanksModal(message.success);
          statusMessage.remove();
          form.reset();
        }).catch(() => {
          showThanksModal(message.error);
        }).finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hideContent');
    modalOpened();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close data-close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hideContent');
      modalClosing();
    }, 4000);
  }

  const slides = document.querySelectorAll('.offer__slide');
  const slider = document.querySelector('.offer__slider');
  const nextSlide = document.querySelector('.offer__slider-next');
  const prevSlide = document.querySelector('.offer__slider-prev');
  const currentSlide = document.querySelector('#current');
  const totalSlide = document.querySelector('#total');
  const slidesWrapper = document.querySelector('.offer__slider-wrapper');
  const slidesField = document.querySelector('.offer__slider-inner');
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
    slide.style.width = width;
  });

  function removeWords(word) {
    return +word.replace(/\D+/g, '');
  }

  nextSlide.addEventListener('click', () => {
    if (offset == removeWords(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += removeWords(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    getCarouselNumber();
    currentCarouselDot();
  });

  prevSlide.addEventListener('click', () => {
    if (offset == 0) {
      offset = removeWords(width) * (slides.length - 1);
    } else {
      offset -= removeWords(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex === 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    getCarouselNumber();
    currentCarouselDot();
  });

  const indicators = document.createElement('ol');

  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    indicators.append(dot);
    if (i === 0) {
      dot.classList.add('dot-active');
    }
  }

  const carouselIndicators = document.querySelector('.carousel-indicators');
  const dots = carouselIndicators.querySelectorAll('.dot');

  function currentCarouselDot() {
    dots.forEach((dot) => {
      dot.classList.remove('dot-active');
      if (+dot.getAttribute('data-slide-to') === slideIndex) {
        dot.classList.add('dot-active');
      }
    });
  }

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

  const result = document.querySelector('.calculating__result span');

  let sex;
  let height;
  let weight;
  let age;
  let ratio;

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    localStorage.setItem('sex', 'female');
    sex = 'female';
  }

  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    localStorage.setItem('ratio', 1.375);
    ratio = 1.375;
  }

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '______';
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * ratio));
    } else {
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * ratio));
    }
  }

  calcTotal();

  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }

        elements.forEach((elem) => {
          elem.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  function setActiveElements(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.classList.remove(activeClass);

      if (localStorage.getItem('sex') === elem.getAttribute('id')) {
        elem.classList.add(activeClass);
      }

      if (localStorage.getItem('ratio') === elem.getAttribute('data-ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }

  setActiveElements('#gender div', 'calculating__choose-item_active');
  setActiveElements('.calculating__choose_big div', 'calculating__choose-item_active');

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style.border = '2px solid red';
      } else {
        input.style.border = 'none';
      }
      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
      }
      calcTotal();
    });
  }

  getDynamicInformation('#age');
  getDynamicInformation('#weight');
  getDynamicInformation('#height');

  getStaticInformation('#gender div', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
});
