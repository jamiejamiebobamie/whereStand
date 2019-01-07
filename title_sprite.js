class TitleSprite {
    constructor(idle, wave, chosen, point1, point2, point3, point4, x, y, speed){
        this.speed = speed;
        this.animation_idle = idle;
        this.animation_wave = wave;
        this.animation_chosen = chosen;
        this.animation_point1 = point1;
        this.animation_point2 = point2;
        this.animation_point3 = point3;
        this.animation_point4 = point4;
        this.index = 0;
        this.indexChosen = 0;
        this.len_idle = this.animation_idle.length
        this.len_wave = this.animation_wave.length
        this.len_chosen = this.animation_chosen.length
        this.x = x;
        this.y = y;
        this.scale = random(0.3, 1) //the larger the y, the closer, the bigger the scale, 1x being the largest
        this.idle = true;
        this.wave = false;
        this.chosen = false;
        this.point = false;
        this.freeze = 0;
        this.speedStored = this.speed;
        this.green = 255
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


playIdle(){
let index = floor(this.index) % this.len_idle;

push();
scale(this.scale)
image(this.animation_idle[index],this.x,this.y); //11
pop();
    }

playWave(){
    let index = floor(this.index) % this.len_wave
    image(this.animation_wave[index],this.x,this.y); //11
}

playChosen(){
    let index = floor(this.indexChosen) % this.len_chosen
    image(this.animation_chosen[index],this.x,this.y); //11
    }


show(){
noTint();
    this.playIdle()

}



animate(){
    this.index += this.speed;
        }

}
