$(".btn-tools").click(function () {
  $(this).css("color", "blueviolet");
  $(".btn-sheets").css("color", "#555");
  $("#tool-menu").addClass("active");
  $("#sheet-menu").removeClass("active");
  $(".tg").css("left", "50%");
});
$(".btn-sheets").click(function () {
  $(this).css("color", "blueviolet");
  $(".btn-tools").css("color", "#555");
  $("#sheet-menu").addClass("active");
  $("#tool-menu").removeClass("active");
  $(".tg").css("left", "0");
});
