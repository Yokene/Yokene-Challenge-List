const TOTAL_SLIDERS = 4;
let currentIndex = 0;

const dots = document.querySelectorAll(".dots button");
const images = document.querySelectorAll(".images img");

function showSlide(index) {
    images.forEach(image => image.style.display = "none");
    dots.forEach(dot => dot.style.backgroundColor = "#8f8f8f00");

    images[index].style.display = "block";
    dots[index].style.backgroundColor = "#8f8f8f";
}

function gotoSlide(index) {
    currentIndex = (TOTAL_SLIDERS + index) % TOTAL_SLIDERS;
    showSlide(currentIndex);
}

function next() {
    gotoSlide(currentIndex + 1);
}

function prev() {
    gotoSlide(currentIndex - 1);
}

function dotClicked(index) {
    gotoSlide(index);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
        dotClicked(index);
    });
});

showSlide(currentIndex);
