// Calling the sayHello function three times

var sayHello;

sayHello = function () {
	console.log("Hello \npeople\n");
};

sayHello();
sayHello();
sayHello();


var name1="Hello world!";
function line(){
	for(let i=0;i<name1.length;i++){
		console.log(name1.charAt(i));
	}
}

line();

/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */