class HologramSprite {
    constructor(idle, wave, chosen, x, y, rotation, speed, n){
        this.speed = speed;
        this.animation_idle = idle;
        this.animation_wave = wave;
        this.animation_chosen = chosen;
        this.rotation = rotation;
        this.index = 0;
        this.indexChosen = 0;
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
        this.change = false;
        this.freeze = 0;
        this.speedStored = this.speed;
        this.k = 55; // constant to add to this.n's x
        this.l = 60; // constant to add to this.n's y
        this.green = 255
        this.winner = false;
    }

fromGreenHolo(inp){
    let x = random(0, this.green);
    let y = inp;
    if(inp != x) {
        inp = lerp(y, x, .5)
    } else {
        this.fromGreen(inp)
    }
    return inp
} //attempting to make a recursive function that calls itself each time the target number is reached

fromGreenText(inp){
    let x = random(0, 50);
    let y = inp;
    if(inp != x) {
        inp = lerp(y, x, .5)
    } else {
        this.fromGreen(inp)
    }
    return inp
} //attempting to make a recursive function that calls itself each time the target number is reached

setIndex(){
    if (this.change == true){
    this.index = 0;
    this.change = false;
}}

playIdle(){
    if (this.winner != true){
        textSize(25);
        fill(0, this.fromGreenText(this.green), 0, this.fromGreenText(this.green));
        text(this.n,this.x+this.k,this.y+this.l)
    } else {
        textSize(70);
        fill(0, 255, 0, this.fromGreenHolo(this.green));
        text(this.n,this.x+this.k+this.k,this.y+this.l+this.l)
    }
    let z = 65;
    let index = floor(this.index) % this.len_idle
    image(this.animation_idle[index],this.x,this.y);
}

playWave(){
    let z = 65;
    let index = floor(this.index) % this.len_wave
    textSize(55);
    fill('#39FF14');
    text(this.n,this.x+this.k,this.y+100)
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
            this.speed = 1//this.speedStored
            image(this.animation_wave[index],this.x,this.y); //11
        if (index == 19){
            this.speed = this.speedStored
            this.idle = true
        }
    }
}

playChosen(){
    let z = 65;
    let index = floor(this.indexChosen) % this.len_chosen
    // console.log(index)
    textSize(25);
    fill('#39FF14');
    text(this.n,this.x+this.k,this.y+this.l)
    this.speed = 1;
    image(this.animation_chosen[index],this.x,this.y); //11
    if (index == 66){
        // this.begin = true;
        this.speed = this.freeze;
        image(this.animation_chosen[66],this.x,this.y); //11
    }}

show(){
    push();
rotate(this.rotation);
// this.setIndex() //how do i make a closure to reset the index so that the anim is played properly from the beginning? i could make an index for each anim...
tint(this.fromGreenHolo(this.green), this.green, this.fromGreenHolo(this.green), this.fromGreenHolo(this.green))
if(this.out == false){
    if (dist(this.x+80, this.y+70, mouseX, mouseY) > 25) {
        this.wave = false
    } else {
        this.wave = true;
        this.idle = false;
    }
    if(this.wave == true && mouseIsPressed){
        this.chosen = true;
        this.begin = true;
        this.wave = false;
        // console.log(this.chosen)
    }
    if (this.idle == true){
        this.playIdle();
    } else if (this.idle == false && this.chosen == false && this.begin == false){
        this.playWave();
    } else {
        this.playIdle()
        // this.playChosen();
    }
} else {
    this.playChosen();

    // if (this.winner == true){
    //     textSize(55);
    //     fill('#39FF14');
    //     text(this.n,this.x+this.k,this.y+50)
    //     this.playIdle()
    // }
}
pop();
}



    animate(){
        if (this.out == true){
            this.indexChosen += this.speed;
        } else {
            this.index += this.speed;
        }
}

}
