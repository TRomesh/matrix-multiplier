# Matrix Multiplier

Welcome to the matrix multiplier, a simple yet powerful project demonstrating the generation and multiplication of matrices in JavaScript. 

## Getting Started

Before diving in, make sure to install the latest versions of Bun, Node.js, and Deno. You can generally do this by visiting their respective websites or repositories and following the installation instructions. 




## Overview

This project includes the following functionalities:
- Generating matrices with random values using the `generateRandomMatrix` function.
- Multiplying these matrices using the `matrixMultiplication` function.
- Adjusting the size of the matrices with the `matrixSize` variable.

Enjoy seeing how memory usage scales as the size of the matrices grows!



## Code Snippet
```javascript
// ...

const matrixSize = 1000; // Adjust the size of the matrix to increase memory usage
const matrixA = generateRandomMatrix(matrixSize, matrixSize);
const matrixB = generateRandomMatrix(matrixSize, matrixSize);

console.time("Matrix Multiplication");
const resultMatrix = matrixMultiplication(matrixA, matrixB);
console.timeEnd("Matrix Multiplication");
```



## Benchmark

Want to see how Bun, NodeJs, and Deno perform with this code? We've got you covered! Using a benchmarking tool called [hyperfine](https://github.com/sharkdp/hyperfine), you will witness the beautiful battle of execution times across these environments. 

### Run the command

```sh
hyperfine "bun index.js" "node index.js" "deno run index.js" --warmup=100 -i

