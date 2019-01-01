class Dot {
    constructor(x, y, n){
        this.x = x;
        this.y = y;
        this.n = n;
    }
    //
    // opac(){
    //     tint(10, 255, 10, 255 - (51*this.n))
    // }

    show(){
        tint(255)
        ellipse(this.x, this.y, 3, 3);
    }
}

//https://p5js.org/examples/motion-moving-on-curves.html
//
// var beginX = 0; // Initial x-coordinate
// var beginY = 0; // Initial y-coordinate
// var endX = 0; // Final x-coordinate
// var endY = 0; // Final y-coordinate
// var distX; // X-axis distance to move
// var distY; // Y-axis distance to move
// var exponent = 2.5; // Determines the curve
// var x = 0.0; // Current x-coordinate
// var y = 0.0; // Current y-coordinate
// var step = 0.03; // Size of each step along the path // length of array of vectors, consistently added to and popped when reached. speed of line determined by queue.
// var pct = 0.0; // Percentage traveled (0.0 to 1.0)
//
// function setup() {
//   createCanvas(720, 400);
//   noStroke();
//   distX = endX - beginX;
//   distY = endY - beginY;
// }
//
// function draw() {
//   fill(0);
//   rect(0, 0, width, height);
// //   pct += step;
// if (pct < 1.0) {
//       if(distX > 0) {
//         if(distY<0){
//           x = beginX + pct * distX;
//           y = beginY + pow(pct, exponent) * distY;
//         } else {
//              x = beginX + pow(pct, exponent) * distX;
//              y = beginY + pct * distY;
//         }
//     } else if (distX < 0) {
//        if(distY>0){
//           x = beginX + pct * distX;
//           y = beginY + pow(pct, exponent) * distY;
//         } else {
//              x = beginX + pow(pct, exponent) * distX;
//              y = beginY + pct * distY;
//         }
//
//     }
//   }
//       fill(10,255, 10); ellipse(x, y, 5, 5);
// }
//
// function mousePressed() {
//   pct = 0.0;
//   beginX = x;
//   beginY = y;
//   endX = mouseX;
//   endY = mouseY;
//   distX = endX - beginX;
//   distY = endY - beginY;
// }
