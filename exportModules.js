/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
const circleArea = radius => {
  return PI * radius * radius;
}

const squareArea = side => side * side;

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;
