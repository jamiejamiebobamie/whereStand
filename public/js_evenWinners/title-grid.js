// A function that makes random vertices using the fisher-yates shuffle.

// The rows are uniform and start from 1 to the number entered.
// The columns are random between 1 and the number entered.
// Each entry in the returned array of vertices are unique.

// Example: makeVertices(5): [ [ 1, 3 ], [ 2, 2 ], [ 3, 4 ], [ 4, 1 ], [ 5, 1 ] ]



function makeVertices(num){
    let columns = []
    while (num > 0){
        columns.push(num)
        num -= 1
    }

let count = 1;
let grid = []

for (let column in columns) {
    let k = Math.floor(Math.random() * Math.floor((columns.length-1) - count)) + count;
    let temp = columns[count]
    columns[count] = columns[k]
    columns[k] = temp
    // console.log(rows[count])
    grid.push([columns[count], count]);
    count = count + 1
    }
    return grid
}


// console.log(makeVertices(5))
