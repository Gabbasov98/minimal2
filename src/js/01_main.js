$(document).ready(function() {

    function cartCalc() {
        $('.cartcalc .ccalc-minus').click(function() {
            let a = $(this).closest('.cartcalc').find('input').val();
            if (a > 1) {
                let b = +a - 1;
                $(this).closest('.cartcalc').find('input').val(b);
                if (+a === 2) {
                    $(this).addClass("ccalc-minus--disable")
                }
            } else {
                $(this).closest('.cartcalc').find('input').val(a);
            }
        });
        $('.cartcalc .ccalc-plus').click(function() {
            let a = $(this).closest('.cartcalc').find('input').val();
            let b = +a + 1;
            $(this).siblings(".ccalc-minus").removeClass("ccalc-minus--disable")
            $(this).closest('.cartcalc').find('input').val(b);
        });
    }
    cartCalc()


    $(".cart__item-favorite").click(function() {
        $(this).toggleClass("cart__item-favorite--active")
    })
    $(".cart__item-favorite2").click(function() {
        $(this).toggleClass("cart__item-favorite2--active")
    })

    document.querySelectorAll(".custom-select").forEach(el => {
        el.onclick = function() {
            el.classList.toggle("custom-select--active")
        }

        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(el);
            if (!withinBoundaries) {
                el.classList.remove("custom-select--active")
            }
        });
    })

    function unselectOption(dropdown) {
        for (let elem of dropdown.getElementsByTagName('div')) {
            elem.classList.remove("custom-select__dropdown-item--selected")
        }
    }

    document.querySelectorAll(".custom-select__dropdown-item").forEach(el => {
        el.onclick = function() {
            unselectOption(el.closest(".custom-select__dropdown"))
            el.classList.add("custom-select__dropdown-item--selected")
            for (let elem of el.closest(".custom-select").getElementsByTagName('input')) {
                elem.setAttribute("value", el.innerHTML)
            }
        }
    })

})