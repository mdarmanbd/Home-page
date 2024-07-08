
let prevTestimonial = document.getElementById('prevTestimonial');
let activeTestimonial = document.getElementById('activeTestimonial');
let nextTestimonial = document.getElementById('nextTestimonial');

let prevTextimonialBtn = document.getElementById('prevTextimonialBtn');
let nextTextimonialBtn = document.getElementById('nextTestimonialBtn');


let testimonials = [
    "Image-1.png", "Image-2.png", "Image-3.png", "Image-4.png", "Image-5.png", "Image-6.png"
];

let activeTestimonialIndex = 1;

fillSliderWithTestimonials();

function moveToNextTestimonial() {
    if (activeTestimonialIndex < testimonials.length - 2) {
        activeTestimonialIndex++;

        fillSliderWithTestimonials();

        if (activeTestimonialIndex === testimonials.length - 2) {
            prevTextimonialBtn.classList.add('active-button');
            nextTextimonialBtn.classList.remove('active-button');
        }
    } else {
        prevTextimonialBtn.classList.add('active-button');
        nextTextimonialBtn.classList.remove('active-button');
    }
}

function moveToPrevTestimonial() {
    if (activeTestimonialIndex > 1) {
        activeTestimonialIndex--;

        fillSliderWithTestimonials();

        if (activeTestimonialIndex === 1) {
            prevTextimonialBtn.classList.remove('active-button');
            nextTextimonialBtn.classList.add('active-button');
        }
    } else {
        prevTextimonialBtn.classList.remove('active-button');
        nextTextimonialBtn.classList.add('active-button');
    }
}


function fillSliderWithTestimonials() {
    prevTestimonial.setAttribute('src', "/asset/images/testimonials/" + testimonials[activeTestimonialIndex - 1]);
    activeTestimonial.setAttribute('src', "/asset/images/testimonials/" + testimonials[activeTestimonialIndex]);
    nextTestimonial.setAttribute('src', "/asset/images/testimonials/" + testimonials[activeTestimonialIndex + 1]);
}