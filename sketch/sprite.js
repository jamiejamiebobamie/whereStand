class Sprite {
    constructor(animation, x, y, rotation, speed, n){
        this.speed = speed;
        this.animation = animation;
        this.rotation = rotation;
        this.index = 0;
        this.len = this.animation.length
        this.x = x;
        this.y = y;
        this.n = n +1;
    }

    show(){
        // rotate(this.rotation);
        let z = 65;
        let index = floor(this.index) % this.len
        image(this.animation[index],this.x,this.y);
        fill('#39FF14');
        text(this.n,this.x+175,this.y+z)
    }

    animate(){
        this.index += this.speed;
    }
}
