const swiperTop = new Swiper('.top__swiper', {
  effect: 'fade',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const accordeonTrigers = document.querySelectorAll(".accordeon__triger");

accordeonTrigers.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("accordeon__item--active")
  })
});


const pElements = document.querySelectorAll("p");
console.log(pElements);
