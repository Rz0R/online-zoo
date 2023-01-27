const bodyLockToggle = () => {
  document.documentElement.classList.toggle('lock');
};

const toggleMenu = () => {
  bodyLockToggle();
  document.documentElement.classList.toggle('menu-open');
};

const closeMenu = () => {
  if (document.documentElement.classList.contains('menu-open')) {
    document.documentElement.classList.remove('lock', 'menu-open');
  }
};

const menuHandler = (evt) => {
  if (evt.target.closest('.icon-menu')) {
    toggleMenu();
  } else if (evt.target.closest('.menu__link')) {
    closeMenu();
  } else if (evt.target.closest('.menu__overlay')) {
    closeMenu();
  }
};

const menuInit = () => {
  const menu = document.querySelector('.menu');

  if (menu) {
    menu.addEventListener('click', menuHandler);
  }
};

export { menuInit };
