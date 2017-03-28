$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var max= parseInt($("#maximum").val());
    var multi= parseInt($("#multiple").val());

    for (var index = multi; index <= max; index += multi) {
      $("ul").append('<li>' + index + "</li>");
    };


  });
});
