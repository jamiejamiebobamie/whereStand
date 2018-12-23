class Sprite {
    constructor(animation, x, y, rotation, speed){
        this.speed = speed;
        this.animation = animation;
        this.rotation = rotation;
        this.index = 0;
        this.len = this.animation.length
        this.x = x;
        this.y = y;
    }

    show(){
        rotate(this.rotation);
        image(this.animation[this.index % this.len],this.x,this.y);
    }

    animate(){
        this.index += this.speed;
    }
}
