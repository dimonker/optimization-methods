const eps = 0.00001

const m = 3
const n = 5

let A = [
    [1, 2, -1, 2, 4, 1],
    [0, -1, 2, 1, 3, 3],
    [1, -3, 2, 2, 0, 4],
    [1, -3, 2, 1, 4, 0],
    []
]

let B = [
    [-1, 3, 0, 2, 1, 1],
    [2, -1, 1, 2, 3, 2],
    [1, -1, 2, 1, 0, 4],
    [-1, -3, 2, 1, 4, 0],
    []
]

let C = [
    [-1, 3, 0, 2, 1, 1],
    [2, -1, 1, 2, 3, 4],
    [1, -1, 2, 1, 0, 5],
    [-1, 0, -2, 5, 4, 0],
    []
]



function SimplexMin(A) {

    let sum;
    for (let k = 0; k < n + 1; k++) {
        sum = 0;
        for (let v = 0; v < m; v++) {
            sum -= A[v][k]
        }
        A[m + 1][k] = sum;
    }


    let simplex_diff = Math.min.apply(null, A[m + 1].slice([0], [n]));
    let OneMore_simplex_diff = Math.min.apply(null, A[m].slice([0], [n]));


    let j, i, leading, row;
    let t = [];


    while ((simplex_diff < -eps) || (OneMore_simplex_diff < 0)) {

        if (simplex_diff < -eps) {
            row = m + 1;
            j = A[row].indexOf(simplex_diff);
        } else {
            row = m;
            j = A[row].indexOf(OneMore_simplex_diff);
        }


        for (let k = 0; k < m; k++) {
            t[k] = A[k][n] / A[k][j];
        }


        let posotive = t.filter(function (number) {
            return Math.sign(number) == 1
        })

        let posotive_min = Math.min.apply(null, posotive);
        i = t.indexOf(posotive_min)
        leading = A[i][j]


        for (let k = 0; k < n + 1; k++) {
            A[i][k] /= leading;
        }

        leading = A[i][j]

        let multiplier;

        for (let k = 0; k < m + 2; k++) {

            if (k != i) {

                multiplier = -A[k][j] / leading
                for (let v = 0; v < n + 1; v++) {
                    A[k][v] += A[i][v] * multiplier;

                }
            }
        }


        simplex_diff = Math.min.apply(null, A[m + 1].slice([0], [n]));
        OneMore_simplex_diff = Math.min.apply(null, A[m].slice([0], [n]));


    }

    return -A[m][n]
}

function SimplexMax(A) {
    

    for (let k = 0; k < n + 1; k++) {
        A[m][k] *= -1;
    }
    
    let res = SimplexMin(A) * -1
    return res

}

// console.log('min: '+ SimplexMin(A))
// console.log('max: '+ SimplexMax(A) + '\n')


// console.log('min: '+ SimplexMin(B))
// console.log('max: '+ SimplexMax(B) + '\n')


// console.log('min: '+ SimplexMin(C))
// console.log('max: '+ SimplexMax(C) )
