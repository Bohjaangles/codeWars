/*
Write a function which takes one parameter representing the dimensions of a checkered board. The board will always be square, so 5 means you will need a 5x5 board.

The dark squares will be represented by a unicode white square, while the light squares will be represented by a unicode black square (the opposite colours ensure the board doesn't look reversed on code wars' dark background). It should return a string of the board with a space in between each square and taking into account new lines.

An even number should return a board that begins with a dark square. An odd number should return a board that begins with a light square.

Examples
Input: 5

Output:
■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
There should be no trailing white space at the end of each line, or new line characters at the end of the string.

Note
The squares are characters ■ and □ with codes \u25A0 and \u25A1.
Do not use HTML entities for the squares (e.g. □ for white square) as the code doesn't consider it a valid square. A good way to check is if your solution prints a correct checker board on your local terminal.
*/

// my solution:
function checkeredBoard(dimension) {
  let count = dimension
  let result = ''
  let colorSwitch = dimension % 2 === 1 ? false : true;
  for(let i = 0; i < dimension; i++) {
    if (count !== dimension) {
      result += '\n'
    }
      for (let j = 0; j < dimension; j++) {
        if (colorSwitch){
          result += '\u25A1'
          colorSwitch = !colorSwitch
          if (j !== dimension - 1) {
            result += ' '
          }
        } else {
          result += '\u25A0'
          colorSwitch = !colorSwitch
          if (j !== dimension - 1) {
            result += ' '
          }
        }
      } 
    count--
    if (dimension % 2 !== 0){
    colorSwitch = !colorSwitch
    }
    colorSwitch = !colorSwitch
    }
  return result
  }

  //solutions by others that I liked :
  function checkeredBoard(dimension) {
    if (parseInt(dimension) !== dimension || dimension < 2) {
      return false;
    }
    var arr = [];
    for (var i = dimension; i > 0; i--) {
      var row = [];
      for (var j = 0; j < dimension; j++) {
        row.push((i+j) % 2 === 0 ? "□" : "■");
      }
      arr.push(row.join(" "));
    }
    return arr.join("\n");
  }