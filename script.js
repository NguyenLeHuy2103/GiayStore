document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
  const pages = document.querySelectorAll('.pagination .page');
  pages.forEach(page => {
    page.addEventListener('click', function () {
      pages.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      // Load dữ liệu tương ứng ở đây
    });
  });