
    // Close announcement
    document.getElementById("close-announcement").addEventListener("click", function () {
      document.getElementById("announcement-bar").style.display = "none";
    });

    // Fixed header on scroll
    window.addEventListener("scroll", function () {
      const header = document.getElementById("main-header");
      if (window.scrollY > 35) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    });

   
  // Banner Swiper
  const bannerSwiper = new Swiper(".banner-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
  },
});
   
// Product Swiper
const productSwiper = new Swiper(".product-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-next-product",
    prevEl: ".swiper-prev-product",
  },
});


  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const header = document.querySelector('header');
    const closeBtn = document.querySelector('#hamburger .close');

    hamburger.addEventListener('click', function () {
      header.classList.add('menu-open');
    });

    closeBtn.addEventListener('click', function (event) {
      event.stopPropagation(); // prevent triggering hamburger click
      header.classList.remove('menu-open');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.accordion-toggle');

    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        const ul = this.nextElementSibling;

        if (ul && ul.tagName.toLowerCase() === 'ul') {
          ul.classList.toggle('open');
          this.classList.toggle('active');
        }
      });
    });
  });
