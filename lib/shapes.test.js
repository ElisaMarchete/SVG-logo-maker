const Shapes = require("./shapes.js");

describe("SVG text circle", () => {
  it("should return true if all the inputs are correctly assign", () => {
    const shapes = new Shapes.Circle("ABG", "black", "circle", "blue");
    const result = shapes.render();
    const expectedReturn = ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="blue"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABG</text>
      </svg>`;

    expect(result).toEqual(expectedReturn);
  });
});
