var people = ["Markus Eriksson", "Leticia Hoshino", "Yemi Afolabi", "Eskil Fogelström", "Josefina Liedberg", "David Bjørn Bograd", "Tilda Dahlgren", "Damien Vignol", "Sofie Cousu", "Carolina Lindelöw", "Bilal Khan", "Louise Brandrup-Wognsen", "Emilia Lehto", "Albin Hagström",
"Victor Borg", "Anna Stella Lo-Ré", "Loucmane", "Angelica Ruth", "Victoria VL", "Johan Hellström", "Micke Skoglund", "Anna Unger", "Isaac Sennerholt", "Cyndie Léa Vintilescu", "Mahle Rakela Robin", "Louise Ek", "Ibrahim Bajwa", "Abodi Ismail",
"Alex Ashman", "Elin Grass Casalini", "Amanda Schultz", "Abenezer Abebe", "Julia Hoff", "Enny Hellsén", "Michel George", "Abdullahi Hussein", "Teodor Meurling", "Andrea Sami Mogren", "Thea Arpine Gasparyan", "Jakob Eberson"];
var groupSize = 5;
var groups = [];


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

// Split people into chunks and push new arrays into var groups
while (people.length > 0) {

  chunks = people.splice(0, groupSize)
  var chunksSpace = chunks.join(', ');

  groups.push(chunksSpace);
  console.log(groups);

};

// Append the groups into the DOM
$(document).ready(function() {
  for (var i = 0; i < groups.length; i++) {
  $('.all-groups').append("<div class='group'><p><span class='groupheader'>Group " + (i + 1) + "</span></br> " + groups[i] + "</p></div>");
}
});
