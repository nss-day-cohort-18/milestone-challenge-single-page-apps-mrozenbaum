"use strict";
// Need to send in an argument (inventory)
// privateInventory becomes inventory
var CarLot = (function(oldCarLot) {

  
// private inventory becomes inventory
    oldCarLot.showInventory = function(inventory) {

      // Array for giving car cards individual images
      // var images = ["images/nissan-rogue-2014.jpg", "images/honda-civic-2012.jpg", "images/toyota-tocoma-2010.jpg", "images/acura-tl-2012.jpg", "images/lexus-is250-2015.jpg"]
      // // Looping over the car images array
      // for (var i = 0; i < images.length; i++) {
      // // console.log("attach Images:", images[i]);
      // }
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

          <img class="carImg" alt="${currentInventory.make}${currentInventory.model}${currentInventory.year}">

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
        console.log("made it to styling", event);
        var target = event.currentTarget;
        // $(target).addClass("bordered");
        target.classList.add("bordered");
        console.log("target class list:",target.classList);
        console.log("target:", target);
        if (target.classList.index[2]) {
        
          target.classList.remove("bordered");
          console.log("target ifff:", target);
          console.log("target class list 222:", target.classList);
        //   console.log("target two:", target);
        //   // $(target).removeClass("bordered");
        }
        
      }

      // Returning oldCarLot object plus what we added to it in showInventory    
      return oldCarLot;


})(CarLot || {});



//////////////////////////// OLD CODE //////////////////////////////////////

// "use strict";

// function showInventory (inventory){

//   // Array for giving car cards individual images
//   var images = ["images/nissan-rogue-2014.jpg", "images/honda-civic-2012.jpg", "images/toyota-tocoma-2010.jpg", "images/acura-tl-2012.jpg", "images/lexus-is250-2015.jpg"]
//   // Looping over the car images array
//   for (var i = 0; i < images.length; i++) {
//     // console.log("attach Images:", images[i]);
//   }
//   // List the car inventory in the DOM
//   var grid = document.getElementById("carGrid");
//   var outputString = "";
//   var n = 1;
//   // Adding new DIV element 
//   var newDiv = document.createElement("DIV");
//   newDiv.classList.add("row");
//     // Looping over the car inventory 
//     for (var i = 0; i < inventory.length; i++) {
//       var currentInventory = inventory[i];
//       // Build up our DOM string
//       outputString = `
//       <div class="col-md-3" id="${currentInventory.make}${currentInventory.model}${currentInventory.year}">
//       <img class="carImg" src="${images[i]}" alt="${currentInventory.make}${currentInventory.model}${currentInventory.year}">
//       <p>Make: ${currentInventory.make}<br> 
//       Model: ${currentInventory.model}<br> 
//       Year: ${currentInventory.year}<br>
//       <p> Description: ${currentInventory.description}</p>
//       </div>`;  

//         newDiv.innerHTML += outputString;
  
//         grid.appendChild(newDiv)
//           if ( i === (n * 3) -1) {
//             var newDiv = document.createElement("DIV");
//             newDiv.classList.add("row");
//             n++;
//           }
//     }

//   activateEvents();
// };

// // Adding event listeners to car cards
// function activateEvents (){
//   $(".col-md-3").click(function(event){
//     console.log("event", event.currentTarget);
//   });
// };

  // change border color of card on and off click
  // focus on search bar when specific car is clicked
  // look up event.currentTarget

  
    



  