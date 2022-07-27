// スライド並列表示==========================================================
$('.slider').slick({
  autoplay: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});