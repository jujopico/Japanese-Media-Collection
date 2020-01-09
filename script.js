$('.navbar-toggler').on('click', function(){
  $(this).toggleClass('menu-open');
})

window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 230);
});