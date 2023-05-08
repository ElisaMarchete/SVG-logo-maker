// loading thitd party modules
const inquirer = require("inquirer");
const fs = require("fs");

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
    ])
    .then((answers) => {
      console.log(answers);

      // WriteFile function to create SVG file
    });
}

// Function call to initialize app
