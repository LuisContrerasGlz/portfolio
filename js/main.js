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

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $(".main_menu a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  

});
