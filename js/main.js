$(window).on("scroll", function() {
  if ($(window).scrollTop() > 50) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
});

$(window).on("scroll", function() {
  if ($(window).scrollTop() > 650) {
    $(".progress-bar").addClass("progress-bar-move");
  } else {
    $(".progress-bar").removeClass("progress-bar-move");
  }
});
