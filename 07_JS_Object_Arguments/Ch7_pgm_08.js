// Finding substrings

var message = "We choose to go to the Moon!";

console.log(message.substring(3, 12));
console.log(message.substring(23));
console.log(message.substring(13,23));
console.log(message.substring(0,9))

 // If the second index is not given the entire string is taken from the start index.
 // Negative values are not taken by the substring method.

/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */