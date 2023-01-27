export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template.trim();

  return newElement.firstElementChild;
};

export const getRandomInts = (quantity, max) => {
  const numbers = new Set();
  while (numbers.size < quantity) {
    numbers.add(Math.floor(Math.random() * max));
  }

  return [...numbers];
};
