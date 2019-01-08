
function winner(num){
    // Calculating the 'winner' of the Josephus Problem.
    // Returns the number of people playing, the winner, the winner's number in binary.
    // The number of people playing gets progressively larger.
    let range = {
        9: [3],
        8: [4,5,6,7,9],
        7: [10,11,12,13,14],
        6: [15,16,17,18,19],
        5: [20,21,22,23,24],
        4: [25,26,27,28,29],
        3: [30,31,32,33,34],
        2: [35,36,37,38,39,40],
        1: [41]
    }
    let n = range[num][Math.floor(Math.random() * range[num].length)];
    let b = convertToBinary(n);
    let p = findHighestPow(b);
    let winner = ((2*(n - p))+1);
    return ([n, winner, truncateBinary(convertToBinary(winner))]);
}

// ---------------------------
var title = document.getElementById('title');
var forward = document.getElementById('forward');
var re_up = document.getElementById('re_up');
var back = document.getElementById('back');
let win_jsS;
var count = 9;
win_jsS = winner(count);

// ---------------------------
let spritesheet;

// let spec_anim_idle = [];

let anim_idle = [];
let anim_wave = [];
let anim_chosen = [];

let titleIdle = [];
let titleWave = [];
let titleChosen = [];
let titlePoint1 = [];
let titlePoint2 = [];
let titlePoint3 = [];
let titlePoint4 = [];


function preload(){
    // specIdle = loadImage('testPics/sprites/spec-spritesheet-idle-1200by675.png')
    idle = loadImage('testPics/sprites/idle150.png')
    wave = loadImage('testPics/sprites/wave150.png')
    chosen = loadImage('testPics/sprites/chosen150.png')
    font = loadFont('testPics/sprites/VeraMono.ttf');
    title_idle = loadImage('testPics/sprites/SpriteSheet_title-idle-58-471x500.png')
    title_wave = loadImage('testPics/sprites/SpriteSheet_title-wave-18-471x500.png')
    title_chosen = loadImage('testPics/sprites/SpriteSheet_title-chosen-87-471x500.png')
    title_point1 = loadImage('testPics/sprites/SpriteSheet_title-point1-51-471x500.png')
    title_point2 = loadImage('testPics/sprites/SpriteSheet_title-point2-49-471x500.png')
    title_point3 = loadImage('testPics/sprites/SpriteSheet_title-point3-38-471x500.png')
    title_point4 = loadImage('testPics/sprites/SpriteSheet_title-point4-41-471x500.png')
}

var start = false; //occurs when you've clicked on the button for the first time. intend to phase-out.
let holograms;
// let dots = [];
// let spectators = [];
var rM = 100; //radius modifier
var totalPoints = 41

function drawPoint(r, currentPoint, totalPoints) {
    var theta = ((Math.PI*2) / totalPoints);
    var angle = (theta * currentPoint+1);
    var x = (r * Math.cos(angle));
    var y = (r * Math.sin(angle));
    return [x, y];
}

let living;
let current;
let ll; // linkedList
let alive;
let begin; //occurs when you've clicked on a hologram
let end;
let interv1;
// let interv2;
let myVar2;
let guess;
let centerX = 500;
let centerY = 530;
// let outNum;

function josephus(){
    if(1 < ll.len && begin == true){
    myVar2 = living[current.next.value-1]
        if (holograms[myVar2-1].out == true){
            living[current.next.value-1] = living[current.next.value-1]+"x"
            ll.removeNode(current, current.next)
            current = current.next
            }
    } else if (1 == ll.len) {
    end = true;
}}

function setup(){
    myVar2 = undefined;
    end = false;
    begin = false;
    createCanvas(2400, 1200);
    textSize(25);
    textFont(font);
//
// if (start == false && count == 7){
//     for (var i = 0; i < 117; i++) {
//         let img = specIdle.get((i*1200), 0, 1200, 675);
//         spec_anim_idle.push(img);
//     }
// console.log(true)
// }

    //
    // if (start == true && count == 6){

    for (var i = 0; i < 185; i++) {
        let img = idle.get((i*150),0, 150, 119);
        anim_idle.push(img);
    }

    for (var i = 0; i < 20; i++) {
        let img = wave.get((i*150),0, 150, 119);
        anim_wave.push(img);
    }

    for (var i = 0; i < 67; i++) {
        let img = chosen.get((i*150),0, 150, 119);
        anim_chosen.push(img);
    }

    for (var i = 0; i < 58; i++) {
        let img = title_idle.get((i*471),0, 471, 500);
        titleIdle.push(img);
    }

    for (var i = 0; i < 18; i++) {
        let img = title_wave.get((i*471),0, 471, 500);
        titleWave.push(img);
    }

    for (var i = 0; i < 87; i++) {
        let img = title_chosen.get((i*471),0, 471, 500);
        titleChosen.push(img);
    }

    for (var i = 0; i < 51; i++) {
        let img = title_point1.get((i*471),0, 471, 500);
        titlePoint1.push(img);
    }

    for (var i = 0; i < 49; i++) {
        let img = title_point2.get((i*471),0, 471, 500);
        titlePoint2.push(img);
    }

    for (var i = 0; i < 38; i++) {
        let img = title_point3.get((i*471),0, 471, 500);
        titlePoint3.push(img);
    }

    for (var i = 0; i < 41; i++) {
        let img = title_point4.get((i*471),0, 471, 500);
        titlePoint4.push(img);
    }

    refreshGame();
    refreshTitle();

//     titleSprites = []
// for (var i = 0; i < 5; i++){
//     let x = random(0, 1700);
//     let y = random(100, 700);
//     titleSprites[i] = new TitleSprite(titleIdle, titleWave, titleChosen, titlePoint1, titlePoint2, titlePoint3, titlePoint4, x, y, random(.5, .7))
// }
// }

// if (start == true){
//
// //     for (var i = 0; i < 1; i++) {
// //     spectators[i] = new SpectatorSprite(spec_anim_idle, spec_anim_idle, spec_anim_idle, spec_anim_idle, spec_anim_idle, 750, 290, .4)
// // }
//
//     for (var i = 0; i < totalPoints; i++) {
//         var radius = totalPoints*10
//         var x = drawPoint(radius, i, totalPoints)[0]+centerX
//         var y = drawPoint(radius, i, totalPoints)[1]+centerY
//         holograms[i] = new HologramSprite(anim_idle, anim_wave, anim_chosen, x, y, radians(0), random(.1, .8), i)
//     }
//
//     // for (var i = 0; i < totalPoints; i++) {
//     //     fill(255)
//     //     // var radius = k+totalPoints/k
//     //     var radius = 10*totalPoints - 30;
//     //     var x = drawPoint(radius, i, totalPoints)[0]+centerX+70
//     //     var y = drawPoint(radius, i, totalPoints)[1]+centerY+60
//     //     dots[i] = new Dot(x, y, i);
//     // } //to include "not-out" dots that turn to black / transparent when the corresponding index becomes out.
//
//     // tracer = new Tracer();
//
//     }
//
//     ll = new LinkedList();
//     alive = win_jsS[0]
//     living = []
//
//     for (let i = 1; i <= alive; i++){
//         ll.addNode(i)
//         living.push(i)
//     }
//
//     current = ll.head;

}

function refreshTitle(){
    end = false;
    begin = false;
    titleSprites = []
for (var i = 0; i < 5; i++){
    let x = random(0, 1700);
    let y = random(100, 700);
    titleSprites[i] = new TitleSprite(titleIdle, titleWave, titleChosen, titlePoint1, titlePoint2, titlePoint3, titlePoint4, x, y, random(.5, .7))
}
}

function refreshGame(){
    holograms = [];
    myVar2 = undefined;
    end = false;
    begin = false;
    // background(0);


    if (start == true){

    //     for (var i = 0; i < 1; i++) {
    //     spectators[i] = new SpectatorSprite(spec_anim_idle, spec_anim_idle, spec_anim_idle, spec_anim_idle, spec_anim_idle, 750, 290, .4)
    // }

        for (var i = 0; i < totalPoints; i++) {
            var radius = totalPoints*10
            var x = drawPoint(radius, i, totalPoints)[0]+centerX
            var y = drawPoint(radius, i, totalPoints)[1]+centerY
            holograms[i] = new HologramSprite(anim_idle, anim_wave, anim_chosen, x, y, radians(0), random(.1, .8), i)
        }

        // for (var i = 0; i < totalPoints; i++) {
        //     fill(255)
        //     // var radius = k+totalPoints/k
        //     var radius = 10*totalPoints - 30;
        //     var x = drawPoint(radius, i, totalPoints)[0]+centerX+70
        //     var y = drawPoint(radius, i, totalPoints)[1]+centerY+60
        //     dots[i] = new Dot(x, y, i);
        // } //to include "not-out" dots that turn to black / transparent when the corresponding index becomes out.

        // tracer = new Tracer();

        }

        ll = new LinkedList();
        alive = win_jsS[0]
        living = []

        for (let i = 1; i <= alive; i++){
            ll.addNode(i)
            living.push(i)
        }

        current = ll.head;
}


// ---------------------------

title.addEventListener("click", function(){
    start = false;
    count = 9;
    forward.innerHTML = 'next level';
    refreshTitle();
    refreshGame();
});


forward.addEventListener("click", function(){

    if (count > 2){
        forward.innerHTML = 'next level';
        count = count - 1;
        win_jsS = winner(count);
        totalPoints = win_jsS[0];
        start = true;
        refreshGame();
    } else if (count > 1) {
        forward.innerHTML = 'replay';
        count = count - 1;
        win_jsS = winner(count);
        totalPoints = win_jsS[0];
        start = true;
        refreshGame();
    } else {
        forward.innerHTML = 'next level';
        count = 8;
        win_jsS = winner(count);
        totalPoints = win_jsS[0];
        start = true;
        refreshGame();
    }

interv1 = setInterval(josephus, 800);

});

re_up.addEventListener("click", function(){
        win_jsS = winner(count);
        totalPoints = win_jsS[0];
        start = true;
        refreshGame();

interv1 = setInterval(josephus, 800);

});

back.addEventListener("click", function(){

    if (count < 8){
        count = count + 1;
        win_jsS = winner(count);
        totalPoints = win_jsS[0];
        start = true;
        refreshGame();
    }

interv1 = setInterval(josephus, 800);
});


let pointer;

function draw(){
    background(0);
    fill('#39FF14');
    if (start == false){
        text('Where Should I Stand?',50,100)
        for (let sprite of titleSprites) {
            sprite.show();
            sprite.animate();
            // if (sprite.wave == true){
            //     sprite.point = true
            // } else{
            //     sprite.point = false;
            //     }
            }
    } else {
        text("level: " + ( 9 - count ),50,100)
        text("winner: " + win_jsS[2],50,150)
        if (begin == true){
        text('guess:  ' + guess, 50 , 200)

        // TRACER CLASS TO BETTER SHOW THE PROGRESSION OF OUTS
        //
        // if (myVar2 != undefined && end == false && myVar2 != outNum){
        //     tracer.beginX = tracer.x;
        //     tracer.beginY = tracer.y;
        //     tracer.endX = dots[myVar2-1].x
        //     tracer.endY = dots[myVar2-1].y
        //     tracer.change = true;
        //     outNum = myVar2;
        //     }
        //
        // tracer.chacha()
        // tracer.show()
        // console.log(tracer.change, tracer.endX, tracer.endY)

        } else {
        textSize(25);
        text('Every other person is out.',1100,275)
        text('To win, pick the last man standing.',1100,350)
        text('The winner\'s place is written',1100,425)
        text('in binary to the left.',1150,475)
        }
        if ( end == true){
            if (win_jsS[1] == guess) {
                textSize(35);
                text('You\'re right!',1100, 400)
                text('The number ' + win_jsS[1] + ' is ' + win_jsS[2] + ' in binary.',1100, 475)
            } else{
                textSize(35);
                text('Try again.',1100, 275)
                textSize(25);
                text('In binary, you read the numbers from right to left',1100, 350)
                text('and add up the values as you go.',1150, 400)
                text('The values are powers of two:',1100, 475)
                text('32, 16, 8, 4, 2, 1.',1150, 525)
                text('If there\'s a 1, add that value to the number.',1100, 600)
                text('If there\'s a 0, don\'t add that value.',1100, 650)
                text('1 = 1, 10 = 2, 11 = 3, 100 = 4, and so on!',1100, 725)
                text('(Hint: Don\'t guess evens.)',1100, 800)
            }
    }

    for (let hologram of holograms) {
        hologram.show();
        hologram.animate();
        if (hologram.begin && begin == false) {
            guess = hologram.n
            begin = true;
        }
        if (myVar2 != undefined){
        holograms[myVar2-1].out = true;
    }
        if (end == true){
            holograms[win_jsS[1]-1].winner = true;
        }
}

// for (let dot of dots) {
//     dot.show()
// if (myVar2 != undefined){
//     dots[myVar2-1].out = true;
//     }
// }


// for (let spectator of spectators){
//     noTint();
// spectator.show();
// spectator.animate();
// }
textSize(25);
}
}
