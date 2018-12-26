
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
// var count = 1; the animations play with each decrease in count
win_jsS = winner(count);

// ---------------------------
let spritesheet;

let anim_idle = [];
let anim_wave = [];
let anim_chosen = [];

function preload(){
    idle = loadImage('testPics/sprites/idle-long.png')
    wave = loadImage('testPics/sprites/wave.png')
    chosen = loadImage('testPics/sprites/chosen.png')
    font = loadFont('testPics/sprites/VeraMono.ttf');
}

var start = false; //occurs when you've clicked on the button for the first time
let holograms = [];
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
let end = true;
let interv1;
let interv2;
let myVar2;

function josephus(){
    if(1 < ll.len && begin == true){
    myVar2 = living[current.next.value-1]
    living[current.next.value-1] = living[current.next.value-1]+"x"
    console.log(living)
    ll.removeNode(current, current.next)
    current = current.next
} else {
    end = true;
}}

function setup(){
    myVar2 = undefined;
    // end = false;
    begin = false;
    createCanvas(2400, 1200);
    textSize(25);
    textFont(font);


    if (start == true && count == 6){

    for (var i = 0; i < 185; i++) {
    let img = idle.get((i*384),0, 384, 305);
    anim_idle.push(img);
    }

    for (var i = 0; i < 20; i++) {
    let img = wave.get((i*1100),0, 1100, 875);
    anim_wave.push(img);
    }

    for (var i = 0; i < 67; i++) {
    let img = chosen.get((i*1100),0, 1100, 875);
    anim_chosen.push(img);
}
}
if (start == true){
    for (var i = 0; i < totalPoints; i++) {
        var radius = rM+totalPoints*(rM/5)
        var x = drawPoint(radius, i, totalPoints)[0]+1000
        var y = drawPoint(radius, i, totalPoints)[1]+500
        holograms[i] = new Sprite(anim_idle, anim_wave, anim_chosen, x, y, radians(0), random(.1, .8), i)
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

    if (count > 0){
        win_jsS = winner(count);
        count = count - 1;
        buttonS.innerHTML = count;
        totalPoints = win_jsS[0];
        start = true;
        setup();
    } else if (count > -1) {
        count = 7;
        totalPoints = 41;
        setup();
    }
interv1 = setInterval(josephus, 1500);
});

// interv2 = setInterval(draw, 1000)

function draw(){
    background(0);
    fill('#39FF14');
    text('Where Should I Stand?',100,100)
    text(win_jsS[2],1150,600)
    for (let hologram of holograms) {
        hologram.show();
        hologram.animate();
        if (hologram.begin) {
            begin = true;
        }
        if (myVar2 != undefined){
        holograms[myVar2-1].out = true;
    }}
    textSize(25);
}
