// loading thitd party modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./lib/generateSVG");

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

      // generateMarkdown function call with user answers as argument -> function from module generateMarkdown.js
      const svgFile = generateSVG(answers);

      // WriteFile function to create readme.md file
      fs.writeFile("examples/logo.svg", svgFile, (err) =>
        err ? console.log(err) : console.log("Successfully created logo!")
      );
    });
}

// Function call to initialize app
getInput();
