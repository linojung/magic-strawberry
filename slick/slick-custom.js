$(document).ready(function () {
  var $magicSlide = $(".magic__slide");
  $magicSlide.each(function () {
    $(".magic__slide").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            infinite: true,
          },
        },
      ],
    });
    var $magicPage = $(".magic__page");
    $(this).on("afterChange", function (event, slick, currentSlide) {
      $magicPage.find(".magic__page__current").text(currentSlide + 1);
    });
    var magicPageTotal = $(this)
      .find(".slick-slide")
      .not(".slick-cloned").length;
    $magicPage.find(".magic__page__total").text(magicPageTotal);
  });
});
