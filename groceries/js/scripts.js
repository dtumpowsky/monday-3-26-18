var groceryList = [];

$(document).ready(function(event) {
    $("#groceries").submit(function(event) {
      event.preventDefault();

      var myGroceryList = ["first", "second", "third"];

      myGroceryList.forEach(function(grocery) {
        var groceryInput = $("input#" + grocery).val();
        $("." + grocery).text(groceryInput);
        $(".list").append("<li>" + groceryInput + "</li>");
        console.log(groceryInput);
        groceryList.push(groceryInput);
        console.log(groceryList);
      });

    });
});
