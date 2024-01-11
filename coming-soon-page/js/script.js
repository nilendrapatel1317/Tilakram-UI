setTimeout(function () {
  jQuery("#cspio-content").show().addClass("animated fadeIn");
}, 250);

// Reseize
function resize() {
  $("head").append("<style id='form-style' type='text/css'></style>");
  $("#form-style").html(
    ".cspio .input-group-btn, .cspio .input-group{display:block;width:100%;}.cspio #cspio-subscribe-btn{margin-left:0;width:100%;display:block;}.cspio .input-group .form-control:first-child, .cspio .input-group-addon:first-child, .cspio .input-group-btn:first-child>.btn, .cspio .input-group-btn:first-child>.dropdown-toggle, .cspio .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {border-bottom-right-radius: 4px;border-top-right-radius: 4px;}.cspio .input-group .form-control:last-child, .cspio .input-group-addon:last-child, .cspio .input-group-btn:last-child>.btn, .cspio .input-group-btn:last-child>.dropdown-toggle, .cspio .input-group-btn:first-child>.btn:not(:first-child) {border-bottom-left-radius: 4px;border-top-left-radius: 4px;}"
  );
}

$("#cspio-content").one(
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  function () {
    var width = $("#cspio-field-wrapper").width();
    if (width < 480 && width != 0) {
      resize();
    }
  }
);

// Change the value of countDownEndDate to the day you want to end the count down
var countDownEndDate = "August 18, 2023 09:00:00";

var endDate = new Date(countDownEndDate).getTime();

var x = setInterval(function () {
  var timeNow = new Date().getTime();

  var timeLeft = endDate - timeNow;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (days < 10) {
    days = "0" + days;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (timeLeft > 0) {
    document.getElementById("cdD").innerHTML = days;
    document.getElementById("cdH").innerHTML = hours;
    document.getElementById("cdM").innerHTML = minutes;
    document.getElementById("cdS").innerHTML = seconds;
  }
}, 1000);
