"use strict";

// ============================================================================
// Día Uno
// ============================================================================
/*
Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
 [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
]
*/

function wrapping(gifts) {
  return gifts.map((reg) => {
    return "*"
      .repeat(reg.length + 2)
      .concat(`\n*${reg}*\n`)
      .concat("*".repeat(reg.length + 2));
  });
}

console.log(wrapping(["cat", "game", "socks"]));
