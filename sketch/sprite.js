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
        this.idle = true;
        this.wave = false;
        this.chosen = false;
        this.freeze = 0;
        this.speedStored = this.speed;
    }



playIdle(){
    let z = 65;
    let index = floor(this.index) % this.len_idle
    image(this.animation_idle[index],this.x,this.y);
    fill('#39FF14');
    text(this.n,this.x+175,this.y+z)
}

playWave(){
    let z = 65;
    let index = floor(this.index) % this.len_wave
    if (this.wave == true && index < 11){
        image(this.animation_wave[index],this.x,this.y); //11
        fill('#39FF14');
        text(this.n,this.x+175,this.y+z)
        if (index == 10){
            this.speed = this.freeze
            image(this.animation_wave[10],this.x,this.y); //11
        }
        if (this.chosen){
            this.speed = this.speedStored
            image(this.animation_wave[index],this.x,this.y); //11
            if (index == this.len_wave-1){
                playChosen();
            }
        }
    }
    if (this.wave == false){
            this.speed = this.speedStored
            image(this.animation_wave[index],this.x,this.y); //11
        if (index == this.len_wave-1){
            this.idle = true
        }
    }
}

playChosen(){
    console.log(this.chosen)
}

show(){
    // if (this.chosen == true){
    //     this.playChosen();
    // }
    if (dist(this.x+175, this.y+130, mouseX, mouseY) > 100) {
        this.wave = false
    } else {
        this.idle = false;
        this.wave = true
    }
    if(this.wave == true && mouseIsPressed){
        this.chosen = true
    }
    if (this.idle == true){
        this.playIdle();
    } else {
        this.playWave();
    }
}

    animate(){
        this.index += this.speed;
    }

}
