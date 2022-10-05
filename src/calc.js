export default function getCalc() {
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

        elements.forEach((element) => {
          element.classList.remove(activeClass);
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
        default:
      }
      calcTotal();
    });
  }

  getDynamicInformation('#age');
  getDynamicInformation('#weight');
  getDynamicInformation('#height');

  getStaticInformation('#gender div', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
}
