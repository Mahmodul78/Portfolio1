$(document).ready(function () {

  // For Sticky Menu
  $(".js-service").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    }
    else {
      $("nav").removeClass("sticky");
    }
  });


  //Start Navbar Active Change on Click

$(".main-nav li").on("click", function () {
  $(".main-nav li").removeClass("active");
  $(this).addClass("active");
});



  // For Mixitup(Portfolio Section)
  var mixer = mixitup('.container');


  // Smooth Scroll For IE/EDGE/SAFARI
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function () {
        window.location.hash = hash;
      });
    }
  });



});


/*------------------ Start Hamburger Menu ------------------*/

// When click openNav then open Hamburger
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

// When click closeNav then remove Hamburger
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/*------------------ End Hamburger Menu ------------------*/



/*---------------- Start Animation Circle with Jquery Plugin ---------------*/

$('svg.radial-progress').each(function (index, value) {
  $(this).find($('circle.complete')).removeAttr('style');
});
$(window).scroll(function () {
  $('svg.radial-progress').each(function (index, value) {
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if (
      $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
      $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
      // Get percentage of progress
      percent = $(value).data('percentage');
      // Get radius of the svg's circle.complete
      radius = $(this).find($('circle.complete')).attr('r');
      // Get circumference (2πr)
      circumference = 2 * Math.PI * radius;
      // Get stroke-dashoffset value based on the percentage of the circumference
      strokeDashOffset = circumference - ((percent * circumference) / 100);
      // Transition progress for 1.25 seconds
      $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
    }
  });
}).trigger('scroll');

/*---------------- End Animation Circle with Jquery Plugin ---------------*/