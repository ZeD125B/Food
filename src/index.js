/* eslint-disable import/extensions */
import tabs from './tabs.js';
import timer from './timer.js';
import modal from './modal.js';
import cards from './cards.js';
import thanksModal from './thanksModal.js';
import slider from './slider.js';
import calc from './calc.js';
import './style/style.css';

window.addEventListener('DOMContentLoaded', () => {
  tabs('.tabcontent', '.tabheader__items', '.tabheader__item', 'tabheader__item_active');
  timer('.timer', '2022-10-24T20:47');
  modal('[data-modal]', '.modal', 6000);
  thanksModal('.modal');
  cards();
  slider({
    slidesSelector: '.offer__slide',
    sliderSelector: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    current: '#current',
    total: '#total',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
    carouselIndicatorsSelector: '.carousel-indicators',
    dotsSelector: '.dot',
  });
  calc();
});
