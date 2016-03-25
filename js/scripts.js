$(document).ready(function() {
  // Score tabulation logic
  $("form").submit(function(event) {
    // Set starting score to 0
    var score = 0;
    // Tallies the point value from each quiz question
    var result = parseInt($("input:radio[name=flavor]:checked").val());
    score += result; // Re-sets score to score + result
    result = parseInt($("input:radio[name=food]:checked").val());
    score += result; // Re-resets score to score + result
    result = parseInt($("input:radio[name=vaycay]:checked").val());
    score += result; // Re-resets score to score + result
    result = parseInt($("input:radio[name=pet]:checked").val());
    score += result; // Re-resets score to score + result
    result = parseInt($("input:radio[name=hobbies]:checked").val());
    score += result; // Re-resets score to score + result

    // Result calculation and display logic
    if (score > 66) {
      $('#trenton').show();
    }
    else if (score >= 33) {
      $('#sandusky').show();
    } else {
      $('#detroit').show();
    }
    event.preventDefault();
    // Verify placement of this
    // How do I get it to re-set?
  });
});
