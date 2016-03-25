$(document).ready(function() {
  // $("#blank form").submit(function(event) {
  //
  //   var nameInput = $("input#name").val();
  //
  //   $(".name").text(nameInput);
  //
  //   $("#letter").show();
  //
  //   event.preventDefault();
  // });
  $("form").submit(function(event) {
    // Set starting score to 0
    var score = 0;
    // Tallies the point value from each quiz question
    var result = parseInt($("input:radio[name=flavor]:checked").val());
    score += result; // Re-sets score to score + result
    result = parseInt($("input:radio[name=food]:checked").val());
    score += result; // Re-resets score to score + result
    result = parseInt($("input:radio[name=date]:checked").val());
    score += result; // Re-resets score to score + result
    result = parseInt($("input:radio[name=pet]:checked").val());
    score += result; // Re-resets score to score + result
    result = parseInt($("input:radio[name=foo]:checked").val());
    score += result; // Re-resets score to score + result
    // Calculate results //
    // CHANGE THIS SO IT ECHOES BACK IN THE DOCUMENT
    // RATHER THAN AS AN ALERT
    if (score > 100) {
      alert("Odessa, Ukraine");
    }
    else if (score > 50) {
      alert("Berlin, Germany");
    }
    else {
      alert("Reykjavik, Iceland");
    }
    event.preventDefault();
  });
});
