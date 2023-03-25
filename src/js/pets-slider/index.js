import { createSlide } from './create-slide.js';

const sliderLine = document.querySelector('.slider-pets__slides');
const sliderWrapper = document.querySelector('.slider-pets__wrapper');
const sliderNextButton = document.querySelector('.slider-pets__arrow--right');
const sliderPrevButton = document.querySelector('.slider-pets__arrow--left');

let slideIndex = 1;
let isSlideMoving = false;
let width = 1160;

const createSlideWithStyles = () => {
  const slide = createSlide();
  slide.style.flexBasis = width + 'px';
  slide.style.height = 'auto';

  return slide;
};

const shiftSlides = () => {
  sliderLine.style.transition = `transform 0.5s ease`;
  sliderLine.style.transform = `translate(-${slideIndex * width}px)`;
};

const shiftHadler = (direction) => {
  if (isSlideMoving) return;

  isSlideMoving = true;
  slideIndex += direction;

  shiftSlides();
};

const updateSlides = (evt) => {
  if (!evt.target.classList.contains('slider-pets__slides')) return;

  let slides = document.querySelectorAll('.slider-pets__slide');

  sliderLine.style.transition = 'none';

  if (slideIndex === 2) {
    slides[0].remove();
    slides[1].remove();

    sliderLine.append(createSlideWithStyles());
    sliderLine.prepend(createSlideWithStyles());
  }

  if (slideIndex === 0) {
    slides[2].remove();
    slides[1].remove();

    sliderLine.prepend(createSlideWithStyles());
    sliderLine.append(createSlideWithStyles());
  }

  slideIndex = 1;
  sliderLine.style.transform = `translate(-${slideIndex * width}px)`;

  isSlideMoving = false;
};

const resizeSlider = () => {
  const slides = document.querySelectorAll('.slider-pets__slide');

  width = sliderWrapper.offsetWidth;

  for (const slide of slides) {
    slide.style.flexBasis = width + 'px';
    slide.style.height = 'auto';
  }

  sliderLine.style.transform = `translate(-${slideIndex * width}px)`;
};

const petsSliderInit = () => {
  if (!sliderWrapper) return;

  for (let i = 0; i < 3; i++) {
    sliderLine.append(createSlideWithStyles());
  }

  resizeSlider();

  window.addEventListener('resize', resizeSlider);

  sliderLine.addEventListener('transitionend', updateSlides);

  sliderNextButton.addEventListener('click', () => {
    shiftHadler(1);
  });

  sliderPrevButton.addEventListener('click', () => {
    shiftHadler(-1);
  });
};

export default petsSliderInit;
