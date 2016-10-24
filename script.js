var people = ["Markus Eriksson", "Leticia Hoshino", "Yemi Afolabi", "Eskil Fogelström", "Josefina Liedberg", "David Bjørn Bograd", "Tilda Dahlgren", "Damien Vignol", "Sofie Cousu", "Carolina Lindelöw", "Bilal Khan", "Louise Brandrup-Wognsen", "Emilia Lehto", "Albin Hagström",
"Victor Borg", "Anna Stella Lo-Ré", "Loucmane", "Angelica Ruth", "Victoria VL", "Johan Hellström", "Micke Skoglund", "Anna Unger", "Isaac Sennerholt", "Cyndie Léa Vintilescu", "Mahle Rakela Robin", "Louise Ek", "Ibrahim Bajwa", "Abodi Ismail",
"Alex Ashman", "Elin Grass Casalini", "Amanda Schultz", "Abenezer Abebe", "Julia Hoff", "Enny Hellsén", "Michel George", "Abdullahi Hussein", "Teodor Meurling", "Andrea Sami Mogren", "Thea Arpine Gasparyan", "Jakob Eberson"];
var groupSize = "5"

// Randomizing function
Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

people.shuffle();
var group1 = people.slice(0, groupSize);
var group2 = people.slice((groupSize), (groupSize * 2));
var group3 = people.slice((groupSize * 2), (groupSize * 3));
var group4 = people.slice((groupSize * 3), (groupSize * 4));
var group5 = people.slice((groupSize * 4), (groupSize * 5));
var group6 = people.slice((groupSize * 5), (groupSize * 6));
var group7 = people.slice((groupSize * 6), (groupSize * 7));
var group8 = people.slice((groupSize * 7), (groupSize * 8));

$(document).ready(function() {
  document.getElementById("g1-container").innerHTML = "<p>" + group1 + "</p>";
  document.getElementById("g2-container").innerHTML = "<p>" + group2 + "</p>";
  document.getElementById("g3-container").innerHTML = "<p>" + group3 + "</p>";
  document.getElementById("g4-container").innerHTML = "<p>" + group4 + "</p>";
  document.getElementById("g5-container").innerHTML = "<p>" + group5 + "</p>";
  document.getElementById("g6-container").innerHTML = "<p>" + group6 + "</p>";
  document.getElementById("g7-container").innerHTML = "<p>" + group7 + "</p>";
  document.getElementById("g8-container").innerHTML = "<p>" + group8 + "</p>";

});
