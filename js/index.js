window.addEventListener('DOMContentLoaded', () => {

    const tabsParent = document.querySelector('.tabcontainer'),
        tabs = tabsParent.querySelectorAll('.tabcontent'),
        tabHeader = document.querySelector('.tabheader__items'),
        tabHeaderItems = tabHeader.querySelectorAll('.tabheader__item');

    function hideTabsContent() {
        tabs.forEach(item => {
            item.classList.add('hideContent');
            item.classList.remove('fade');
            tabHeaderItems.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        });
    }

    function showTabContent(i = 0) {
        tabHeaderItems[i].classList.add('tabheader__item_active');
        tabs[i].classList.remove('hideContent');
        tabs[i].classList.add('fade');
    }

    tabHeader.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
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

    const deadLine = '2022-07-24T20:47';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / (1000 * 60) % 60)),
            seconds = Math.floor((t / 1000) % 60);

        if (t > 0) {
            return { t, days, hours, minutes, seconds };
        } else {
            return {
                't': 0,
                'days': 0,
                'hours': 0,
                'minutes': 0,
                'seconds': 0,
            };
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(deadLine);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.t <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);

    const modal = document.querySelector('.modal'),
        modalBtn = document.querySelectorAll('[data-modal]');


    function modalOpened() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.classList.add('overflowHidden');
        clearInterval(timerModal);
    }

    modalBtn.forEach(item => {
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
                this.classes.forEach(className => element.classList.add(className));
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
        .then(data => {
            data.data.forEach(({ img, altImg, title, descr, price }) => {
                new Cards(img, altImg, title, descr, price, '.menu .container').render();
            });
        });

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, мы скоро с вами свяжемся',
        error: 'Что-то пошло не так'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
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
                .then(data => {
                    console.log(data);
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

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

    const slides = document.querySelectorAll('.offer__slide');
    const nextSlide = document.querySelector('.offer__slider-next');
    const prevSlide = document.querySelector('.offer__slider-prev');
    const currentSlide = document.querySelector('#current');
    const totalSlide = document.querySelector('#total');

    let slideIndex = 1;

    if (slides.length < 10) {
        totalSlide.textContent = `
            0${slides.length}`;
    } else {
        totalSlide.textContent = slides.length;
    }

    function showSlides(n) {
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        if (slideIndex < 1) {
            slideIndex = slides.length;
        }

        if (slideIndex < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.cssText = slideIndex;
        }

        slides.forEach(item => item.classList.add('hide'));
        slides[slideIndex - 1].classList.remove('hide');
    }

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    nextSlide.addEventListener('click', () => {
        changeSlide(1);
    });

    prevSlide.addEventListener('click', () => {
        changeSlide(-1);
    });

    showSlides(slideIndex);
});
