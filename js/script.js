// JavaScript using GSAP
var swiperItems = document.querySelectorAll('.outer-circle-swiper .swiper-item');
var homeSwiperImage = document.querySelector('.home-swiper-cir-img img');

function changeSwiperItems() {
  swiperItems.forEach((swiperItem, index) => {
    const nextIndex = (index + 1) % swiperItems.length;
    const nextImgSrc = swiperItems[nextIndex].querySelector('img').getAttribute('src');
    swiperItem.querySelector('img').setAttribute('src', nextImgSrc);
  });

  // Set the src of the .item-3 img to .home-swiper-cir-img img
  const item3ImgSrc = swiperItems[2].querySelector('img').getAttribute('src');
  homeSwiperImage.setAttribute('src', item3ImgSrc);

  gsap.to([swiperItems, '.home-swiper-cir-img img'], {
    duration: 1.5,
    rotate: '+=360',
    onComplete: function () {
      setTimeout(changeSwiperItems, 3000); // Call the function again after 2 seconds
    },
  });
}

changeSwiperItems(); // Start the process




















// Popular Products

$(document).ready(function() {
  // Swiper: Slider
      new Swiper('.swiper-container', {
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 20,
          breakpoints: {
              1920: {
                  slidesPerView: 3,
                  spaceBetween: 30
              },
              1028: {
                  slidesPerView: 2,
                  spaceBetween: 30
              },
              480: {
                  slidesPerView: 1,
                  spaceBetween: 10
              }
          }
      });
  });
  

