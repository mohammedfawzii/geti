const swiper = new Swiper(".mySwiper", {
    loop: true, // يجعل السلايدر لا نهائي
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000, // تغيير الصورة كل 3 ثواني
      disableOnInteraction: false,
    },
  });
  