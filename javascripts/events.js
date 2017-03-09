"use strict";

var CarLot = (function (oldCarLot) {

  var carCards = document.getElementsByClassName("col-md-3");
  console.log("carCards", carCards);

  oldCarLot.activateEvents = function() {
    for (var i = 0; i < carCards.length; i++) {
      // console.log(carCards[i]);type: DOMString
      carCards[i].addEventListener('click', CarLot.styleCarCard);
    }
  };
// If we dont return oldcarlot, the new obj will override the original obj, instead of adding to it
  return oldCarLot;

})(CarLot || {});  