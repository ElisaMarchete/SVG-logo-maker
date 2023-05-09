// class Triangle {
//   constructor(text, textColor, shape, shapeColor) {
//     this.text = text;
//     this.textColor = textColor;
//     this.shape = shape;
//     this.shapeColor = shapeColor;
//   }

//   printTriangle() {
//     ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//       <${this.shape} points="50,10 90,90 10,90" fill="${this.shapeColor}" />
//       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
//       </svg>`;
//   }
// }

class Circle {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  printCircle() {
    const shapeLowercase = this.shape.toLowerCase();
    return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${shapeLowercase} cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

// class Square {
//   constructor(text, textColor, shape, shapeColor) {
//     this.text = text;
//     this.textColor = textColor;
//     this.shape = shape;
//     this.shapeColor = shapeColor;
//   }

//   printSquare() {
//     ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//         <${this.shape} x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.shapeColor}"/>
//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
//         </svg>`;
//   }
// }

module.exports = Circle;
