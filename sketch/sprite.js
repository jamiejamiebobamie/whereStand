class Sprite {
    constructor(idle, wave, x, y, rotation, speed, n){
        this.speed = speed;
        this.animation_idle = idle;
        this.animation_wave = wave;
        this.rotation = rotation;
        this.index = 0;
        this.len_idle = this.animation_idle.length
        this.len_wave = this.animation_wave.length
        this.x = x;
        this.y = y;
        this.n = n +1;
    }

    show(){
        // rotate(this.rotation);
        if (dist(this.x+175, this.y+130, mouseX, mouseY) > 100) {
        let z = 65;
        let index = floor(this.index) % this.len_idle
        image(this.animation_idle[index],this.x,this.y);
        fill('#39FF14');
        text(this.n,this.x+175,this.y+z)
        console.log(dist(this.x+175, this.y+z, mouseX, mouseY))
    } else {
        let z = 65;
        let index = floor(this.index) % this.len_wave
        image(this.animation_wave[index],this.x,this.y);
        fill('#39FF14');
        text(this.n,this.x+175,this.y+z)
        console.log(dist(this.x+175, this.y+z, mouseX, mouseY))
    }
    }

    animate(){
        this.index += this.speed;
    }
}
