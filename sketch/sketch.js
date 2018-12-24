function convertToBinary(num){
    //Takes in an int and returns the number in binary of base 2.
    let number = num
    let bi = "";
    if (number >= 256){
        bi += '1'
        number -= 256
    } else {
        bi += '0'
    }
    if (number >= 128){
        bi += '1'
        number -= 128
    } else {
        bi += '0'
    }
    if (number >= 64){
        bi += '1'
        number -= 64
    } else {
        bi += '0'
    }
    if (number >= 32){
        bi += '1'
        number -= 32
    } else {
        bi += '0'
    }
    if (number >= 16){
        bi += '1'
        number -= 16
    } else {
        bi += '0'
    }
    if (number >= 8){
        bi += '1'
        number -= 8
    } else {
        bi += '0'
    }
    if (number >= 4){
        bi += '1'
        number -= 4
    } else {
        bi += '0'
    }
    if (number >= 2){
        bi += '1'
        number -= 2
    } else {
        bi += '0'
    }
    if (number >= 1){
        bi += '1'
        number -= 1
    } else {
        bi += '0'
    }
    if (number != 0){
        return "The number entered is too high. Please enter an integer equal to 511 or below."
    }
    return bi
}
//
// function convertFromBinary(num){
//     // Takes in a number in binary of base 2 and returns an integer.
//     let dec = 0
//     let numb = "" + num
//     if (numb[0] != "1" && numb[0] != "0"){
//         return ("Please enter a number in binary.")
//     }
//     if (len(numb) > 9){
//         return "Sorry this function only converts binary numbers that are equal to 511 or below."
// }
//     numb = (9 - numb.length)*"0" + numb;
//     if (numb[0] == "1"){
//         dec += 256;
//     }
//     if (numb[1] == "1"){
//         dec += 128;
//     }
//     if (numb[2] == "1"){
//         dec += 64;
//     }
//     if (numb[3] == "1"){
//         dec += 32;
//     }
//     if (numb[4] == "1"){
//         dec += 16;
//     }
//     if (numb[5] == "1"){
//         dec += 8;
//     }
//     if (numb[6] == "1"){
//         dec += 4;
//     }
//     if (numb[7] == "1"){
//         dec += 2;
//     }
//     if (numb[8] == "1"){
//         dec += 1;
//     }
//     return dec
// }
//
//
function findHighestPow(num){
    // Takes in a number in binary of base 2 and returns the highest power.
    let numb = ''+ num
    if (numb[0] != "1" && numb[0] != "0"){
        return ("Please enter a number in binary.")
    }

    if (numb.length > 9){
        return "Sorry this function only converts binary numbers that are equal to 511 or below."
    }

    if (numb[0] == "1"){
        return 256;
    }
    if (numb[1] == "1"){
        return 128;
    }
    if (numb[2] == "1"){
        return 64;
    }
    if (numb[3] == "1"){
        return 32;
    }
    if (numb[4] == "1"){
        return 16;
    }
    if (numb[5] == "1"){
        return 8;
    }
    if (numb[6] == "1"){
        return 4
    }
    if (numb[7] == "1"){
        return 2;
    }
    if (numb[8] == "1"){
        return 1;
    }
}
//
function truncateBinary(num){
    // take in a binary number and remove the leading zeroes.
    for (var i = 0; i < num.length; i++) {
        // console.log(i, typeof i);
        if (num[i] == 1)
            return num.slice(i);
    }
}
//
// function makeArrNums(num){
// var range = new Array(num);
// for (var i = 0; i < range.length; i++){
//     range[i] = i+1;
//     }
//     return range;
// }
//
function winner(num){
    // Calculating the 'winner' of the Josephus Problem.
    // Returns the number of people playing, the winner, the winner's number in binary.
    //The number of people playing gets progressively larger.
    let range = {
        7: [4,5,6,7,9],
        6: [10,11,12,13,14],
        5: [15,16,17,18,19],
        4: [20,21,22,23,24],
        3: [25,26,27,28,29],
        2: [28,29,30,31,32,33],
        1: [34,35,36,37,38,39,40],
    }
    let n = range[num][Math.floor(Math.random() * range[num].length)];
    let b = convertToBinary(n);
    let p = findHighestPow(b);
    let winner = ((2*(n - p))+1);
    return ([n, winner, truncateBinary(convertToBinary(winner))]);
}
//
var buttonS = document.getElementById('changeS');
var peopleS = document.getElementById('peopleS');
var winS = document.getElementById('winnerS');
// // var binaryS = document.getElementById('binaryS');
let win_jsS;
var count = 7;
//
win_jsS = winner(count);

peopleS.innerHTML = win_jsS[0];
winS.innerHTML = [win_jsS[1],win_jsS[2]];

//
// function drawPoint(r, currentPoint, totalPoints) {
//     var theta = ((Math.PI*2) / totalPoints);
//     var angle = (theta * currentPoint);
//     var x = (r * Math.cos(angle));
//     var y = (r * Math.sin(angle));
//     return [x, y];
// }
//
// // https://stackoverflow.com/questions/24273990/calculating-evenly-spaced-points-on-the-perimeter-of-a-circle/24274611
//
// totalPoints = win_jsS[0];
// var center = [500, 500];
// var rM = 80; //radius modifier
//
// for (var i = 1; i <= totalPoints  ; i++) {
//     var radius = rM+totalPoints*(rM/10)
//     var x = drawPoint(radius, i, totalPoints)[0]+ center[0];
//     var y = drawPoint(radius, i, totalPoints)[1]+ center[1]
// };
//
//

//
// console.log(current.value)

// type php -S localhost:11000 into concole to launch

let spritesheet;

let anim = [];


function preload(){
    spritesheet = loadImage('testPics/sprites/idle-long.png')
    font = loadFont('testPics/sprites/VeraMono.ttf');
}

// 20images
var start = false;
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

function setup(){
    createCanvas(2400, 1200);
    textFont(font);
    textSize(25);
    if (start == true){
    for (var i = 0; i < 185; i++) {
    // spritesheet.resize((spritesheet.width/5),(spritesheet.height/5));
    let img = spritesheet.get((i*384),0, 384, 305);
    anim.push(img);
    }
    for (var i = 0; i < totalPoints; i++) {
        var radius = rM+totalPoints*(rM/5)
        // var radius = totalPoints+rM
        var x = drawPoint(radius, i, totalPoints)[0]+1000
        var y = drawPoint(radius, i, totalPoints)[1]+500
        holograms[i] = new Sprite(anim, x, y, radians(0), random(.1, .8), i)
        // console.log(holograms[i].n)
}
}
}

buttonS.addEventListener("click", function(){
    if (count > 0){
    win_jsS = winner(count);
    peopleS.innerHTML = win_jsS[0];
    winS.innerHTML = win_jsS[1];
    // binaryS.innerHTML = win_jsS[2];
    count = count - 1;
    buttonS.innerHTML = count;
    totalPoints = win_jsS[0];
    start = true;
    // remove();
    setup();

} else if (count > -1) {
    peopleS.innerHTML = '41';
    winS.innerHTML = '19';
    // binaryS.innerHTML = '10011';
    count = 7;
    totalPoints = 41;
    setup();
    }
});

function draw(){
    background(0);
    // rotate(radians(60))
    for (let hologram of holograms) {
        hologram.show();
        hologram.animate();
    }
}
