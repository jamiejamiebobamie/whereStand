class Button {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50
    }

    show(){
        if (dist(mouseX, mouseY, this.x+this.size, this.y+this.size/2) < this.size) {
            fill('#39FF14')
            rect(this.x, this.y, this.size*2, this.size)
            fill(0)
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
        } else {
            fill('#39FF14')
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
        }
    }

}

// subclass / inheritance example
// function Teacher(first, last, age, gender, interests, subject) {
//   Person.call(this, first, last, age, gender, interests);
//
//   this.subject = subject;
// }
