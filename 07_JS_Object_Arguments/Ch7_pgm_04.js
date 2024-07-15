// Moving a point in 2D

var point1;
var point2, point3, point4;
var move;
var showPoint;
var reflectX, reflectY, linBreak;

function linBreak() {
    console.log("-------------------------------------------");
}

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

reflectX = function(point) {
    return{
        x : point.x,
        y: -point.y
    }

}

reflectY = function(point) {
    return{
        x : -point.x,
        y : point.y
    }

}



showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

point1 = { x : 2, y : 5 };

point2 = move(point1, { x : 7, y : -4 });

point3 = reflectX(point1);

point4 = reflectY(point1);

showPoint(point1);
console.log("Move 7 across and 4 down");
showPoint(point2);

linBreak();

showPoint(point1);
console.log("After the reflection in X axis");
showPoint(point3);

linBreak();

showPoint(point1);
console.log("After the reflection in Y axis");
showPoint(point4);

linBreak();


/* Further Adventures
 *
 * 1) Change the amount by which the point is moved
 *    by altering the x and y properties of
 *    the object literal passed to the move function.
 *
 * 2) Write a reflectX function that reflects
 *    a point in the x-axis, returning the new point.
 *
 * 3) How about a rotate90 function that rotates
 *    the point by 90 degrees anticlockwise
 *    around ( 0 , 0 )?
 *
 */