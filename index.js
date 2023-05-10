// loading thitd party modules
const inquirer = require("inquirer");
const Shapes = require("./lib/shapes.js");
const generateFile = require("./lib/generateFile.js");

// Function to ask user questions and generate readme.md file
function getInput() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters:",
        validate: function (input) {
          if (input.length <= 3) {
            return true;
          }
          return "Please enter up to three characters:";
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Choose text color: Color keyword or hex code:",
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
        message: "Choose Shape color: Color keyword or hex code:",
      },
    ])
    .then((answers) => {
      // console.log(answers);
      generateFile(answers);
    });
}

// Function call to initialize app
getInput();
