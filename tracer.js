
// https://p5js.org/examples/motion-moving-on-curves.html


class Tracer {
    constructor(){
        this.beginX = 0;
        this.beginY = 0;
        this.endX = 1;
        this.endY = 1;
        this.distX = this.endX - this.beginX
        this.distY = this.endY - this.beginY
        this.exp = 2.5;
        this.x = this.endX;
        this.y = this.endY;
        this.step = .03;
        this.pct = 0;
        this.change = false;
        this.doOnce = true;

    }


show() {

    if (this.endX != this.x || this.endY != this.y){
        this.change = true;
    } else if (this.endX == this.x && this.endY == this.y) {
        this.doOnce = true;
    };

    if(this.change == true && this.doOnce == true){
        this.pct = 0.0;
        this.beginX = this.x;
        this.beginY = this.y;
        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;
        // this.change = false;
        // this.doOnce = false;
        }

if (this.pct < 1.0) {
      if(this.distX > 0) {
        if(this.distY<0){
          this.x = this.beginX + this.pct * this.distX;
          this.y = this.beginY + pow(this.pct, this.exp) * this.distY;
        } else {
             this.x = this.beginX + pow(this.pct, this.exp) * this.distX;
             this.y = this.beginY + this.pct * this.distY;
        }
    } else if (this.distX < 0) {
       if(this.distY>0){
          this.x = this.beginX + this.pct * this.distX;
          this.y = this.beginY + pow(this.pct, this.exp) * this.distY;
        } else {
             this.x = this.beginX + pow(this.pct, this.exp) * this.distX;
             this.y = this.beginY + this.pct * this.distY;
        }

    }
  }
      fill(10,255, 10); ellipse(this.x, this.y, 5, 5);
}
}



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
