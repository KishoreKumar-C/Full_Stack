// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;
let buildCar;
let getCarInfo;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

buildCar = function(brand, model, type, engine, feature) {
    return{
        brand : brand,
        model : model,
        type : type,
        engine : engine,
        feature : feature
    }
}

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position + "\n";
};

getCarInfo = function(car) {
    return car.brand.toUpperCase() + " belongs to " + car.model + " model has the feature " + car.feature + " with " +car.engine + " engine.\n";
}

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

car1 = buildCar("Porsche", 911, "Sports", "3.0L twin-turbocharged flat-6", " Rear-wheel drive or all-wheel drive, Porsche Active Suspension Management (PASM), high-performance brakes");
car2 = buildCar("Hyundai", "Eon", "Street", "814 cc, 3-cylinder engine", "Stylish design with Hyundai's Fluidic Sculpture design language, swept-back headlamps, and a prominent front grille");

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));


/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */