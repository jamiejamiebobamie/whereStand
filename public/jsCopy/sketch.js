

var modal = document.getElementById('myModal');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let win_jsS; //array of ints. winning array = [number of people in the circle, number of winner's place, winner's place in binary]
var count = 9; // int. level counter (1-8)
win_jsS = winner(count); //function located in biNums.js. computes winner.
let living; //array of ints. contains the numbers still living in the circle (an x is concatenated to the element if dead)
let current; //object. the current head of the linkded list (changes based on if someone dies)
let starter = 0; //int. the value of the  first head of the linked list. doesn't change.
let ll; // object. linkedList.
let alive; //int. a duplicate variable. the number in the circle. used to intialize the linked list.
let begin; //boolean. occurs when you've clicked on a hologram and the game begins.
let end; //boolean. occurs when there is only one man left standing.
let interv1; //type?? used to store the josephus function in a setInterval.
let myVar2; // object. the current node "dead" in the linked list. becomes the winner's node.
let guess; // int. stores the number of the sprite that the player chooses.
let centerX = 500; //int. X offset of circle.
let centerY = 530;//int. Y offset of circle.
let newHead; //random int between 1 and the number of people in the circle. used to vary the starting position.
win_jsS = loopShift(win_jsS[0], starter) //function located in biNums.js. shifts winner based on the variable "starter", the new starting position.

let anim_idle = []; //array of imageObjects. sprite's idle animation.
let anim_wave = []; //array of imageObjects. sprite's wave animation.
let anim_chosen = []; //array of imageObjects. sprite's chosen/out/dead animation.

let titleIdle = []; //array of imageObjects. TITLESREEN sprite's idle animation.
let titleWave = []; //array of imageObjects. TITLESREEN sprite's wave animation.
let titleChosen = []; //array of imageObjects. TITLESREEN sprite's chosen/out/dead animation.

let dotShow = [1,2,3];

let score = 0

let hudBlock;

let josephSpeed = 800;

let needHelp = false; //help button boolean. draw function




function preload(){
    //spritesheets.
    idle = loadImage('images/idle150.png')
    wave = loadImage('images/wave150.png')
    chosen = loadImage('images/chosen150.png')
    font = loadFont('images/VeraMono.ttf');
    title_idle = loadImage('images/SpriteSheet_title-idle-58-471x500.png')
    title_wave = loadImage('images/SpriteSheet_title-wave-18-471x500.png')
    title_chosen = loadImage('images/SpriteSheet_title-chosen-87-471x500.png')
}

var start = false; //if false, the title screen is displaying.
let holograms; //the game sprite objects. (the men in the circle)
let dotArray;
var rM = 100; //radius modifier
var totalPoints = 41 //the total number of people in the circle.

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
    hudBlock = new HUD(500+2*win_jsS[0], 650, centerX, centerY, win_jsS[0], (9-count), score, win_jsS[2])
    myVar2 = undefined;
    end = false;
    begin = false;
    var canvas = createCanvas(1900, 1100);
    canvas.parent('sketch-holder');
    textSize(25);
    textFont(font);

//add the spritesheet images to an array to be flipped through.

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

    // refreshGame();
    refreshTitle();

}

function refreshTitle(){
    let range = {
        1: [random(500, 700), random(300, 380)],
        2: [random(700, 900), random(380, 460)],
        3: [random(900, 1100), random(460, 540)],
        4: [random(1100, 1300), random(540, 620)],
        5: [random(1300, 1500), random(620, 700)]
    }
    let grid = makeVertices(5)
    end = false;
    begin = false;
    titleSprites = []
for (var i = 0; i < 5; i++){
    let x = range[grid[i][0]][0]*2;
    let y = range[grid[i][1]][1]-100;
    titleSprites[i] = new TitleSprite(titleIdle, titleWave, titleChosen, x, y, random(.5, .7))
    }
}

function refreshGame(){
    hudBlock.guess = "__"
    newGame = true;
    dotArray = [];
    holograms = [];
    myVar2 = undefined;
    end = false;
    begin = false;
    if (start == true){
        for (var i = 0; i < totalPoints; i++) {
            var radius = totalPoints*10
            var x = drawPoint(radius, i, totalPoints)[0]+centerX
            var y = drawPoint(radius, i, totalPoints)[1]+centerY
            holograms[i] = new HologramSprite(anim_idle, anim_wave, anim_chosen, x, y, random(.1, .8), i)
            var radius = 35+totalPoints*10.1
            var x = drawPoint(radius, i, totalPoints)[0]+centerX
            var y = drawPoint(radius, i, totalPoints)[1]+centerY
            dotArray.push([x, y, i])
            // dotArray[i] = new Dot(x, y, i, 2)
            // console.log(dotArray)
            }
        }

        ll = new LinkedList();
        alive = win_jsS[0]
        living = []

        for (let i = 1; i <= alive; i++){
            ll.addNode(i)
            living.push(i)
        }

        newHead = Math.floor(Math.random() * (alive - 1)) + 1 // int. random value to assign head (the starting position.) (see comment above.)

        let present = ll.head; //object: node of linkedlist. the current node between iterated through to assign the new head.
        let amount = living.length //int. while loop counter to iterate through the linkedlist

        while (amount > 0){
            if (present.value == newHead){
                ll.head = present //makes the node with the newHead value, the new head of the linkedlist
                break
            } else {
                present = present.next
                amount -= 1
            }
        }
        current = ll.head;//used primarily in the josephus function iterate and remove people from the linkedlist. starts at the head.
        if (begin == false){
            starter = current;//object. the starting node. starter.value = starting position.
            // console.log(starter.value)
            // console.log(dotArray[starter.value])
            dotShow = dotArray[starter.value-1]
            // console.log(dotShow)
            startingDot = new Dot(dotShow[0], dotShow[1], dotShow[2], starter.value)
        }
}

function titleP5(){
    start = false;
    count = 9;
    refreshTitle();
    // refreshGame();
} //title screen


function forwardP5(){
    if (count > 2){
        count = count - 1;
        win_jsS = winner(count);
        totalPoints = win_jsS[0];
        start = true;
        refreshGame();
        win_jsS = loopShift(win_jsS[0], starter.value)
        temp_win_jsS = win_jsS
        hudBlock.n = win_jsS[0]
        hudBlock.level = (9-count)
        hudBlock.winner = win_jsS[2]
    } else if (count > 1) {
        count = count - 1;
        win_jsS = winner(count);
        totalPoints = win_jsS[0];
        start = true;
        refreshGame();
        win_jsS = loopShift(win_jsS[0], starter.value)
        temp_win_jsS = win_jsS
        hudBlock.n = win_jsS[0]
        hudBlock.level = (9-count)
        hudBlock.winner = win_jsS[2]
        } else {
        count = 8;
        win_jsS = winner(count);
        totalPoints = win_jsS[0];
        start = true;
        refreshGame();
        win_jsS = loopShift(win_jsS[0], starter.value)
        temp_win_jsS = win_jsS
        hudBlock.n = win_jsS[0]
        hudBlock.level = (9-count)
        hudBlock.winner = win_jsS[2]
    }
    hudBlock.x = centerX+300+(9-count)*50

interv1 = setInterval(josephus, josephSpeed);
}

function refreshP5(){
    win_jsS = winner(count);
    totalPoints = win_jsS[0];
    start = true;
    refreshGame();
    win_jsS = loopShift(win_jsS[0], starter.value)
    temp_win_jsS = win_jsS
    hudBlock.n = win_jsS[0]
    hudBlock.winner = win_jsS[2]
    hudBlock.x = centerX+300+(9-count)*50


interv1 = setInterval(josephus, josephSpeed);
}

function backP5(){
    if (count < 8){
        count = count + 1;
        win_jsS = winner(count);
        totalPoints = win_jsS[0];
        start = true;
        refreshGame();
        win_jsS = loopShift(win_jsS[0], starter.value)
        temp_win_jsS = win_jsS
        hudBlock.level = (9-count)
        hudBlock.n = win_jsS[0]
        hudBlock.winner = win_jsS[2]
        hudBlock.x = centerX+300+(9-count)*50
    }

interv1 = setInterval(josephus, josephSpeed);
}


let pointer;

let a = new Play("play", 300, 400)
let b = new About("about", 300, 500)
let c = new Menu("menu", 50, 25)
let d = new NextLevel("next", 250, 25)
let e = new RefreshLevel("again", 450, 25)
let f = new PreviousLevel("last", 650, 25)
let g = new Help("help", 1050, 25)

function draw(){
    background(0);
    fill('#39FF14');
    if (start == false){
        textSize(30);
        text('Where Should I Stand?',50,100)
        a.show();
        if(a.click()){
            forwardP5();
        }
        b.x = b.storedX;
        b.y = b.storedY;
        // b.flasher = true;
        // if (b.flasher == true){
        //     b.flash();
        // } else {
            b.show();
        // }
        if(b.click()){
            modal.style.display = "block";
        }
        // d.show();
        for (let sprite of titleSprites) {
            sprite.show();
            sprite.animate();
            }
    } else {
        if (needHelp){


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
                if (end == true && hologram.out != true){
                    hologram.winner = true;
                    realWinner = hologram.n;
                }
        }

fill('#39FF14');
            startingDot.show();

            textSize(25);
            text('Every other person is out.',100,175)
            text('To win, pick the last man standing.',100,250)
            text('The winner\'s place is written',100,325)
            text('in binary.',150,375)
            text('The dot indicates who starts.',100,450)

            text('In binary, you read the numbers from right to left',700, 350)
            text('and add up the values as you go.',750, 400)
            text('The values are powers of two:',700, 475)
            text('32, 16, 8, 4, 2, 1.',750, 525)
            text('If there\'s a 1, add that value to the number.',700, 600)
            text('If there\'s a 0, don\'t add that value.',700, 650)
            text('1 = 1, 10 = 2, 11 = 3, 100 = 4, and so on!',700, 725)




        g.show();
    if(g.click()){
        if (needHelp){
            needHelp = false;
        } else{
            needHelp = true;
        }
    }

        }else{
        // hudBlock = new HUD(500+2*win_jsS[0], 650, centerX, centerY, win_jsS[0], (9-count), score, win_jsS[2])
        c.show();
        if (c.click()){
            titleP5();
        }
        d.show();
        if(d.click()){
            forwardP5();
        }
        e.show();
        if(e.click()){
            refreshP5();
        }

        f.show();
        if(f.click()){
            backP5();
        }
        // if (g.flasher == true){
        //     g.flash();
        // } else {
            g.show();
        if(g.click()){
            if (needHelp){
                needHelp = false;
            } else{
                needHelp = true;
            }
        }
        b.x = 850;
        b.y = 25;
        b.show();
        if(b.click()){
            modal.style.display = "block";
        }
        // fill('#39FF14');
        // text("level: " + (9-count),100,175)
        // text("score: " + score,100,225)
        // text("winner: " + temp_win_jsS[2],925,175)
        // for (let dotz of dotArray){
        //     dotz.show();
        // }
        // push();
        hudBlock.show();
        // hudBlock.orbit();
        // pop();
        startingDot.show();
        if (begin == true){
            hudBlock.guess = guess;
        // text('guess:  ' + guess, 925 , 225)
        }
        // } else {

        // }
        if ( end == true){
            if (newGame == true){
            if (temp_win_jsS[1] == guess) {
                hudBlock.score+=1;
                newGame = false;
            } else {
                hudBlock.score-=1;
                newGame = false;
            }
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
        if (end == true && hologram.out != true){
            hologram.winner = true;
            realWinner = hologram.n;
        }
}

    textSize(25);
    }
}
}
