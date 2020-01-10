$('.navbar-toggler').on('click', function(){
  $(this).toggleClass('menu-open');
})

window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 150);
});
window.addEventListener("hashchange", offsetAnchor);
window.setTimeout(offsetAnchor, 1);