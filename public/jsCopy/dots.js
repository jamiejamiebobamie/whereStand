class Dot {
    constructor(x, y, n, starter){
        this.x = x+71;
        this.y = y+59;
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
        ellipse(this.x, this.y, 5, 5);
    }
}

}
