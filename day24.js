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
  const nF = m.length;
  const nC = m[0].length;
  for (let f = 0; f < m.length; f++) {
    for (let c = 0; c < m[f].length; c++) {
      if (["d", "u", "r", "l", "S"].includes(m[f][c])) {
        // console.log("--- In", `(${f},${c})`, m[f][c]);
        // Down
        if (f !== nF && m[f + 1][c] === " ") {
          console.log("d: (f+1,c)", `(${f + 1},${c})`);
          m[f + 1][c] = "d";
        }
        // Up
        if (f !== 0 && m[f - 1][c] === " ") {
          console.log("u: (f-1,c)", `(${f - 1},${c})`);
          m[f - 1][c] = "u";
        }
        // Right
        if (c !== nC && m[f][c + 1] === " ") {
          console.log("r: (f,c+1)", `(${f},${c + 1})`);
          m[f][c + 1] = "r";
        }
        // Left
        if (c !== 0 && m[f][c - 1] === " ") {
          console.log("l: (f,c-1)", `(${f},${c - 1})`);
          m[f][c - 1] = "l";
        }
      }
    }
  }
  console.log(m, nF, nC);

  return false;
}

canExit([
  [" ", " ", "W", " ", "S"],
  [" ", "l", " ", " ", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
]); // -> true
