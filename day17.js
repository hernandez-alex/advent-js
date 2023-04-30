"use strict";
// ============================================================================
// Día Catorce
// ============================================================================
/*
Estamos preparando los sacos para los regalos de Navidad pero cada saco tiene un límite de peso.

Nos dan un array con los nombres de los regalos y un número que es el peso máximo que puede llevar cada saco. El peso de cada regalo es la longitud de su nombre.

Escribe una función que agrupe los regalos en sacos y devuelva un array con los nombres de los regalos de cada saco. Para agrupar los regalos, se separan los nombres por espacios (el espacio no cuenta como peso).

¡Pero ojo! Cada saco puede llevar un máximo de peso, y si el peso de los regalos de un saco supera el peso máximo, se debe separar el último regalo del saco y ponerlo en el siguiente saco.
*/

function carryGifts(gifts, maxWeight) {
  const sacos = [];
  let saco = "";
  for (let i = 0; i < gifts.length; i++) {
    if (gifts[i].length > maxWeight) {
      continue;
    } else if (saco.length === 0) {
      saco = gifts[i];
    } else if (saco.split(" ").join("").length + gifts[i].length <= maxWeight) {
      saco = saco.concat(" ").concat(gifts[i]);
    } else if (saco.split(" ").join("").length + gifts[i].length > maxWeight) {
      sacos.push(saco);
      saco = gifts[i];
    }
  }
  if (saco.length > 0) sacos.push(saco);
  return sacos;
}

// carryGifts(["game", "bike", "book", "toy"], 10);

console.log(carryGifts(["game", "bike", "book", "toy"], 7));
