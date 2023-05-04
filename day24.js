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
  // debugger;
  const m = maze.map((arr) => arr);
  const nY = m.length;
  const nX = m[0].length;
  for (let y = 0; y < m.length; y++) {
    for (let x = 0; x < m[y].length; x++) {
      if (/d|u|r|l|S/.test(m[y][x])) {
        // Down
        if (y !== nY && m[y + 1][x] === " ") {
          console.log(y + 1, x);
          // console.log(("y+1", y + 1, "x", x + 1));
          m[y + 1][x] = "d";
        }
        // Up
        if (y !== 0 && m[y - 1][x] === " ") {
          m[y - 1][x] = "u";
        }
        // Right
        if (x !== nX && m[y][x + 1] === " ") {
          m[y][x + 1] = "r";
        }
        // Left
        if (x !== 0 && m[y][x - 1] === " ") {
          m[y][x - 1] = "l";
        }
      }
      // console.log("aqui", x, x, m[x][x]);
    }
  }
  console.log(m, nY, nX);

  return false;
}

canExit([
  [" ", " ", "W", "l", "S"],
  [" ", " ", "l", "l", "d"],
  [" ", " ", " ", "W", "d"],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
]); // -> true
