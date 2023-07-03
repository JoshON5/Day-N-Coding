// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var todayDate = dayjs().format("dddd, MMM D YYYY");
  $("#currentDay").html(todayDate);

  $(document).ready(function () {
    $(".saveBtn").on("click", function () {
        
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
    });

    function timeTracker() {
      var timeNow = dayjs().hour();

      $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour-")[1]);

        if (blockTime < timeNow) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        } else if (blockTime === timeNow) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      });
    }

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));

    timeTracker();
  });
});
