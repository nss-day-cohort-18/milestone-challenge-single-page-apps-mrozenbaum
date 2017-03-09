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

})(CarLot || {}); 






       