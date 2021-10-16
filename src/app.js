const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
console.log(navList);
console.log(hamburgerButton);

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);
