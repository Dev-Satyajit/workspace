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
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var d = new Date();
var monthName = months[d.getMonth()];
document.getElementById(
  "drive-link"
).innerHTML = `<i class="fab fa-google-drive"></i> ${monthName} Drive`;
