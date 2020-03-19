// JavaScript Document

//slide

$(function () {
  $("#slides").slick({
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 2,
    dots: false,
    slidesToShow: 4,
    nextArrow: '<li class="btn next f-a-otf">進む</li>',
    prevArrow: '<li class="btn prev f-a-otf">戻る</li>',
    appendArrows: $("#btn__area"),
    responsive: [
      {
        //モバイル時のスライド
        breakpoint: 767,
        settings: 'unslick'
      }
    ]
  });
});

function sliderSetting() {
  var width = $(window).width();
  if (width <= 754) {
    $('#slides.slick-initialized').slick('unslick');

  } else {
    $('#slides').not('.slick-initialized').slick({
      //処理
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      initialSlide: 0,
      dots: false,
      slidesToShow: 3,
      nextArrow: '<li class="btn next f-a-otf">進む</li>',
      prevArrow: '<li class="btn prev f-a-otf">戻る</li>',
      appendArrows: $("#btn__area"),
      responsive: [
        {
          //モバイル時のスライド
          breakpoint: 767,
          settings: 'unslick'
        }
      ]
    });
  }
}

// 初期表示の実行
sliderSetting();

// リサイズの実行
$(window).resize(function () {
  sliderSetting();
});


$("#show").on("click", function () {
  $("#slides").css("height", "auto");
  $("#read__more__cont").remove();
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
