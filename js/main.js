// # 1. Write a function that takes the tiles array and one word from the words array and returns whether or not the word is valid.
//
// # A valid word is a word that can be created with a given set of tiles. A tile can not be used more than once.
// # For example, given the tiles above, "FRIDA" is a valid word but "BROWNIE" and "FOOD" are not.

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var tiles = []
// var tiles = ["A", "B", "D", "E", "F", "I", "O", "R"];

for (var i = 0; i < 8; i++) {
    var randomIndex = Math.floor(Math.random() * 26);

    tiles.push(alphabet[randomIndex]);

    var currentTile = document.getElementById('tile' + (i + 1));
    currentTile.innerHTML = alphabet[randomIndex];
}

tilesOriginal = tiles.slice(); // assign copy of tiles array to reset on SPA



var form1 = document.getElementById('form1');

form1.onsubmit = function(event) {
  event.preventDefault();

  var wordString = form1.userWord.value; // or event.target.userWord.value

  word = wordString.toUpperCase();
  word = word.split('');
  var letterIncluded = true;

  for (var i = 0; i < word.length; i++) {
    var currentLetter = word[i];

    if (tiles.includes(currentLetter) || currentLetter === " ") {
      var index = tiles.indexOf(currentLetter);
      tiles.splice(index, 1); // remove currentLetter from tiles array
    } else {
      letterIncluded = false;
    }
  }

  var result = document.getElementById('result');
    if (letterIncluded === true) {
      result.innerHTML = `Congratulations! If in fact your word <span class="bold-this">${wordString}</span> is in the dictionary, you can lay it on the scrabble board!`;
    } else {
      result.innerHTML = `Sorry try a new word, your word <span class="bold-this">${wordString}</span> is not valid based on your current tiles.`;
    }

  tiles = tilesOriginal.slice();
  form1.reset();
}
