// let DOM = `
//     <div class="slider">
//                 <button id="prevBtn" class="hidden" onclick="prev()">Prev</button>
//                 <img id="prevSlide" width="100px" height="100px" class="slide-item prev" src="/asset/images/Logo.png" alt="Slider image 1">
//                 <img id="activeSlide" width="200px" height="200px" class="slide-item active" src="/asset/images/Logo.png" alt="Slider image 1">
//                 <img id="nextSlide" width="100px" height="100px" class="slide-item next" src="/asset/images/Logo.png" alt="Slider image 1">
//                 <button id="nextBtn" onclick="next()">Next</button>
//            </div>
// `;

// let target = document.getElementById('slider1');

// console.log(target);

// target.innerHTML = DOM;

let prevSlide = document.getElementById('prevSlide');
let activeSlide = document.getElementById('activeSlide');
let nextSlide = document.getElementById('nextSlide');

let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

let sliderImages = [
    "img-1.jpg", "img-2.png", "img-3.png", "img-4.png", "img-5.png"
];


let activeSliderIndex = 1;

fillSliderWithImages();

function next() {
    if (activeSliderIndex < sliderImages.length - 2) {
        activeSliderIndex++;

        fillSliderWithImages();

        if (activeSliderIndex === sliderImages.length - 2) {
            hideNextBtn();
        }
    } else {
        hideNextBtn();
    }

}

function prev() {
    if (activeSliderIndex > 1) {
        activeSliderIndex--;

        fillSliderWithImages();

        if (activeSliderIndex === 1) {
            hidePrevBtn();
        }

    } else {
        hidePrevBtn();
    }
}

function fillSliderWithImages() {
    prevSlide.setAttribute('src', "/asset/images/sliders/" + sliderImages[activeSliderIndex - 1]);
    activeSlide.setAttribute('src', "/asset/images/sliders/" + sliderImages[activeSliderIndex]);
    nextSlide.setAttribute('src', "/asset/images/sliders/" + sliderImages[activeSliderIndex + 1]);

}

function hideNextBtn() {
    nextBtn.classList.add('hidden');
    prevBtn.classList.remove('hidden');
}

function hidePrevBtn() {
    prevBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
}