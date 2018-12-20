// https://stackoverflow.com/questions/24273990/calculating-evenly-spaced-points-on-the-perimeter-of-a-circle/24274611

totalPoints = 41;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var center = [400, 400]

for (var i = 1; i <= totalPoints  ; i++) {
    ctx.fillRect(drawPoint(totalPoints*5, i, totalPoints)[0]+ center[0], drawPoint(totalPoints*5, i, totalPoints)[1]+ center[1], 5, 5);
}

function drawPoint(r, currentPoint, totalPoints) {

    var theta = ((Math.PI*2) / totalPoints);
    var angle = (theta * currentPoint);

    var x = (r * Math.cos(angle));
    var y = (r * Math.sin(angle));

    return [x, y];
}
