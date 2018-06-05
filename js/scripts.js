$(document).ready(function() {
  $("#submit").click(function(){

   var inputtedText = $("input#inputted").val();
   var inputUpper = inputtedText.toUpperCase().trim();
   var arr = inputUpper.split("");
   var clone = arr.slice();
   clone.reverse();

   if (arr.toString() === clone.toString()) {
       $(".output").text(inputtedText + " is a Palindrome");
   } else {
      $(".output").text(inputtedText + " is not a Palindrome");
   }

  });
});
