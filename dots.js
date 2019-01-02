class Dot {
    constructor(x, y, n){
        this.x = x;
        this.y = y;
        this.n = n;
        this.out = false;
    }
    //
    // opac(){
    //     tint(10, 255, 10, 255 - (51*this.n))
    // }

    show(){
        if (this.out == false){
        tint(255)
        ellipse(this.x, this.y, 3, 3);
    } else {
        // tint(255)
        // ellipse(this.x, this.y, 3, 3);
    }
}
}
