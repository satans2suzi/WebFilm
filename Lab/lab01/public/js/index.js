function () {
  "#show".on("click", function () {
    ".card-reveal".slideToggle("slow");
  });
  ".card-reveal .close".on("click", function () {
    ".card-reveal".slideToggle("slow");
  });
};
document.ready(function () {
  $("[id^=detail-]").hide();
  $(".toggle").click(function () {
    $input = $(this);
    $target = $("#" + $input.attr("data-toggle"));
    $target.slideToggle();
  });
});
