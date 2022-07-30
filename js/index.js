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
        return {t, days, hours, minutes, seconds};
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
      modalBtn= document.querySelectorAll('[data-modal]'),
      modalClose = document.querySelector('[data-close]');

function modalOpened() {
    modal.classList.add('showItem');
    modal.classList.remove('closeItem');
    document.body.classList.add('overflowHidden');
    clearInterval(timerModal);
}

modalBtn.forEach(item => {
    item.addEventListener('click', () => modalOpened());
});

function modalClosing() {
    modal.classList.add('closeItem');
    modal.classList.remove('showItem');
    document.body.classList.remove('overflowHidden');  
}

modalClose.addEventListener('click', () => {
    modalClosing();
});

modal.addEventListener('click', (e) => {
    const event = e.target;
    if (event === modal) {
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

new Cards(
    'img/tabs/vegy.jpg',
    'vegy',
    'Меню "Фитнес',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    '229',
    '.menu__field .container',
    'big',
    'menu__item'
    

).render();

new Cards(
    'img/tabs/elite.jpg',
    'elite',
    'Премиум',
    'Меню "премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    '550',
    '.menu__field .container',
    'menu__item'
).render();

new Cards(
    'img/tabs/post.jpg',
    'post',
    'Меню "Постное',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    '430',
    '.menu__field .container',
    'menu__item'
).render();


