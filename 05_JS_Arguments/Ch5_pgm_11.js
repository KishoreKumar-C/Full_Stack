// Displaying a player's location

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[3] + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom");
showPlayerPlace("Dax", "The Old Library");

//When i changed it to 3, the first function displays d 
//while the second function says undefined as the length of dax is only three.
//And index starts from 0 so at position three no value in the second function.

/* Further Adventures
 *
 * 1) Inside the console.log brackets,
 *    change playerName to playerName[0]
 *    Run the program.
 *    What effect do the brackets have?
 *
 * 2) Change the number in the brackets to 1.
 *
 * 3) What happens when you change the
 *    number to 3? Why?
 *
 */