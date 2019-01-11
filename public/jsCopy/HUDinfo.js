class HUD{
    constructor(x, y, xOffset, yOffset, n, level, score, winner){
        this.rotator = .5;
        this.x = x+300;
        this.y = y;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.n = n;
        this.level = level;
        this.score = score;
        this.winner = winner;
        this.guess = "__";
        this.mod=.1
    }

    show(){
        push();
        fill('#39FF14');
        rectMode(CENTER);
        translate(p5.Vector.fromAngle(millis() / 1000, 5));
        rect(this.x,this.y, 250, 250)
        fill(0);
        text("level: " + this.level,this.x-90,this.y-75)
        text("score: " + this.score,this.x-90,this.y-25)
        text("winner: " + this.winner,this.x-90,this.y+25)
        text('guess:  ' + this.guess, this.x-90,this.y+75)
        pop();
    }
    }
