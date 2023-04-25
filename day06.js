"use strict";

// ============================================================================
// Día Cinco
// ============================================================================
function createCube(size) {
  let vUp = "/\\";
  const lUp = "_\\".repeat(size);
  let vDown = "\\/";
  const lDown = "_/".repeat(size);
  let cube = [];

  for (let i = 1; i <= size; i++) {
    cube.push(" ".repeat(size - i) + vUp.repeat(i) + lUp);
  }

  for (let i = 1; i <= size; i++) {
    cube.push(" ".repeat(i - 1) + vDown.repeat(size + 1 - i) + lDown);
  }

  return cube.join("\n");
}

const cubeOfTwo = createCube(5);
console.log(cubeOfTwo);
