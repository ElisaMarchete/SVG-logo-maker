const Shapes = require("./shapes.js");

describe("Circle svg text", () => {
  it("It should return PASS if all the inputs are correctly assigned ", () => {
    const shapes = new Shapes.Circle("ABG", "black", "circle", "blue");
    const result = shapes.render();
    const expectedReturn = ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="blue"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABG</text>
      </svg>`;

    expect(result).toEqual(expectedReturn);
  });
});

describe("Triangle svg text", () => {
  it("should return PASS if all the inputs are correctly assigned", () => {
    const shapes = new Shapes.Triangle("NDC", "white", "polygon", "green");
    const result = shapes.render();
    const expectedReturn = ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,10 90,90 10,90" fill="green" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">NDC</text>
      </svg>`;

    expect(result).toEqual(expectedReturn);
  });
});

describe("Square svg text", () => {
  it("should return PASS if all the inputs are correctly assigned", () => {
    const shapes = new Shapes.Square("MFN", "black", "rect", "gray");
    const result = shapes.render();
    const expectedReturn = ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="10" rx="150" ry="100" width="80" height="80" fill="gray"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">MFN</text>
      </svg>`;

    expect(result).toEqual(expectedReturn);
  });
});
