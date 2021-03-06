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

function convertFromBinary(num){
    // Takes in a number in binary of base 2 and returns an integer.
    let dec = 0
    let numb = "" + num
    if (numb[0] != "1" && numb[0] != "0"){
        return ("Please enter a number in binary.")
    }
    if (len(numb) > 9){
        return "Sorry this function only converts binary numbers that are equal to 511 or below."
}
    numb = (9 - numb.length)*"0" + numb;
    if (numb[0] == "1"){
        dec += 256;
    }
    if (numb[1] == "1"){
        dec += 128;
    }
    if (numb[2] == "1"){
        dec += 64;
    }
    if (numb[3] == "1"){
        dec += 32;
    }
    if (numb[4] == "1"){
        dec += 16;
    }
    if (numb[5] == "1"){
        dec += 8;
    }
    if (numb[6] == "1"){
        dec += 4;
    }
    if (numb[7] == "1"){
        dec += 2;
    }
    if (numb[8] == "1"){
        dec += 1;
    }
    return dec
}


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

function truncateBinary(num){
    // take in a binary number and remove the leading zeroes.
    for (var i = 0; i < num.length; i++) {
        // console.log(i, typeof i);
        if (num[i] == 1)
            return num.slice(i);
    }
}

function winner(){
    // Calculating the 'winner' of the Josephus Problem.
    // Returns the number of people playing, the winner, the winner's number in binary.
    let min = Math.ceil(3);
    let max = Math.floor(42);
    let n = Math.floor(Math.random() * (max - min)) + min;
    let b = convertToBinary(n);
    let p = findHighestPow(b);
    // console.log(n);
    let winner = ((2*(n - p))+1);
    return ([n, winner, truncateBinary(convertToBinary(winner))]);
}

// var winner = winner()
// console.log(winner)
