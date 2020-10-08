//Navigation menu
$(document).ready(function () {
  //Making the navbar visible on lower sections of the page
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
  //JQuery animation for scrolling on the links in the navbar
  $(".main_menu a").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500
    );
  });
});
