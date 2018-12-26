class Sprite {
    constructor(idle, wave, chosen, x, y, rotation, speed, n){
        this.speed = speed;
        this.animation_idle = idle;
        this.animation_wave = wave;
        this.animation_chosen = chosen;
        this.rotation = rotation;
        this.index = 0;
        this.len_idle = this.animation_idle.length
        this.len_wave = this.animation_wave.length
        this.len_chosen = this.animation_chosen.length
        this.x = x;
        this.y = y;
        this.n = n +1;
        this.idle = true;
        this.wave = false;
        this.chosen = false;
        this.out = false;
        this.begin = false;
        this.freeze = 0;
        this.speedStored = this.speed;
    }



playIdle(){
    let z = 65;
    let index = floor(this.index) % this.len_idle
    image(this.animation_idle[index],this.x,this.y);
    textSize(25);
    fill('#39FF14');
    text(this.n,this.x+175,this.y+z)
}

playWave(){
    let z = 65;
    let index = floor(this.index) % this.len_wave
    textSize(55);
    fill('#39FF14');
    text(this.n,this.x+175,this.y+z)
    if (this.wave == true && index < 11){
        this.speed = 1
        image(this.animation_wave[index],this.x,this.y); //11
        if (index == 10){
            this.speed = this.freeze
            image(this.animation_wave[10],this.x,this.y); //11
        }
        // if (this.chosen){
        //     this.speed = this.speedStored
        //     image(this.animation_wave[index],this.x,this.y); //11
        //     if (index == this.len_wave-1){
        //         playChosen();
        //     }
        // }
    }
    if (this.wave == false){
            this.speed = this.speedStored
            image(this.animation_wave[index],this.x,this.y); //11
        if (index == 19){
            this.idle = true
        }
    }
}

playChosen(){
    let z = 65;
    let index = floor(this.index) % this.len_chosen
    // console.log(index)
    textSize(55);
    fill('#39FF14');
    text(this.n,this.x+175,this.y+z)
    this.speed = .6
    image(this.animation_chosen[index],this.x,this.y); //11
    if (index == 66){
        this.begin = true;
        this.speed = this.freeze;
        image(this.animation_chosen[66],this.x,this.y); //11
    }}

show(){
if(this.out == false){
    if (dist(this.x+175, this.y+130, mouseX, mouseY) > 100) {
        this.wave = false
    } else {
        this.wave = true;
        this.idle = false;
    }
    if(this.wave == true && mouseIsPressed){
        this.chosen = true
        // console.log(this.chosen)
    }

    if (this.idle == true){
        this.playIdle();
    } else if (this.idle == false && this.chosen == false){
        this.playWave();
    } else {
        this.playChosen();
    }
} else{
    //death anim
}
}

    animate(){
        this.index += this.speed;
    }

}
