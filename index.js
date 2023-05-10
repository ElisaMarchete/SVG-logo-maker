// loading thitd party modules
const inquirer = require("inquirer");
const fs = require("fs");
const Shapes = require("./lib/shapes.js");

// Function to ask user questions and generate readme.md file
function getInput() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters",
        validate: function (input) {
          if (input.length <= 3) {
            return true;
          }
          return "Please enter up to three characters.";
        },
      },
      {
        type: "input",
        name: "textColor",
        message:
          "Select the text's color: Please enter a color keyword OR a hexadecimal number",
      },
      {
        type: "list",
        name: "shape",
        message: "'Select the shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message:
          "Select the shape's color: Please enter a color keyword OR a hexadecimal number",
      },
    ])
    .then((answers) => {
      console.log(answers);

      let circle = new Shapes.Circle(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );
      const result = circle.render();

      // WriteFile function to create readme.md file
      fs.writeFile("examples/logo.svg", result, (err) =>
        err ? console.log(err) : console.log("Successfully created logo!")
      );
    });
}

// Function call to initialize app
getInput();
