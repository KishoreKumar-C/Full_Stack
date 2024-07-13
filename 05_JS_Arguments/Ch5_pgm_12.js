// Displaying a player's location via object properties

var player1;
var player2;
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(1,4) + " is in " + playerPlace);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerPlace(player1.name, player1.place);
showPlayerPlace(player2.name, player2.place);


// The substirng method takes two arguments the first argument is the start index 
// and the second argument is the end index of a particular string and the second index 
// does not take the value of that particular value.


/* Further Adventures
 *
 * 1) In the console.log parentheses, change
 *    playerName to playerName.substring(0, 1)
 *    Run the program. What do you think
 *    the substring function does?
 *
 * 2) Change the arguments to the substring
 *    function to (0, 2), then (0, 3) and so on.
 *
 * 3) Change the arguments to
 *    (1, 2), then (1, 3) and so on.
 *
 * 4) What role do you think the two arguments
 *    to the substring function have?
 *
 */