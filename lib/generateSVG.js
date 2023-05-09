const generateSVG = ({ text, textColor, shape, shapeColor }) =>
  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
    ${text}
  </text>
</svg>`;

module.exports = generateSVG;

// CIRCLE: <circle cx="25" cy="75" r="20" fill="red"/>
// RECTANGLE: <rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="red"/>
// TRIANGLE: <polygon points="50,10 90,90 10,90" fill="red" />

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
  <rect x="50" y="25" width="100" height="50" fill="green" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <polygon points="50,10 90,90 10,90" fill="red" />
</svg> */
}
