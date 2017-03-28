$(document).ready(function() {
  $("#form").submit(function(event) {


    var inputs = $("#sentence").val();
    var array = inputs.split(",");
    var threeOrMore = [];

    array.forEach(function(word){
      if(word.length>=3){
        threeOrMore.push(word);
      }
    });

    $("ul").append("<li>"+ threeOrMore + "</li>");
// console.log(array)





    event.preventDefault();
  });
});
