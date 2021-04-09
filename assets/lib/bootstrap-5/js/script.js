jQuery(document).ready(function () {
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  if (isMobile.any()) {
    // It is mobile
    $("body").addClass("body_mobile");

    $("#div-menumobile").click(function (e) {
      e.preventDefault();
      $(".main-menu").toggleClass("open");
      $(".shadown_menu").toggleClass("active");
    });
  } else {
    $("body").addClass("body_destop");
  }

  $(".main-menu a").click(function (e) {
    $(".main-menu").removeClass("open");
    $(".shadown_menu").toggleClass("active");
  });

  $(".shadown_menu, .button_menu_mobile").click(function () {
    $(".main-menu").toggleClass("open");
    $(".shadown_menu").removeClass("active");
  });

  $(window).resize(function () {
    if ($(window).width() > 1023) {
      $(".mobile-main-menu").removeClass("active");
      $(".backdrop__body-backdrop___1rvky").removeClass("active");
    }
  });
});
