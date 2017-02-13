"use strict";

function showInventory (inventory){
  // List the inventory in the DOM
  var grid = document.getElementById("carGrid");
  var outputString = "";
  var n = 1;
  // Adding new DIV element with class name row
  var newDiv = document.createElement("DIV");
  newDiv.classList.add("row");

    for (var i = 0; i < inventory.length; i++) {
      var currentInventory = inventory[i];
      // Build up our DOM string
      outputString = `<div class="col-md-3" id="${currentInventory.make}${currentInventory.model}${currentInventory.year}">Make: ${currentInventory.make}<br> Model: ${currentInventory.model}<br> Year: ${currentInventory.year}<br> Description: ${currentInventory.description}</div>`;  

        newDiv.innerHTML += outputString;
  
        grid.appendChild(newDiv)
          if ( i === (n * 3) -1) {
            var newDiv = document.createElement("DIV");
            newDiv.classList.add("row");
            n++;
          }
    }

  CarLot.activateEvents();
 };
// Adding event listeners to car cards
function activateEvents (inventory){
  $("#NissanRogue2014").click(function(){
    $("#NissanRogue2014").addClass("bordered");
    $("#searchBar").focus();
  });

  $("#HondaCivic2012").click(function(){
    $("#HondaCivic2012").addClass("bordered");
    $("#searchBar").focus();
  });

  $("#ToyotaTocoma2010").click(function(){
    $("#ToyotaTocoma2010").addClass("bordered");
    $("#searchBar").focus();
  });

  $("#AcuraTL2012").click(function(){
    $("#AcuraTL2012").addClass("bordered");
    $("#searchBar").focus();
  });

  $("#LexusIS2502015").click(function(){
    $("#LexusIS2502015").addClass("bordered");
    $("#searchBar").focus();
  });
};


// Adding images to car cards
onload = function f() {
  // var nissanEl = document.getElementById("NissanRogue2014");
  var nissanImg = document.createElement("IMG");
  nissanImg.setAttribute('src', "images/nissan-rogue-2014.jpg");
  nissanImg.setAttribute('alt', 'Nissan Rogue 2014');
  nissanImg.setAttribute('class', 'carImg');
  document.getElementById("NissanRogue2014").appendChild(nissanImg);

  // var hondaEl = document.getElementById("HondaCivic2012");
  var hondaImg = document.createElement("IMG");
  hondaImg.setAttribute('src', "images/honda-civic-2012.jpg");
  hondaImg.setAttribute('alt', 'Honda Civic 2012');
  hondaImg.setAttribute('class', 'carImg');
  document.getElementById("HondaCivic2012").appendChild(hondaImg);

  var toyotaImg = document.createElement("IMG");
  toyotaImg.setAttribute('src', "images/toyota-tocoma-2010.jpg");
  toyotaImg.setAttribute('alt', 'Toyota Tocoma 2010');
  toyotaImg.setAttribute('class', 'carImg');
  document.getElementById("ToyotaTocoma2010").appendChild(toyotaImg);

  var acuraImg = document.createElement("IMG");
  acuraImg.setAttribute('src', "images/acura-tl-2012.jpg");
  acuraImg.setAttribute('alt', 'Acura TL 2012');
  acuraImg.setAttribute('class', 'carImg');
  document.getElementById("AcuraTL2012").appendChild(acuraImg);

  var lexusImg = document.createElement("IMG");
  lexusImg.setAttribute('src', "images/lexus-is250-2015.jpg");
  lexusImg.setAttribute('alt', 'Lexus IS250 2015');
  lexusImg.setAttribute('class', 'carImg');
  document.getElementById("LexusIS2502015").appendChild(lexusImg);
}

