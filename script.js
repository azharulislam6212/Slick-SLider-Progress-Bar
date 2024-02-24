var $slider = jQuery(".mobile-custom-tab-flex");

if ($slider.length) {
  let currentSlide;
  let slidesCount;
  let sliderCounter = document.createElement("div");

  $slider.slick({
    dots: false,
    infinite: false,
    arrows: false,
    cssEase: "linear",
    variableWidth: false
  });

  function progress(sliders) {
    sliders.each(function () {
      var slider = jQuery(this);
      var $progressBar = slider
        .parentsUntil(".mobile-custom-tab-block")
        .find(".progress");

      slider.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          var calc = ((nextSlide + 1) / slick.slideCount) * 100;
          $progressBar.css("background-size", calc + "% 100%");
        }
      );
    });
  }

  progress($slider);
}






function initializiSlider() {

  var $blogsliderMobile = jQuery(".blog__posts-mobile-slider");

  if ($(window).width() < 768) {


            if ($blogsliderMobile.length) {
              let currentSlide;
              let slidesCount;
              let sliderCounter = document.createElement("div");

              $blogsliderMobile.slick({
                dots: false,
                infinite: false,
                arrows: false,
                cssEase: "linear",
                variableWidth: false
              });

              function progress(sliders) {
                sliders.each(function () {
                  var slider = jQuery(this);
                  var $progressBar = slider
                    .parentsUntil(".feature-custom-blog")
                    .find(".progress");

                  slider.on(
                    "beforeChange",
                    function (event, slick, currentSlide, nextSlide) {
                      var calc = ((nextSlide + 1) / slick.slideCount) * 100;
                      $progressBar.css("background-size", calc + "% 100%");
                    }
                  );
                });
              }

              progress($blogsliderMobile);
            }


  } else {
    if ($blogsliderMobile.hasClass("slick-initialized")) {
      $blogsliderMobile.slick("unslick");
    }
  }

}


$(document).ready(function () {
  initializiSlider();
});
$(window).on("resize", function () {
  initializiSlider();
});
