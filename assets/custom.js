document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 24,
    loop: {{ section.settings.enable_loop | json }},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  new Swiper('.image-with-text-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: {{ section.settings.enable_loop | json }},
    autoplay: {% if section.settings.autoplay %}{ 
      delay: {{ section.settings.autoplay_speed | times: 1000 }},
      disableOnInteraction: false
    }{% else %}false{% endif %},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      750: {
        slidesPerView: {{ section.settings.slides_per_view_tablet }},
        spaceBetween: 20
      },
      990: {
        slidesPerView: {{ section.settings.slides_per_view_desktop }},
        spaceBetween: 30
      }
    }
  });
});
