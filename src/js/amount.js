const amountBar = document.querySelector('.pr-bar');
const amountInput = document.querySelector('.donate__input');

let value = 100;
let minValue = 0;
let maxValue = 9999;

const setAmountBar = () => {
  if (amountBar.querySelector(`input[value="${value}"]`)) {
    amountBar.querySelector(`input[value="${value}"]`).checked = true;
  } else if (amountBar.querySelector('input[type="radio"]:checked')) {
    amountBar.querySelector('input[type="radio"]:checked').checked = false;
  }
};

const amountBarHandler = (evt) => {
  value = Number(evt.target.value);
  amountInput.value = value;
};

const amountInputHandler = (evt) => {
  const inputEl = evt.currentTarget;
  const inputValue = Number(inputEl.value);

  inputEl.value = Math.abs(inputEl.value);

  if (inputEl.value.length > 4) {
    inputEl.value = inputEl.value.slice(0, 4);
  }

  if (inputValue < minValue) {
    inputEl.value = minValue;
    value = minValue;
  } else if (inputValue > maxValue) {
    inputEl.value = maxValue;
    value = maxValue;
  } else {
    value = inputValue;
  }

  setAmountBar();
};

const amountInit = () => {
  if (!amountBar) return;

  minValue = 0; // Number(amountInput.min);
  maxValue = Number(amountInput.max);

  amountBar.addEventListener('change', amountBarHandler);
  amountInput.addEventListener('input', amountInputHandler);
};

export { amountInit };
