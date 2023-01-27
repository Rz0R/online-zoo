import { creteCardTemplate } from './create-card.js';
import { createElement, getRandomInts } from '../utils.js';
import { cardsData } from './cards-data.js';

const createSlideTemplate = (cards) => `
	<div class="slider-pets__slide">${cards}</div>
`;

const createSlide = () => {
  const numbers = getRandomInts(6, cardsData.length);

  let cards = '';

  for (const number of numbers) {
    const { name, description, image, icon, iconName } = cardsData[number];
    cards += creteCardTemplate(name, description, image, icon, iconName);
  }

  return createElement(createSlideTemplate(cards));
};

export { createSlide };
