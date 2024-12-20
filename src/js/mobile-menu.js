const menuBtn = document.querySelector('.header-mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-backdrop');
const mobileMenuCloseBtn = document.querySelector('.mobile-close-btn');

menuBtn.addEventListener('click', onMenuBtnClick);
mobileMenuCloseBtn.addEventListener('click', onMobileMenuCloseBtnClick);

function onMenuBtnClick() {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function onMobileMenuCloseBtnClick() {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}
