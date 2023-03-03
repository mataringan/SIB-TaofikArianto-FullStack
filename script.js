var nav = document.querySelector(".nav__scroll");
window.onscroll = () => {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    nav.classList.add("nav--color");
    nav.classList.remove("nav--ori");
  } else {
    nav.classList.add("nav--ori");
    nav.classList.remove("nav--color");
  }
};
