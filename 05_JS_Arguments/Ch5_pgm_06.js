// A function with two arguments

var showSum;
let showProduct;
let showDifference;
let showQuotient;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showProduct = function (number1, number2) {
	var total = number1 * number2;
	console.log("The Product is " + total);
};

showDifference = function (number1, number2) {
	var total = number1 - number2;
	console.log("The difference is " + total);
};

showQuotient = function (number1, number2) {
	var total = number1 / number2;
	console.log("The Quotient is " + total);
};


showSum(30, 23);
showSum(2.8, -5);
showSum(56,74);

console.log("");

showProduct(3,2);
showProduct(2.8, -5);
showProduct(5,14);

console.log("");

showDifference(30, 23);
showDifference(2.8, -5);
showDifference(96,74);

console.log("");

showQuotient(9246, 23);
showQuotient(2456, 5);
showQuotient(9234,74);



/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */