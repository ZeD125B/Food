export default function getTimer(timerSelector, deadLine) {
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor(((t / (1000 * 60 * 60)) % 24));
    const minutes = Math.floor(((t / (1000 * 60)) % 60));
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

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    let timeInterval;

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.t <= 0) {
        clearInterval(timeInterval);
      }
    }
    timeInterval = setInterval(updateClock, 1000);
    updateClock();
  }

  setClock(timerSelector, deadLine);
}
