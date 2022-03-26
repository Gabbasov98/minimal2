$(document).ready(function() {

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__mob").toggleClass("header__mob--active")
        $("body").toggleClass("fixed-body")
    })


    $(".product-card__favourite").click(function() {
        $(this).toggleClass("product-card__favourite--active")
    })


    const rangeSlider = document.getElementById("range")
    const rangeInput0 = document.getElementById("range-input1")
    const rangeInput1 = document.getElementById("range-input2")
    const rangeInputs = [rangeInput0, rangeInput1]
    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [0, 999999],
            connect: true,
            step: 1,
            range: {
                'min': 0,
                'max': 99999
            }
        });
    }
    if (rangeSlider) {
        rangeSlider.noUiSlider.on('update', function(values, handle) {
            rangeInputs[handle].value = Math.round(values[handle])
        })
        rangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value)
            })
        })
    }


    const setRangeSlider = (i, value) => {
        let array = [null, null];
        array[i] = value;

        rangeSlider.noUiSlider.set(array);
    };

    $(".catalog__filter-btn").click(function() {
        $(this).toggleClass("catalog__filter-btn--active")
        $(".catalog-sidebar").toggleClass("catalog-sidebar--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.catalog-sidebar');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".catalog-sidebar").hasClass("catalog-sidebar--active")) {
                $(".catalog__filter-btn").removeClass("catalog__filter-btn--active")
                $(".catalog-sidebar").removeClass("catalog-sidebar--active")
            }
        }
    });


    $(".open-modal").click(function() {
        $(".modal").addClass("modal--active")
        $("body").append(`<div class="modal__bg"></div>`)
        $("body").addClass("fixed-body")

        $(".modal__bg").click(function() {
            $(".modal").removeClass("modal--active")
            $("body").removeClass("fixed-body")
            $(".modal__bg").remove()
        })

        $(".modal__close").click(function() {
            $(".modal").removeClass("modal--active")
            $("body").removeClass("fixed-body")
            $(".modal__bg").remove()
        })
    })
});


function initSliders(parent, min, max) {
    const rangeSlider = document.querySelector(`[data-slider="${parent}"] .range-slider`)
    const rangeInput0 = document.querySelector(`[data-slider="${parent}"] .range-slider__input1`)
    const rangeInput1 = document.querySelector(`[data-slider="${parent}"] .range-slider__input2`)
    const rangeInputs = [rangeInput0, rangeInput1]
    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [+min, +max],
            connect: true,
            step: 1,
            range: {
                'min': +min,
                'max': +max
            }
        });
    }
    if (rangeSlider) {
        rangeSlider.noUiSlider.on('update', function(values, handle) {
            rangeInputs[handle].value = Math.round(values[handle])
        })
        rangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value)
            })
        })
    }


    const setRangeSlider = (i, value) => {
        let array = [null, null];
        array[i] = value;

        rangeSlider.noUiSlider.set(array);
    };
}