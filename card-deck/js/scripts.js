var cards = ["club", "heart", "spade", "diamonds"];
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

cards.forEach(function(card) {
  ranks.forEach(function(rank){
  console.log(rank + " of " + card);
  });
});




// cards.forEach(function(card)) {
//   card.
//
// });

// $(document).ready(function(event) {
//     $("form#flavors").submit(function(event) {
//       event.preventDefault();
//
//       var deckCards = [""];

      // favoriteFlavors.forEach(function(flavor) {
      //   var flavorInput = $("input#" + flavor).val();
      //   $("." + flavor).text(flavorInput);
      //   $(".list").append("<li>" + flavorInput + "</li>");
      //   myFlavors.push(flavorInput);
      //   console.log(myFlavors);
//       });
//
//     });
// });
