// Description: This file contains the classes for the shapes.
// class getting the answers from the user and rendering the SVG text for the triangle shape
class Triangle {
  constructor(answers) {
    this.text = answers.text;
    this.textColor = answers.textColor;
    this.shape = answers.shape;
    this.shapeColor = answers.shapeColor;
  }
  // Render the SVG text for the triangle shape
  render() {
    return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,10 20,180 280,180" fill="${this.shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}
// class getting the answers from the user and rendering the SVG text for the circle shape
class Circle {
  constructor(answers) {
    this.text = answers.text;
    this.textColor = answers.textColor;
    this.shape = answers.shape;
    this.shapeColor = answers.shapeColor;
  }
  // Render the SVG text for the circle shape
  render() {
    return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}
// class getting the answers from the user and rendering the SVG text for the square shape
class Square {
  constructor(answers) {
    this.text = answers.text;
    this.textColor = answers.textColor;
    this.shape = answers.shape;
    this.shapeColor = answers.shapeColor;
  }
  // Render the SVG text for the square shape
  render() {
    return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

// Export the classes to generateFile.js
module.exports = {
  Triangle,
  Circle,
  Square,
};
