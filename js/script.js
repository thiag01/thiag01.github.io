let itensmenu = document.querySelectorAll(".menu-list li a");
let menu = document.querySelector('.menu-list');

// left: -100%;

itensmenu.forEach((items) => {
    // 
    items.addEventListener('click', function(){
         menu.style.left = "-100%";
    })
})