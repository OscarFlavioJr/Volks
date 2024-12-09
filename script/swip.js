document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
