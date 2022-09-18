let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}

var modal = document.getElementById("cartModal");

// Get the button that opens the modal
var btn = document.getElementById("myCart");

// Get the <span> element that closes the modal
var span = document.getElementById("close");
const body = document.querySelector("body");
// When the user clicks on the button, open the modal
btn.onclick = function() {
  body.style.overflow = "hidden";
  modal.style.display = "block";
 
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  body.style.overflow = "auto";
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    body.style.overflow = "auto";
    modal.style.display = "none";
  }
  
}

