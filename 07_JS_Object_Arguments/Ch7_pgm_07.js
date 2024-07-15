// Converting a string to upper case

var planet1 = "Jupiter";
var bigPlanet = planet1.toUpperCase();

var getBig = function(planet) {
    var newPlanet = planet.toUpperCase();
    return planet + " becomes " + newPlanet;
}

var getSmall = function(planet) {
    var newPlanet = planet.toLowerCase();
    return planet + " becomes " + newPlanet;
}

console.log(getBig(planet1));
console.log(getSmall(planet1));



/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */