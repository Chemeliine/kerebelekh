// На шапке сайте
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


// Отзывы
const sliderTrack = document.querySelector('.rev-slider-track');
const prevButton = document.querySelector('.rev-prev');
const nextButton = document.querySelector('.rev-next');

let currentIndex = 0;

function updateSliderPosition() {
    const slideWidth = document.querySelector('.rev-slide').clientWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    updateSliderPosition();
});

nextButton.addEventListener('click', () => {
    const totalSlides = document.querySelectorAll('.rev-slide').length;
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : totalSlides - 1;
    updateSliderPosition();
});

window.addEventListener('resize', updateSliderPosition);


let conslideIndex = 1;
showConSlides(conslideIndex);

// Next/previous controls
function plusConSlides(n) {
  showConSlides(conslideIndex += n);
}

// Thumbnail image controls
function currentConSlide(n) {
  showConSlides(slideIndex = n);
}


function showConSlides(n) {
  let i;
  let slides = document.getElementsByClassName("conSlides");
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
