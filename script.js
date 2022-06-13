'use strict';

function displayMenu(event) {
    if (document.getElementById("navbarList").classList.contains("show")) {
        document.getElementById("navbarList").classList.remove("show")
    } else {
        document.getElementById("navbarList").classList.add("show")
    }
    if (document.getElementById("page").classList.contains("nav-active")) {
        document.getElementById("page").classList.remove("nav-active")
    } else {
        document.getElementById("page").classList.add("nav-active")
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}

let tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime());
document.getElementById("spanDate").innerHTML = tomorrow.getFullYear();

const swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 2,
    spaceBetween: 30,
    loop: false,
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});
