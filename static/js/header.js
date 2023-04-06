// HEADER

// Menu Header

const btn = document.querySelector('#header-hamburger');
const btnClose = document.querySelector('#menu-expanded__close');
const menu = document.querySelector('#menu');
const body = document.querySelector('body');

const _handleBtnClick = () => {

  // toggle menu
  menu.classList.toggle('is-active');

  // toggle body
  body.classList.toggle('menu-is-active');
};

if (btn) {
  btn.addEventListener('click', _handleBtnClick);
}

if (btnClose) {
  btnClose.addEventListener('click', _handleBtnClick);
}

window.onscroll = function() {
  const scrollWebkit = document.documentElement.scrollTop;
  const scrollSafari = document.body.scrollTop;
  const windowHeight = window.screen.height - 36;

  const header = document.querySelector('.header');
  const headerHero = document.querySelectorAll('.header__hero');
  const headerContent = document.querySelectorAll('.header__content');
  const headerPrimaryMenuList = document.querySelector('.primary_menu_list');
  const headerSecundaryMenuList = document.querySelector('.secundary_menu_list');
  const headerPrimaryCTAButton = document.querySelector('#primary-cta-button');
  const headerSecundaryCTAButton = document.querySelector('#secundary-cta-button');

  if (scrollWebkit > windowHeight || scrollSafari > windowHeight) {
    header.classList.add("header-color__main-color");

    headerHero.forEach((el) => {
      el.classList.add("hidden");
    });

    headerContent.forEach((el) => {
      el.classList.remove("hidden");
    });

    if (headerSecundaryMenuList) {
      headerPrimaryMenuList.classList.add("hidden");
      headerSecundaryMenuList.classList.remove("hidden");
    }

    if (headerPrimaryCTAButton) {
      headerPrimaryCTAButton.classList.add("hidden");
      headerSecundaryCTAButton.classList.remove("hidden");
    }
  } else {
    header.classList.remove("header-color__main-color");

    headerHero.forEach((el) => {
      el.classList.remove("hidden");
    });

    headerContent.forEach((el) => {
      el.classList.add("hidden");
    });

    if (headerSecundaryMenuList) {
      headerPrimaryMenuList.classList.remove("hidden");
      headerSecundaryMenuList.classList.add("hidden");
    }

    if (headerPrimaryCTAButton) {
      headerPrimaryCTAButton.classList.remove("hidden");
      headerSecundaryCTAButton.classList.add("hidden");
    }
  }
};
