import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    timer: document.querySelector(".timer"),
    dateTimePicker: document.querySelector("#datetime-picker"),
    fieldValue: document.querySelectorAll(".value"),
    fieldLabel: document.querySelectorAll(".label"),
    startButton: document.querySelector("button[data-start]"),
};

refs.timer.style.display = "flex";
refs.fieldValue.forEach(e => {
    e.style.cssText = 'font-size: 20px; font-weight: bold; color: tomato;';
});

refs.fieldLabel.forEach(e => {
    e.style.cssText = 'margin-right: 5px';
});
refs.startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      
      if (selectedDates[0] <= new Date()) {
          alert('You entered incorrect data. Please enter a date in the future!');
          refs.startButton.disabled = true;
      } else {
          refs.startButton.disabled = false;
      };
  },
};

flatpickr(refs.dateTimePicker, options);