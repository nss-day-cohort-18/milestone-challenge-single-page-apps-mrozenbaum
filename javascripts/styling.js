"use strict";
// Need to send in an argument (inventory)
// privateInventory becomes inventory
var CarLot = (function(oldCarLot) {

  
// private inventory becomes inventory
    oldCarLot.showInventory = function(inventory) {

      // List the car inventory in the DOM
      var grid = document.getElementById("carGrid");
      var outputString = "";
      var n = 1;
      // Adding new DIV element 
      var newDiv = document.createElement("DIV");
      newDiv.classList.add("row");
      // Looping over the car inventory 
      for (var i = 0; i < inventory.length; i++) {
        var currentInventory = inventory[i];
        // Build up our DOM string
        outputString = 

        `<div class="col-md-3" id="${currentInventory.make}${currentInventory.model}${currentInventory.year}">

          <img src="${currentInventory.image}" class="carImg" alt="${currentInventory.make}${currentInventory.model}${currentInventory.year}">

          <p>
            Make: ${currentInventory.make}
            <br> 
            Model: ${currentInventory.model}
            <br> 
            Year: ${currentInventory.year}
            <br>
            Description: ${currentInventory.description}
          </p>
        </div>`;  

          newDiv.innerHTML += outputString;
  
          grid.appendChild(newDiv)
            if ( i === (n * 3) -1) {
              var newDiv = document.createElement("DIV");
              newDiv.classList.add("row");
              n++;
            }
      }
      CarLot.activateEvents();
    },
      oldCarLot.styleCarCard = function(event){
        // Grabbing all car cards with class name
        var carCards = document.getElementsByClassName("col-md-3");
        // Setting current card to be current target
        var selectedCarCard = event.currentTarget;
          for (var n = 0; n < carCards.length; n++){
                carCards[n].classList.remove("bordered");
          };
              selectedCarCard.classList.add("bordered");
              // Focusing on search bar when specific card it clicked
              var textInput = document.getElementById("searchBar").focus(); 
      };


      return oldCarLot;


})(CarLot || {});

