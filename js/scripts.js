$(document).ready(function() {

  // Score tabulation logic:
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

    // Result calculation and display logic:
    if (score > 100) {
      $('#trenton').show();
    }
    else if (score > 50) {
      $('#sandusky').show();
    }
    else {
      $('#detroit').show();
    }
    // Code snippet DELETE ME
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
    event.preventDefault();
  });
});
