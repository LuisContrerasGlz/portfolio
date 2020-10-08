//Navigation menu
$(document).ready(function () {
  let nav_offset_top = $(".header_area").height() + 550;

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main_menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main_menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});
