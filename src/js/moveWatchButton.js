const watchBtn = document.querySelector('[data-watch-btn]');
const mediaQueryTablet = window.matchMedia('(max-width: 991.98px)');
const mediaQueryMobile = window.matchMedia('(max-width: 635px)');

const moveWatchBtn = () => {
  if (mediaQueryMobile.matches) {
    document.querySelector('.backstage__container').prepend(watchBtn);
  } else if (mediaQueryTablet.matches) {
    document.querySelector('.watch__left').appendChild(watchBtn);
  } else {
    document.querySelector('.watch__right').appendChild(watchBtn);
  }
};

const moveWatchBtnInit = () => {
  if (watchBtn) {
    moveWatchBtn(mediaQueryTablet);
    mediaQueryTablet.addEventListener('change', moveWatchBtn);
    mediaQueryMobile.addEventListener('change', moveWatchBtn);
  }
};

export { moveWatchBtnInit };
