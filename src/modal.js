function modalOpened(modalSelector, timer) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  modal.classList.add('wasOpen');
  document.body.classList.add('overflowHidden');
  if (timer) {
    clearInterval(timer);
  }
}

function modalClosing(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('closeItem');
  modal.classList.remove('show');
  document.body.classList.remove('overflowHidden');
}

export default function getModal(triggerSelector, modalSelector, t) {
  const modal = document.querySelector(modalSelector);
  const modalBtn = document.querySelectorAll(triggerSelector);
  const timerModal = setTimeout(() => modalOpened(modalSelector), t);

  modalBtn.forEach((item) => {
    item.addEventListener('click', () => modalOpened(modalSelector, timerModal));
  });

  modal.addEventListener('click', (e) => {
    const event = e.target;
    if (event === modal || e.target.getAttribute('data-close') === '') {
      modalClosing(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      modalClosing(modalSelector);
    }
  });

  function openModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.offsetHeight - 1) {
      modalOpened(modalSelector, timerModal);
      clearInterval(timerModal);
      window.removeEventListener('scroll', openModalByScroll);
    }
  }

  window.addEventListener('scroll', openModalByScroll);
}

export { modalOpened, modalClosing };
