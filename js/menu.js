//Efeito revela e esconde do menu
const toggle = document.querySelector(".button-responsive");
const topNav = document.querySelector(".container-links");
toggle.addEventListener('click', function() {
  topNav.classList.toggle("active");
}, false);