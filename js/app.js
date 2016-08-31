$(document).ready(function() {
  $( "#play" ).on( "click", function(event) {
      $( "#play" ).hide();
      $( ".flex-video" ).show();
      $( ".flex-video" )[0].src += "&autoplay=1"; event.preventDefault();
  });
});
