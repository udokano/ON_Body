// JavaScript Document

//slide

$(function () {
  $("#slide").slick({
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    dots: true,
    slidesToShow: 1,
    prevArrow: '<div class="arrow prev"></div>',
    nextArrow: '<div class="arrow next"></div>',
    responsive: [
      {
        //モバイル時のスライド
        breakpoint: 767,
        settings: {
          autoplay: false
        }
      }
    ]
  });
});

//スムーススクロール
$('a[href^="#"]').click(function () {
  var speed = 1000;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  $("html, body").animate(
    {
      scrollTop: target.offset().top
    },
    speed,
    "swing"
  );
  return false;
});
