$(document).ready(function() {
  $("#shoutForm").submit(function() {
    var phraseInput = $("input#phrase").val();

    $(".phrase").text(phraseInput.toUpperCase());

    $("#shoutText").show();

    event.preventDefault();
  })
})
