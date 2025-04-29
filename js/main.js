const menuIcon = document.getElementById("menu-icon");
const navItems = document.getElementById("nav-items");

menuIcon.addEventListener("click", () => {
  navItems.classList.toggle("show");
  if (navItems.classList.contains("show")) {
    menuIcon.src = "./img/icon/cross.svg";
  } else {
    menuIcon.src = "./img/icon/menu.svg";
  }
});

window.addEventListener("scroll", () => {
  navItems.classList.remove("show");
  menuIcon.src = "./img/icon/menu.svg";
});
