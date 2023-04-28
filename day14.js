"use strict";
// ============================================================================
// Día Catorce
// ============================================================================

function getOptimalPath(path) {
  // Hago una copia del path  e invierto la piramide para no modificar
  // el original (buenas practicas)
  const myP = path.map((el) => el).reverse();

  // Recorro cada una de las cadenas de mi nuevo array
  for (let i = 0; i < myP.length; i++) {
    const arr = myP[i];

    // Recorro cada una de las cadenas comparando los valores para ubicar el menor
    // luego sumo el valor menor a la misma posición de la cadena seguiente
    for (let j = 0; j < arr.length - 1; j++) {
      myP[i + 1][j] += arr[j] < arr[j + 1] ? arr[j] : arr[j + 1];
    }
  }

  // finalmente retorno el valor de la última cadena el cual por lógica será
  // El camino con la menor suma posible de valores.
  return myP[myP.length - 1][0];
}

const A = [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]];

console.log(getOptimalPath(A));
