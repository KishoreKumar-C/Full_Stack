// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substring(0, lineLength);
  };

  var space = function (spaceLength) {
  var space = "                                        ";
    spaceLength = Math.max(0, spaceLength);
    spaceLength = Math.min(40, spaceLength);
    return space.substring(0,spaceLength);
  }

  var emptyBox = function(equalLength) {
    var equal = "========================================";
    var space = "                                        ";
    equalLength = Math.max(0,equalLength);
    equalLength = Math.min(40, equalLength);
    console.log(equal.substring(0,equalLength));
    console.log("=" +space.substring(0,equalLength-2) + "=");
    console.log("=" +space.substring(0,equalLength-2) + "=");
    console.log("=" +space.substring(0,equalLength-2) + "=");
    console.log(equal.substring(0,equalLength));
  }

  console.log(line(35));
  console.log(line(50));
  console.log(space(10) + ".");
  console.log(space(20) + ".");
  emptyBox(12);
  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */