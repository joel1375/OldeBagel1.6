function menuOpen() {
  document.getElementById("menuSub").style.display = "block";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "85%";
  document.getElementById("menuSub").style.display = "none";
  document.getElementById("dailysandwich").style.display = "none";
  document.getElementById("dailysoup").style.display = "none";
  document.getElementById("dailybuttonsandwich").style.filter = "contrast(0)";
  document.getElementById("dailybuttonsoup").style.filter = "contrast(0)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menuSub").style.display = "none";
}

function firstOption() {
  document.getElementById("lunchBoxes").style.display = "none";
  document.getElementById("standardTrays").style.display = "block";
  document.getElementById("customTrays").style.display = "none";
}

function secondOption() {
  document.getElementById("lunchBoxes").style.display = "none";
  document.getElementById("standardTrays").style.display = "none";
  document.getElementById("customTrays").style.display = "block";
}

function thirdOption() {
  document.getElementById("lunchBoxes").style.display = "block";
  document.getElementById("standardTrays").style.display = "none";
  document.getElementById("customTrays").style.display = "none";
}

function sandwich() {
  document.getElementById("dailysandwich").style.display = "block";
  document.getElementById("dailysoup").style.display = "none";
  document.getElementById("dailybuttonsandwich").style.filter = "contrast(100%)";
  document.getElementById("dailybuttonsoup").style.filter = "contrast(0)";
}

function soup() {
  document.getElementById("dailysandwich").style.display = "none";
  document.getElementById("dailysoup").style.display = "block";
  document.getElementById("dailybuttonsandwich").style.filter = "contrast(0)";
  document.getElementById("dailybuttonsoup").style.filter = "contrast(100%)";
}
