const fs = require("fs");
const Shapes = require("./shapes.js");

// Write the SVG file to the examples folder
function writeFileSVG(result) {
  fs.writeFile("examples/logo.svg", result, (err) =>
    err ? console.log(err) : console.log("Successfully generated logo.svg!")
  );
}

// Generate the file with the shape and svg text based on the answers provided by the user
function generateFile(answers) {
  let result;
  if (answers.shape === "triangle") {
    let triangle = new Shapes.Triangle(answers);
    result = triangle.render();
  } else if (answers.shape === "circle") {
    let triangle = new Shapes.Circle(answers);
    result = triangle.render();
  } else if (answers.shape === "square") {
    let triangle = new Shapes.Square(answers);
    result = triangle.render();
  }

  writeFileSVG(result);
}

// Export the generateFile function to index.js
module.exports = generateFile;
