const Shapes = require("./shapes.js");

describe("Circle svg text", () => {
  it("It should return a SVG if all the inputs are correctly assigned", () => {
    const shapes = new Shapes.Circle({
      text: "ABG",
      textColor: "black",
      shape: "circle",
      shapeColor: "blue",
    });
    const result = shapes.render();
    const expectedReturn = ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="blue"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABG</text>
      </svg>`;

    expect(result).toEqual(expectedReturn);
  });
});

describe("Triangle svg text", () => {
  it("It should return a SVG if all the inputs are correctly assigned", () => {
    const shapes = new Shapes.Triangle({
      text: "NDC",
      textColor: "white",
      shape: "polygon",
      shapeColor: "green",
    });
    const result = shapes.render();
    const expectedReturn = ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,10 20,180 280,180" fill="green" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">NDC</text>
      </svg>`;

    expect(result).toEqual(expectedReturn);
  });
});

describe("Square svg text", () => {
  it("It should return a SVG if all the inputs are correctly assigned", () => {
    const shapes = new Shapes.Square({
      text: "MFN",
      textColor: "black",
      shape: "rect",
      shapeColor: "gray",
    });
    const result = shapes.render();
    const expectedReturn = ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="20" width="160" height="160" fill="gray"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">MFN</text>
      </svg>`;

    expect(result).toEqual(expectedReturn);
  });
});
