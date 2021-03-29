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

  $(".chitiet")
    .unbind("click")
    .click(function () {
      $("#myModal").show();
    });

  $("#myModal .close")
    .unbind("click")
    .click(function () {
      $("#myModal").hide();
    });

  if ($(".back-to-top").length) {
    var scrollTrigger = 100;
    $(window).on("scroll", function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $(".back-to-top").addClass("show");
      } else {
        $(".back-to-top").removeClass("show");
      }
    });
    $(".back-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    });
  }

  $(".check-height").matchHeight({
    byRow: true,
    property: "height",
    target: null,
    remove: false,
  });
});

//Get the modal
var modal = document.getElementById("myModal");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function gotoGallery(e) {
  $("#main-product").attr("src", $(e).attr("data-url"));
}
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  } else {
    $("#header").removeClass("header-scrolled");
  }
});

if ($(window).scrollTop() > 100) {
  $("#header").addClass("header-scrolled");
}

// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}

$(window).on("load", function () {
  aos_init();
});

$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 1000,
});
