import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submitButton: document.querySelector('.form button'),
};

let timeout = null;

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(evt) {
    evt.preventDefault();

    const amount = refs.amount.value;
    const delay = refs.firstDelay.value;

  for (let i = 1; i <= amount; i += 1) {
      const position = i;
      const step = refs.delayStep.value;
      const counterStepDelay = (position - 1) * step; 
      timeout = setTimeout(() => {
          createPromise(position, delay)
          .then(({ position, delay }) => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${counterStepDelay + Number(delay)}ms`);
          })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${counterStepDelay + Number(delay)}ms`);
          });
      }, counterStepDelay);
  };
  evt.target.reset();
};
  
function createPromise(position, delay, step) {
  const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({position, delay});
        } else {
          reject({position, delay});
        };
      }, delay);
    });
};


 
