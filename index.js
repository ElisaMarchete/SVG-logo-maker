// loading modules
const inquirer = require("inquirer");
const generateFile = require("./lib/generateFile.js");
const validation = require("./lib/validation.js");

// Function to ask user questions
function getInput() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters:",
        validate: validation.validateTextLength,
      },
      {
        type: "input",
        name: "textColor",
        message: "Choose text color: Color keyword or hex code:",
        validate: validation.validateColor,
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
        validate: validation.validateColor,
      },
    ])
    .then((answers) => {
      // console.log(answers);
      generateFile(answers);
    });
}

// Function call to initialize app
getInput();
