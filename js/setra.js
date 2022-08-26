// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("show-links")) {
    //   links.classList.remove("show-links");
    // } else {
    //   links.classList.add("show-links");
    // }
    links.classList.toggle("show-links");
    links.style.display = "block";
});


var swiper = new Swiper(".gallery-swiper", {
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    breakpoints: {
        300: {
            spaceBetween: 20,
            slidesPerView: 1,
            centeredSlides: false,

        },

        480: {
            spaceBetween: 10,
            slidesPerView: 1.3,

        },


        700: {
            spaceBetween: 25,
            slidesPerView: 2.3,
        },

        900: {
            slidesPerView: 3.3,
            loop: false,
            centeredSlides: false
        }
    },
});


var swiper2 = new Swiper(".review-swiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },




    /*   navigation: {

      },
      direction: getDirection(),
      on: {
          resize: function() {
              swiper2.changeDirection(getDirection());
          },
      }, */

});

var swiper3 = new Swiper(".review-swiper2", {
    spaceBetween: 10,
    loop: true,
    thumbs: {
        swiper: swiper2,
    },

    breakpoints: {
        800: {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        },
    }

});
/* 
function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth = 800 ? 'vertical' : 'horizontal';
    return direction;

} */



/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scrollup');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 460) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    // reset: true
})

sr.reveal(`.review-swiper, .review-swiper2, .container2, .container6, .footer-one`)
sr.reveal(`.container1,.container4, .container3`, { interval: 100 })
sr.reveal(`.gallery-top,  .container8, .footer-two`, { origin: 'left' })
sr.reveal(`#circle, .container5, .container7`, { origin: 'right' })
sr.reveal(`.copytext`, { origin: "bottom" })