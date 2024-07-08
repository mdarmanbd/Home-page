
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
    console.log("hello");
    if (activeTestimonialIndex < testimonials.length - 2) {
        activeTestimonialIndex++;

        fillSliderWithTestimonials();

        if (activeTestimonialIndex === testimonials.length - 2) {
            activeTestimonialIndex = 1;
        }
    } else {
        activeTestimonialIndex = 1;
    }

}

function moveToPrevTestimonial() {
    if (activeTestimonialIndex < testimonials.length - 2) {
        activeTestimonialIndex++;

        fillSliderWithTestimonials();

        if (activeTestimonialIndex === testimonials.length - 2) {
            activeTestimonialIndex = 1;
        }
    } else {
        activeTestimonialIndex = 1;
    }

}


function fillSliderWithTestimonials() {
    prevTestimonial.setAttribute('src', "/asset/images/testimonials/" + testimonials[activeTestimonialIndex - 1]);
    activeTestimonial.setAttribute('src', "/asset/images/testimonials/" + testimonials[activeTestimonialIndex]);
    nextTestimonial.setAttribute('src', "/asset/images/testimonials/" + testimonials[activeTestimonialIndex + 1]);
}