const slider = document.querySelector('.testimonials__cards');
const sliderLine = document.querySelector('.testimonials__wrapper-cards');
const cards = document.querySelectorAll('.card-testimonials');
const rangeInput = document.querySelector('.testimonials__input');

const popupWrapper = document.querySelector('.popup-testimonials__wrapper');

const mediaQuerySmallDesktop = window.matchMedia('(max-width: 1250px)');
const mediaQueryTablet = window.matchMedia('(max-width: 991.98px)');

let numberOfVisibleCards = 4;
let gapBetweenCards = 30;
let width = 1160;
let oneCardWidth = 267.5;
let inputRangeValue = 0;

const closePopup = () => {
  document.documentElement.classList.remove('popup-active', 'lock');
};

const popupHandler = (evt) => {
  if (evt.target.closest('.popup-testimonials__overlay')) {
    closePopup();
    return;
  }

  if (evt.target.closest('.popup-testimonials__close-btn')) {
    closePopup();
    return;
  }

  if (!mediaQueryTablet.matches) return;

  const card = evt.target.closest('.card-testimonials');

  if (!card) return;

  if (popupWrapper.querySelector('.card-testimonials')) {
    popupWrapper.querySelector('.card-testimonials').remove();
  }

  popupWrapper.append(card.cloneNode(true));

  document.documentElement.classList.add('popup-active', 'lock');
};

const shiftSlider = (value) => {
  sliderLine.style.transform = `translate(-${
    value * (oneCardWidth + gapBetweenCards)
  }px)`;
};

const resizeSlider = () => {
  if (mediaQueryTablet.matches) {
    sliderLine.style.transition = 'none';
    for (const card of cards) {
      card.style.flexBasis = null;
    }

    sliderLine.style.transform = null;

    return;
  }

  if (mediaQuerySmallDesktop.matches) {
    numberOfVisibleCards = 3;
    rangeInput.max = +cards.length - numberOfVisibleCards;
  } else {
    numberOfVisibleCards = 4;
    rangeInput.max = +cards.length - numberOfVisibleCards;
    if (+rangeInput.value + numberOfVisibleCards >= +cards.length) {
      inputRangeValue = +cards.length - numberOfVisibleCards;
    }
  }

  sliderLine.style.transition = null;

  width = slider.offsetWidth;
  oneCardWidth =
    (width - (numberOfVisibleCards - 1) * gapBetweenCards) /
    numberOfVisibleCards;

  for (const card of cards) {
    card.style.flexBasis = oneCardWidth + 'px';
  }

  sliderLine.style.transform = `translate(-${
    inputRangeValue * (oneCardWidth + gapBetweenCards)
  }px)`;
};

const testimonialsSliderInit = () => {
  if (!slider) return;

  resizeSlider();
  window.addEventListener('resize', resizeSlider);

  rangeInput.addEventListener('input', (evt) => {
    inputRangeValue = +evt.target.value;
    shiftSlider(evt.target.value);
  });

  slider.addEventListener('click', popupHandler);
};

export default testimonialsSliderInit;
