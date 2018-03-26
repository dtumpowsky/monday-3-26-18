var myFlavors = [];

$(document).ready(function(event) {
    $("form#flavors").submit(function(event) {
      event.preventDefault();

      var favoriteFlavors = ["favorite-flavor"];

      favoriteFlavors.forEach(function(flavor) {
        var flavorInput = $("input#" + flavor).val();
        $("." + flavor).text(flavorInput);
        $(".list").append("<li>" + flavorInput + "</li>");
        myFlavors.push(flavorInput);
        console.log(myFlavors);
      });

    });
});
