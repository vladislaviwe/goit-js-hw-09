import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    timer: document.querySelector(".timer"),
    dateTimePicker: document.querySelector("#datetime-picker"),
    fieldValue: document.querySelectorAll(".value"),
    fieldLabel: document.querySelectorAll(".label"),
    dataDays: document.querySelector("span[data-days]"),
    dataHours: document.querySelector("span[data-hours]"),
    dataMinutes: document.querySelector("span[data-minutes]"),
    dataSeconds: document.querySelector("span[data-seconds]"),
    startButton: document.querySelector("button[data-start]"),
};

let properTime = null;
let IntervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            Notiflix.Report.failure('Invalid date entered!', 'Please enter a date in the future', 'Got it');
            refs.startButton.disabled = true;
        } else {
            refs.startButton.disabled = false;
            refs.startButton.addEventListener('click', () =>
                IntervalId = setInterval(() => {
                    const deltaTime = selectedDates[0] - Date.now();
                    properTime = convertMs(deltaTime);
                    timerCountdownStart(properTime);
                    refs.startButton.disabled = true;
                    refs.dateTimePicker.disabled = true;
                    if (properTime.seconds === 0) {
                        clearInterval(IntervalId);
                    };
                }, 1000),
            );
            
            
            refs.startButton.addEventListener('click', () => 
                setTimeout(() => {
                    Notiflix.Report.info('Please pay attention!', 'You can change the date by reloading the page', 'Got it!');
                }, 3000),
            );
        };
    }
};


refs.timer.style.display = "flex";
refs.fieldValue.forEach(e => {
    e.style.cssText = 'font-size: 20px; font-weight: bold; color: tomato;';
});

refs.fieldLabel.forEach(e => {
    e.style.cssText = 'margin-right: 5px';
});
refs.startButton.disabled = true;


flatpickr(refs.dateTimePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function timerCountdownStart({ days, hours, minutes, seconds }) {
    refs.dataDays.textContent = `${days}`.padStart(2, 0);
    refs.dataHours.textContent = `${hours}`.padStart(2, 0);
    refs.dataMinutes.textContent = `${minutes}`.padStart(2, 0);
    refs.dataSeconds.textContent = `${seconds}`.padStart(2, 0);
};


