// type php -S localhost:11000 into concole to launch

let spritesheet;

let anim = [];


function preload(){
    spritesheet = loadImage('testPics/sprites/wave.png')
}

// 20images

let holograms = [];

function setup(){
    createCanvas(1000, 1000);
    for (var i = 0; i < 20; i++) {
    // spritesheet.resize((spritesheet.width/5),(spritesheet.height/5));
    let img = spritesheet.get((i*1100),0, 1100, 875);
    // let img = spritesheet.get();
    anim.push(img);
    }
    for (var i = 0; i < 4; i++) {
    holograms[i] = new Sprite(anim, 50, 50*i-200, radians(360/4), 1)
}
    console.log(anim)
}

function draw(){
    background(0);
    for (let hologram of holograms){
    hologram.show();
    hologram.animate();
}
    // image(spritesheet, 300, -500);
    // image(anim[frameCount % 20],300,-500);
    // image(spritesheet, 0, 0, img.width/30, img.height/30);
}
