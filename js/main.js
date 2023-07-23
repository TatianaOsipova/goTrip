// carousel

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    responsive: {
        540: {
            items: 3,
        },
        850: {
            items: 3,
        },
        1000: {
            margin: 20,
            items: 3,
        },
        1200: {
            margin: 30,
            items: 3,
        },
    },
});

// Go to the previous item
$('.slider__btn--prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});

// Go to the next item
$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
});

// burger menu

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
};



