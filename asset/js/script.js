document.addEventListener("DOMContentLoaded", function () {
  // تهيئة Swiper الأساسي
  if (document.querySelector(".mySwiper")) {
      new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: document.querySelectorAll('.swiper-slide').length > 3, // يمنع الـ loop إذا كان عدد العناصر غير كافٍ
          autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
          breakpoints: {
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
          }
      });
  }

  // تهيئة Swiper الخاص بالعملاء
  if (document.querySelector(".mySwiperClients")) {
      new Swiper(".mySwiperClients", {
          slidesPerView: 4,
          spaceBetween: 20,
          loop: document.querySelectorAll('.swiper-slide').length > 4,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },
          breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 }
          }
      });
  }

  // تهيئة Swiper الرئيسي (mainSwiper)
  if (document.querySelector(".mainSwiper")) {
      new Swiper(".mainSwiper", {
          loop: true,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          },
          pagination: {
              el: ".swiper-pagination-main",
              clickable: true,
          },
      });
  }

  // كود القائمة المنسدلة لتغيير اللغة
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  const flagIcon = document.getElementById("flagIcon");
  const selectedLang = document.getElementById("selectedLang");

  if (langBtn && langMenu) {
      langBtn.addEventListener("click", function (event) {
          event.stopPropagation();
          langMenu.classList.toggle("hidden");
      });

      langMenu.querySelectorAll("li").forEach(item => {
          item.addEventListener("click", function () {
              selectedLang.textContent = this.getAttribute("data-lang");
              flagIcon.src = this.querySelector("img").src;
              langMenu.classList.add("hidden");
          });
      });

      document.addEventListener("click", function (event) {
          if (!langBtn.contains(event.target) && !langMenu.contains(event.target)) {
              langMenu.classList.add("hidden");
          }
      });
  }

  // كود تأثير الكتابة للنص عند تحميل الصفحة
  const text = `Welcome to GETI`;
  let index = 0;
  const speed = 250;
  const loadingText = document.getElementById("loadingText");

  function typeEffect() {
      if (loadingText && index < text.length) {
          loadingText.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeEffect, speed);
      } else {
          setTimeout(() => {
              let preloader = document.getElementById("preloader");
              if (preloader) {
                  preloader.style.opacity = "0";
                  setTimeout(() => {
                      preloader.style.display = "none";
                  }, 500);
              }
          }, 1000);
      }
  }

  if (loadingText) {
      typeEffect();
  }
});
