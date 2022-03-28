function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        // autoplay: true,
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function hitSlider() {
    var swiper = new Swiper('.hit .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 44,
        navigation: {
            nextEl: '.hit .swiper-button-next',
            prevEl: '.hit .swiper-button-prev',
        },
        pagination: {
            el: '.hit .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 44
            },
        }
    })
}

function lifeStyleSlider() {
    var swiper = new Swiper('.lifestyle .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.lifestyle .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        }
    })
}


$(document).ready(function() {
    mainSlider()
    hitSlider()
    if (window.innerWidth < 992) {
        lifeStyleSlider()
    }
});