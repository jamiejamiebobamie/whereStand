//TO-DO ::
//Implement an arched-line class that draws a dotted, arched line from one out person to the next person, with
//the apex of the arched line at the center of the the center of the circle and the (not-out) person who is between the two people out.
//The lines are stored in a 5-line queue in sketch.js (only the last five lines are displayed/kept in the queue).


function winner(num){
    // Calculating the 'winner' of the Josephus Problem.
    // Returns the number of people playing, the winner, the winner's number in binary.
    // The number of people playing gets progressively larger.
    let range = {
        7: [4,5,6,7,9],
        6: [10,11,12,13,14],
        5: [15,16,17,18,19],
        4: [20,21,22,23,24],
        3: [25,26,27,28,29],
        2: [28,29,30,31,32,33],
        1: [34,35,36,37,38,39,40],
        0: [41]
    }
    let n = range[num][Math.floor(Math.random() * range[num].length)];
    let b = convertToBinary(n);
    let p = findHighestPow(b);
    let winner = ((2*(n - p))+1);
    return ([n, winner, truncateBinary(convertToBinary(winner))]);
}

// ---------------------------
var buttonS = document.getElementById('changeS');
let win_jsS;
var count = 7;
win_jsS = winner(count);

// ---------------------------
let spritesheet;

// let spec_anim_idle = [];

let anim_idle = [];
let anim_wave = [];
let anim_chosen = [];

function preload(){
    // space = loadImage('testPics/space-img.jpg')
    // hex = loadImage('testPics/hexagon.png')
    // specIdle = loadImage('testPics/sprites/spec-spritesheet-idle-1200by675.png')
    idle = loadImage('testPics/sprites/idle150.png')
    wave = loadImage('testPics/sprites/wave150.png')
    chosen = loadImage('testPics/sprites/chosen150.png')
    font = loadFont('testPics/sprites/VeraMono.ttf');
}

var start = false; //occurs when you've clicked on the button for the first time. intend to phase-out.
let holograms = [];
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
let interv2;
let myVar2;
let guess;
let centerX = 500;
let centerY = 530;

function josephus(){
    if(1 < ll.len && begin == true){
    myVar2 = living[current.next.value-1]
        if (holograms[myVar2-1].out == true){
            living[current.next.value-1] = living[current.next.value-1]+"x"
            console.log(living)
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


    if (start == true && count == 6){

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

}

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
buttonS.addEventListener("click", function(){

    if (count >= 0){
        win_jsS = winner(count);
        count = count - 1;
        buttonS.innerHTML = count;
        totalPoints = win_jsS[0];
        start = true;
        setup();
    }

interv1 = setInterval(josephus, 800);

});

function draw(){
    background(0);
    // background(space);
    // background(hex);
    fill('#39FF14');
    if (start == false){
        text('Where Should I Stand?',50,100)
    } else {
        text(living,50,75)
        text("winner: " + win_jsS[2],50,150)
        if (begin == true){
        text('guess:  ' + guess, 50 , 200)//1120,513)
    } else {
        textSize(25);
        text('Every other person is out.',1100,275)
        text('To win, pick the last man standing.',1100,325)
        text('The winner\'s place is written',1100,375)
        text('in binary to the left.',1100,425)
    }
        if ( end == true){
        // text("winner: " + win_jsS[1],50,150)
            if (win_jsS[1] == guess) {
                textSize(35);
                text('You\'re right!',1100, 400)
                text('The number ' + win_jsS[1] + ' is ' + win_jsS[2] + ' in binary.',1100, 475)
            } else{
                textSize(35);
                text('Try again.',1100, 275)
                textSize(25);
                text('In binary, you read the numbers from right to left',1100, 350)
                text('and add up the values as you go.',1100, 400)
                text('The values are powers of two:',1100, 475)
                text('32, 16, 8, 4, 2, 1.',1150, 525)
                text('If there\'s a 1, add that value to the number.',1100, 575)
                text('If there\'s a 0, don\'t add that value.',1100, 625)
                text('1 = 1, 10 = 2, 11 = 3, 100 = 4, and so on!',1100, 675)
                text('(Hint: Don\'t guess evens.)',1100, 750)
            }
    } else {
        // text("winner: " + win_jsS[2],50,150)
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
// for (let spectator of spectators){
//     noTint();
// spectator.show();
// spectator.animate();
// }
textSize(25);
}
}
