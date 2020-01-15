$('.navbar-toggler').on('click', function(){
  $(this).toggleClass('menu-open');
})

// nav to right section if navbar is fixed
// window.addEventListener("hashchange", function () {
//   window.scrollTo(window.scrollX, window.scrollY - 150);
// });
// window.addEventListener("hashchange", offsetAnchor);
// window.setTimeout(offsetAnchor, 1);

//Get the button
const mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}