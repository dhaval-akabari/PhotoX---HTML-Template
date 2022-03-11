$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });
  // animate navbar
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("custom-navbar");
    } else {
      $(".nav-menu").removeClass("custom-navbar");
    }
  });

  // animate camera & text
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 650) {
      $(".camera-img").addClass("fromLeft");
      $(".mission-text").addClass("fromRight");
    } else {
      $(".camera-img").removeClass("fromLeft");
      $(".mission-text").removeClass("fromRight");
    }
  });

  // animate collection
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 1400) {
      $(".card-shadow").addClass("anim-collection");
    } else {
      $(".card-shadow").removeClass("anim-collection");
    }
  });

  // filter gallery
  $(".gallery-list-item").click(function () {
    let value = $(this).attr("data-filter");
    if (value === "all") {
      $(".filter").show(300);
    } else {
      $(".filter").not("." + value).hide(300);
      $(".filter").filter("." + value).show(300);
    }
  });

  $(".gallery-list-item").click(function () {
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });

  // animate pricing tables
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 4300) {
      $('.card-1').addClass('moveFromLeft');
      $('.card-2').addClass('moveFromBottom');
      $('.card-3').addClass('moveFromRight');
    } else {
      $('.card-1').removeClass('moveFromLeft');
      $('.card-2').removeClass('moveFromBottom');
      $('.card-3').removeClass('moveFromRight');
    }
  });
});
