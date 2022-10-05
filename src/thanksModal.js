/* eslint-disable import/extensions */
import { modalOpened, modalClosing } from './modal.js';
import postData from './service/service.js';

export default function getThanksModal(modalSelector) {
  const forms = document.querySelectorAll('form');

  const message = {
    loading: '../src/assets/img/form/spinner.svg',
    success: 'Спасибо, мы скоро с вами свяжемся',
    error: 'Что-то пошло не так',
  };

  function showThanksModal(report) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hideContent');
    modalOpened(modalSelector);

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${report}</div>
            </div>
        `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hideContent');
      modalClosing(modalSelector);
    }, 4000);
  }

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
        .then(() => {
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

  forms.forEach((item) => {
    bindPostData(item);
  });
}
