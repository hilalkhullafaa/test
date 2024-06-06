// Background Navbar
const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const positionWindow = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", positionWindow);
});

// Toggle Class Active
const navList = document.querySelector(".navigation");

// Ketika Menu-bar di klik
document.querySelector("#menu-bar").onclick = (e) => {
  navList.classList.toggle("active");
  e.preventDefault(e);
};

// Ketika klik diluar elemen menu-bar
const mb = document.querySelector("#menu-bar");

document.addEventListener("click", function (e) {
  if (!mb.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }
});

// Toggle Class Active box popup about
const popupAbout = document.querySelector(".popup-about");

document.querySelector(".btn-about").onclick = (e) => {
  popupAbout.classList.toggle("active");
  e.preventDefault(e);

  document.querySelector("#close-about").onclick = (e) => {
    popupAbout.classList.remove("active");
  };
};
