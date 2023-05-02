"use strict";
// ============================================================================
// Día Veintidos
// ============================================================================
function checkStepNumbers(systemNames, stepNumbers) {
  const names = [...new Set(systemNames)];
  for (let i = 0; i < names.length; i++) {
    let arr = [];
    for (let j = 0; j < systemNames.length; j++) {
      if (names[i] === systemNames[j]) arr.push(stepNumbers[j]);
    }

    if (arr.length > 1) {
      for (let k = 1; k < arr.length; k++) {
        if (arr[k] < arr[k - 1]) return false;
      }
    }
  }
  return true;
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];

console.log(checkStepNumbers(systemNames, stepNumbers));
