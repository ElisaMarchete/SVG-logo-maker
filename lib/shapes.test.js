const Shapes = require("../lib/shapes.js");

describe("Shapes", () => {
  it("svg text generated as expected"),
    () => {
      const expectedReturn = ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABG</text>
        </svg>`;
      //   const circleColor = new Shapes.Circle("ABG", "black", "circle", "blue");
      // const result = circleColor.render();
      const circleColor = new Shapes.Circle();
      const result = circleColor.render("ABG", "black", "circle", "blue");

      expect(result).toEqual(expectedReturn);
    };
});
