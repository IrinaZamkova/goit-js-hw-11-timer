import './styles.css';
const refs = {
  daysRef: document.querySelector('span[data-value="days"]'),
  hoursRef: document.querySelector('span[data-value="hours"]'),
  minutesRef: document.querySelector('span[data-value="mins"]'),
  secondsRef: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  getTime() {
    const time = Date.parse(this.targetDate) - Date.now();
    timerUpdate(time);
    this.timerId = setInterval(() => {
    this.getTime()
      
    }, 1000);
   

  }
}
function timerUpdate(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.daysRef.textContent = `${days}`;
  refs.hoursRef.textContent = `${hours}`;
  refs.minutesRef.textContent = `${mins}`;
  refs.secondsRef.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const mySonBirthday = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 29, 2020'),
});
mySonBirthday.getTime();
