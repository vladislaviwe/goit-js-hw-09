const startButtonRef = document.querySelector('button[data-start]');
const stopButtonRef = document.querySelector('button[data-stop]');

let randomBodyColorIntervalId = "";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startButtonRef.addEventListener('click', () => {
    randomBodyColorIntervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startButtonRef.disabled = true;
});

stopButtonRef.addEventListener('click', () => {
    clearInterval(randomBodyColorIntervalId);
    startButtonRef.disabled = false;
});
