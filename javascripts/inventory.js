"use strict";
// IIFE Immediatly Invoked Function Expression

// This is a Function Expression (FE in IIFE)
var CarLot = (function() {
// Private variable   
var privateInventory = [];


  return {
      // Getting data for private inventory array
      // Pretty much getting
      loadInventory: function () {
        
        // Create an XHR to load inventory
        var loader = new XMLHttpRequest();


            // Listen for when the lead event is broadcast
            // and execute an anonymous callback
            loader.addEventListener("load", function () {

              // Set the value of the 'privateInventory' array
              privateInventory = JSON.parse(this.responseText).cars;
              console.log("privateInventory", privateInventory);
              // Why CarLot works, but not oldCarLot
              CarLot.showInventory(privateInventory);
              // Call loadInventory, and pass it the data
              // loadInventory(privateInventory);

            });

        
            // get the array from JSON file
            loader.open("GET","inventory.json");
            // start the process
            loader.send();

      },

      // Giving access to private inventory array to other IIFES
      getInventory: function () {
        return privateInventory;
      }
  }
// return privateInventory;
// CarLot.loadInventory();
// '()' This is the Immediatly Invoked part of IIFE
})(CarLot || {}); 

// CarLot.loadInventory();
// CarLot.activateEvents();







// NOTES AND QUESTIONS //

// 'loadInventory' is a 'method'

// Setters let dev's to modify the value of private array aka "privateInventory"

// When we call loadInventory, we actually want to get the "privateInventory"

      
// Getter function? Allows us to get a private variable, and expose it to other dev's

// This console log shows how we get the private variable out of the function : 
// console.log("privateInventory:", CarLot.loadInventory());

// privateInventory can not be defined in the global scope because it is a private variable of CarLot :
// console.log("privateInventory:", privateInventory);






///////////////////// OLD CODE //////////////////////////////////////

//  "use strict";

// var CarLot = (function () {
// var privateInventory = [];


// return {
//   loadInventory: function (inventory) {
//     console.log("inventory", inventory);
//   // Create an XHR to load inventory
//   var loader = new XMLHttpRequest();
//   // Listen for when the lead event is broadcast
//   // and execute an anonymous callback
//   loader.addEventListener("load", function () {
//     // Set the value of the private array
//     privateInventory = JSON.parse(this.responseText).cars;
//     console.log("privateInventory", privateInventory);
    
//     inventory(privateInventory);
//     inventory(activateEvents);
//     });

//   // get the array from JSON file
//   loader.open("GET","javascripts/inventory.json");
//   // start the process
//   loader.send();

//   }

// }
// // return privateInventory;
// })(CarLot || {});

//  CarLot.loadInventory(showInventory);
//  CarLot.loadInventory(activateEvents);





       