"use strict";
// ============================================================================
// Día Veintitres
// ============================================================================
/*
¡Ha llegado el día! Hoy vamos a repartir los regalos… pero los almacenes son un labertinto y los elfos están perdidos.

Indielfo Jones quiere escribir un programa que al recibir una matriz, sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.

Los laberintos tienen las siguientes posiciones:

W: Es una pared, no se puede pasar por ahí.
S: Punto de entrada al almacén.
E: Punto de salida del almacén.
: Los espacios en blanco es por donde se puede pasar.
Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.
*/

function canExit(maze) {
  const m = maze.map((arr) => arr);
  const nF = m.length;
  const nC = m[0].length;

  let ctn = true;
  while (ctn === true) {
    ctn = false;
    for (let f = 0; f < m.length; f++) {
      for (let c = 0; c < m[f].length; c++) {
        if (["d", "u", "r", "l", "S"].includes(m[f][c])) {
          if (f !== nF - 1 && m[f + 1][c] === "E") return true;
          if (f !== nF - 1 && m[f + 1][c] === " ") {
            m[f + 1][c] = "d"; // Down
            ctn = true;
          }

          if (f !== 0 && m[f - 1][c] === "E") return true;
          if (f !== 0 && m[f - 1][c] === " ") {
            m[f - 1][c] = "u"; // Up
            ctn = true;
          }

          if (c !== nC - 1 && m[f][c + 1] === "E") return true;
          if (c !== nC - 1 && m[f][c + 1] === " ") {
            m[f][c + 1] = "r"; // Right
            ctn = true;
          }

          if (c !== 0 && m[f][c - 1] === "E") return true;
          if (c !== 0 && m[f][c - 1] === " ") {
            m[f][c - 1] = "l"; // Left
            ctn = true;
          }
        }
      }
    }
  }

  return false;
}

console.log(
  canExit([
    [" ", " ", "W", " ", "S"],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", "W", " "],
    ["W", "W", " ", "W", "W"],
    [" ", " ", " ", " ", "E"],
  ]) // -> true
);

console.log(
  canExit([
    [" ", " ", "W", "W", "S"],
    [" ", " ", " ", "W", " "],
    [" ", " ", " ", "W", " "],
    ["W", "W", " ", "W", "W"],
    [" ", " ", " ", " ", "E"],
  ]) // -> false
);

// Solución de Internet que no entiendo
function canExitInt(maze) {
  const r = ([x, y]) => {
    const val = maze[x][y];
    delete maze[x][y];
    return (
      ["E"].includes(val) +
      [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
      ]
        .filter((arr) => maze[arr[0]])
        .filter((arr) => ["E", " "].includes(maze[arr[0]][arr[1]]))
        .some(r)
    );
  };

  const n = maze.flat().join("").indexOf("S");
  const x = ~~(n / maze[0].length);
  const y = n % maze[0].length;

  return !!r([x, y]);
}

console.log("Solución de Internet");
console.log(
  canExitInt([
    [" ", " ", "W", " ", "S"],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", "W", " "],
    ["W", "W", " ", "W", "W"],
    [" ", " ", " ", " ", "E"],
  ]) // -> true
);

console.log(
  canExitInt([
    [" ", " ", "W", "W", "S"],
    [" ", " ", " ", "W", " "],
    [" ", " ", " ", "W", " "],
    ["W", "W", " ", "W", "W"],
    [" ", " ", " ", " ", "E"],
  ]) // -> false
);
