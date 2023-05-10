const fs = require("fs");
const Shapes = require("./shapes.js");

function writeFileSVG(result) {
  fs.writeFile("examples/logo.svg", result, (err) =>
    err ? console.log(err) : console.log("Successfully created logo!")
  );
}

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

module.exports = generateFile;
