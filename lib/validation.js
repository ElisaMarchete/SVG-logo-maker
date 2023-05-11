const colorNames = require("color-name");

// Custom validation function to check if the input is a valid text length (1-3 characters)
function validateTextLength(input) {
  if (input.length >= 1 && input.length <= 3) {
    return true;
  }
  return "Enter minimum of one character and a maximum of three characters!";
}

// Custom validation function to check if the input is a valid color name or hex color code
function validateColor(input) {
  // Object.keys method that returns an array of the enumerable property names of an object
  const colorNameList = Object.keys(colorNames);
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  if (
    colorNameList.includes(input.toLowerCase()) ||
    hexColorRegex.test(input)
  ) {
    return true;
  }

  return "Please enter a valid color name or hex color code (e.g., 'red' or '#FF0000').";
}

// Export the validation functions to index.js
module.exports = {
  validateTextLength,
  validateColor,
};
