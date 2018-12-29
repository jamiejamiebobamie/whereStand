class SpectatorSprite {
    constructor(idle, point1, point2, point3, point4, x, y, speed){
        this.speed = speed;
        this.animation_idle = idle;
        this.animation_point1 = point1;
        this.animation_point2 = point2;
        this.animation_point3 = point3;
        this.animation_point4 = point4;
        this.index = 0;
        this.indexPoint = 0;
        this.len_idle = this.animation_idle.length
        this.len_point1 = this.animation_point1.length
        this.len_point2 = this.animation_point2.length
        this.len_point3 = this.animation_point3.length
        this.len_point4 = this.animation_point4.length
        this.x = x;
        this.y = y;
        this.idle = true;
        this.point = false;
    }

playIdle(){
    let index = floor(this.index) % this.len_idle
    image(this.animation_idle[index],this.x,this.y);

}

playPoint(){

}

show(){
    this.playIdle()
}

animate(){
    this.index += this.speed;
        }
}
