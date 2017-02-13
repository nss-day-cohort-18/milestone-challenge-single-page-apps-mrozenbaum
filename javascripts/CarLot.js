 "use strict";

var CarLot = (function () {
var privateInventory = [];


return {
  loadInventory: function (inventory) {
  // Create an XHR to load inventory
  var loader = new XMLHttpRequest();
  // Listen for when the lead event is broadcast
  // and execute an anonymous callback
  loader.addEventListener("load", function () {
    // Set the value of the private array
    privateInventory = JSON.parse(this.responseText).cars;
    console.log("privateInventory", privateInventory);
    
    inventory(privateInventory);
    inventory(activateEvents);
    });

  // get the array from JSON file
  loader.open("GET","javascripts/inventory.json");
  // start the process
  loader.send();

  }
}
return privateInventory;
})(CarLot || {});

 CarLot.loadInventory(showInventory);
 CarLot.loadInventory(activateEvents);





       