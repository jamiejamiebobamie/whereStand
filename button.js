class Button {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.hover = false;
    }

    show(){
        if (dist(mouseX, mouseY, this.x+this.size, this.y+this.size/2) < this.size) {
            fill('#39FF14')
            rect(this.x, this.y, this.size*2, this.size)
            fill(0)
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = true
        } else {
            fill('#39FF14')
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = false
        }
    }

}

// CODING TO-DO LEARN ABOUT HOW TO USE EXTENDS
// https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/
// class About extends Button {
//     constructor(label, x, y){
//         super();
//         this.label = label;
//         this.x = x;
//         this.y = y;
//         this.size = 50;
//         this.hover = false;
//     }
//
//     if (this.hover == true && mouseIsPressed) {
//         console.log('hi')
//     }
//
// }

//
// class Play extends Button {
//     if (this.mouseOver == true && mouseIsPressed){
//
//     }
//
// }
//
// class Menu extends Button {
//     if (this.mouseOver == true && mouseIsPressed){
//
//     }
//
// }
//
// class nextLevel extends Button {
//     if (this.mouseOver == true && mouseIsPressed){
//
//     }
//
// }
//
// class refreshLevel extends Button {
//     if (this.mouseOver == true && mouseIsPressed){
//
//     }
//
// }
//
// class previousLevel extends Button {
//     if (super.mouseOver == true && mouseIsPressed){
//
//     }
//
// }



class Play {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.hover = false;
    }

    show(){
        if (dist(mouseX, mouseY, this.x+this.size, this.y+this.size/2) < this.size) {
            fill('#39FF14')
            rect(this.x, this.y, this.size*2, this.size)
            fill(0)
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = true
        } else {
            fill('#39FF14')
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = false
        }
    }

    click(){
        if (this.hover == true && mouseIsPressed) {
            return true
        }
    }
}

class About {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.hover = false;
        this.storedX = x;
        this.storedY = y;
    }

    show(){
        if (dist(mouseX, mouseY, this.x+this.size, this.y+this.size/2) < this.size) {
            fill('#39FF14')
            rect(this.x, this.y, this.size*2, this.size)
            fill(0)
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = true
        } else {
            fill('#39FF14')
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = false
        }
    }

    click(){
        if (this.hover == true && mouseIsPressed) {
            return true
        }
    }

}

class Menu {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.hover = false;
    }

    show(){
        if (dist(mouseX, mouseY, this.x+this.size, this.y+this.size/2) < this.size) {
            fill('#39FF14')
            rect(this.x, this.y, this.size*2, this.size)
            fill(0)
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = true
        } else {
            fill('#39FF14')
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = false
        }
    }

    click(){
        if (this.hover == true && mouseIsPressed) {
            return true
        }
    }

}

class NextLevel {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.hover = false;
    }

    show(){
        if (dist(mouseX, mouseY, this.x+this.size, this.y+this.size/2) < this.size) {
            fill('#39FF14')
            rect(this.x, this.y, this.size*2, this.size)
            fill(0)
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = true
        } else {
            fill('#39FF14')
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = false
        }
    }

    click(){
        if (this.hover == true && mouseIsPressed) {
            return true
        }
    }

}


class PreviousLevel {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.hover = false;
    }

    show(){
        if (dist(mouseX, mouseY, this.x+this.size, this.y+this.size/2) < this.size) {
            fill('#39FF14')
            rect(this.x, this.y, this.size*2, this.size)
            fill(0)
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = true
        } else {
            fill('#39FF14')
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = false
        }
    }

    click(){
        if (this.hover == true && mouseIsPressed) {
            return true
        }
    }

}


class RefreshLevel {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.hover = false;
    }

    show(){
        if (dist(mouseX, mouseY, this.x+this.size, this.y+this.size/2) < this.size) {
            fill('#39FF14')
            rect(this.x, this.y, this.size*2, this.size)
            fill(0)
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = true
        } else {
            fill('#39FF14')
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.hover = false
        }
    }

    click(){
        if (this.hover == true && mouseIsPressed) {
            return true
        }
    }

}
