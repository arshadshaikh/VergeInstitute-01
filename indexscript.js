let menuOpen = document.querySelector(".menu")
let menuClose = document.querySelector(".close_menu_btn");
let navbar2 = document.querySelector(".navbar2_container");

menuOpen.addEventListener('click',() => { // navbar open function
   navbar2.style.width = "100%";
   menuOpen.style.display = "none";
})

menuClose.addEventListener('click',() => {// navbar close function
   navbar2.style.width = "0%";
   menuOpen.style.display = "inline-block";
})

// slide show

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
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}