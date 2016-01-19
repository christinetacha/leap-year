var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)) {
    return true;
  } else if (isNaN(year)) {
    return true;
  }
    return false;
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    $("#result").hide();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if ((isNaN(year)) || (year < 0)) {
      alert("Please enter a valid year.");
    } else if(!result) {
      $(".not").text("not");
      $("#result").show();
    } else {
      $("#result").show();
      $(".not").text("");
    }

    event.preventDefault();
  });
});


// } else if (isNaN(year)) {
//   return (true);
