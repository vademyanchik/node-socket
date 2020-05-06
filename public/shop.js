
// render list of items
$(document).ready(function () {
   var fruitsArray = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
   $.each(fruitsArray, function(index, value){
       $(".list-of-items").append("<div class='item'><div>" +value + '</div><div>Add</div></div>');
   });
});