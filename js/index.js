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


