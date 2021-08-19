
"use strict"

//slider
new Swiper('.quote-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new Swiper('.testimonial-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//faq
document.querySelectorAll('.faq-trigger').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('faq-item--active')) {
            parent.classList.remove('faq-item--active');
        } else {
            document.querySelectorAll('.faq-item').forEach((child) => child.classList.remove('faq-item--active'));

            parent.classList.toggle('faq-item--active')
        }
    });
});

//header
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
});


//burger
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');


headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
});

//up-button
const upButton = document.querySelector('.up-button');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        upButton.classList.add('up-button--shown');
    } else {
        upButton.classList.remove('up-button--shown');
    }
});

upButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
})