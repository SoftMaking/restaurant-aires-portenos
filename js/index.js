var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('actived');

        btns.forEach((btn) => {
            btn.classList.remove('actived');
        });
    });

    slides[manual].classList.add('actived');
    btns[manual].classList.add('actived');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// Javascript for image slider autoplay navigation
var repeat = function (activedClass) {
    let actived = document.getElementsByClassName('actived');
    let i = 1;

    var repeater = () => {
        setTimeout(function () {
            [...actived].forEach((activedSlide) => {
                activedSlide.classList.remove('actived');
            });

            slides[i].classList.add('actived');
            btns[i].classList.add('actived');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();

$(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});

$(function () {
    $(".image").slice(0, 4).show();
    $("body").on('click touchstart', '.load-more', function (e) {
        e.preventDefault();
        $(".image:hidden").slice(0, 24).slideDown("slow");;
        if ($(".image:hidden").length == 0) {
            $(".load-more").hide();
            $(".load-less").show();
        }
        $('html,body').animate({
            scrollTop: $(".gallery-section").offset().top
        }, 500);
    });
    $("body").on('click touchstart', '.load-less', function (e) {
        e.preventDefault();
        $(".image").slice(4, 28).slideUp("slow");
        if ($(".image").length == 28) {
            $(".load-less").hide();
            $(".load-more").show();
        }
    });
});