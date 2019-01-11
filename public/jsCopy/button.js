class Button {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.hover = false;
        this.flasher = false;
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

    flash(){
        if (this.flasher == true){
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
//     if (this.hover == true && mouseReleased) {
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
        this.flasher = true;
        this.flashOn = true;
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
            this.flasher == false;
            return true
        }
    }

    flash(){
        if (this.flashOn){
        if (this.flasher){
            fill('#39FF14')
            rect(this.x, this.y, this.size*2, this.size)
            fill(0)
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.flasher = false;
        } else {
            fill('#39FF14')
            text(this.label, this.x+this.size/5, this.y+this.size/1.5)
            this.flasher = true;
        }

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
            this.flasher == false;
            return true
        }
    }

    flash(){
        if (this.flasher == true){
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

class NextLevel {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.hover = false;
        this.flasher = false;
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
            this.flasher == false;
            return true
        }
    }

    flash(){
        if (this.flasher == true){
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
        this.flasher = false;
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
            this.flasher == false;
            return true
        }
    }

    flash(){
        if (this.flasher == true){
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


class Help {
    constructor(label, x, y){
        this.label = label;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.hover = false;
        this.flasher = false;
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
            this.flasher == false;
            return true
        }
    }

    flash(){
        if (this.flasher == true){
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
