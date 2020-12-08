function slider() {
    const slides = document.querySelectorAll('.offer__slide'),
        prevArrow = document.querySelector('.offer__slider-prev'),
        nextArrow = document.querySelector('.offer__slider-next'),
        totalSlides = document.querySelector('#total'),
        currentSlide = document.querySelector('#current');
    let slideIndex = 1;

    showSlides(slideIndex);

    if (slides.length < 10) {
        totalSlides.textContent = '0' + slides.length;
    } else {
        totalSlides.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => {
            item.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10) {
            currentSlide.textContent = '0' + slideIndex;
        } else {
            currentSlide.textContent = slideIndex;
        }
    }

    function sliderNav(n) {
        showSlides(slideIndex += n);
    }

    prevArrow.addEventListener('click', () => {
        sliderNav(-1);
    });
    nextArrow.addEventListener('click', () => {
        sliderNav(1);
    });
}

export default slider;