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

// Ketika klik diluar elemen

const mb = document.querySelector("#menu-bar");

document.addEventListener("click", function (e) {
  if (!mb.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }
});
