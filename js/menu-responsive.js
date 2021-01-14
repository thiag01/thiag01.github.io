function openMenu () {
  let menu = document.getElementById('menu-hamburguer');
  menu.classList.toggle('fechar');
}

$(document).mousemove(function(e) {
  setTimeout(function() {
  $('.big-circle').css({
      left: e.pageX,
      top: e.pageY
      });
  }, 60);
})