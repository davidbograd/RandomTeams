var people = ["David", "Eric", "Amanda", "Agnes", "Tobi", "Ab", "Juse", "Magnus", "Cyndie", "Adam", "Abodi", "Thea"];

var groupSize = "4"

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

$(document).ready(function() {
  document.getElementById("g1-container").innerHTML = "<p>" + group1 + "</p>";
  document.getElementById("g2-container").innerHTML = "<p>" + group2 + "</p>";
  document.getElementById("g3-container").innerHTML = "<p>" + group3 + "</p>";


});

console.log(people);

console.log(group1);
console.log(group2);
console.log(group3);
