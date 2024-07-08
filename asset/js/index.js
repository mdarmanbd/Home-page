
let prevSlide = document.getElementById('prevSlide');
let activeSlide = document.getElementById('activeSlide');
let nextSlide = document.getElementById('nextSlide');

let nextBtn = document.getElementById('nextBtn');


let sliderImages = [
    "Image-1.png", "Image-2.png", "Image-3.png", "Image-4.png", "Image-5.png", "Image-6.png"
];

let activeSliderIndex = 1;

fillSliderWithImages();

function next() {
    if (activeSliderIndex < sliderImages.length - 2) {
        activeSliderIndex++;
        
        fillSliderWithImages();

        if (activeSliderIndex === sliderImages.length - 2) {
            activeSliderIndex = 1;
        }
    } else {
        activeSliderIndex = 1;
    }

}

function fillSliderWithImages() {
    prevSlide.setAttribute('src', "/asset/images/sliders/" + sliderImages[activeSliderIndex - 1]);
    activeSlide.setAttribute('src', "/asset/images/sliders/" + sliderImages[activeSliderIndex]);
    nextSlide.setAttribute('src', "/asset/images/sliders/" + sliderImages[activeSliderIndex + 1]);
}