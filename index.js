
function generateRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = Math.random();
        }
    }
    return matrix;
}

function matrixMultiplication(a, b) {
    const rowsA = a.length;
    const colsA = a[0].length;
    const rowsB = b.length;
    const colsB = b[0].length;

    if (colsA !== rowsB) {
        throw new Error("Incompatible matrices for multiplication");
    }

    const result = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
        result[i] = new Array(colsB).fill(0);
    }

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}

const matrixSize = 1000; // Adjust the size of the matrix to increase memory usage
const matrixA = generateRandomMatrix(matrixSize, matrixSize);
const matrixB = generateRandomMatrix(matrixSize, matrixSize);

console.time("Matrix Multiplication");
const resultMatrix = matrixMultiplication(matrixA, matrixB);
console.timeEnd("Matrix Multiplication");
