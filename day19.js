"use strict";
// ============================================================================
// Día Diecinueve
// ============================================================================
/*
El día se acerca y Papá Noel tiene el almacén de juguetes hecho un desastre. Ayúdale a ordenar los juguetes en el almacén para que pueda encontrarlos más fácilmente.

Para ello, nos dan dos arrays. El primero es un array de juguetes, y el segundo es un array de números que indican la posición de cada juguete en el almacén.

Lo único a tener en cuenta es que las posiciones pueden no empezar en 0, aunque siempre serán números consecutivos y de forma ascendente.

Tenemos que devolver un array donde cada juguete esté en la posición que le corresponde.
*/

function sortToys(toys, positions) {
  const obj = {};
  for (let i = 0; i < toys.length; i++) {
    obj[positions[i]] = toys[i];
  }
  return Object.values(obj);
}

const toys = ["ball", "doll", "car", "puzzle"];
const positions = [2, 3, 1, 0];

console.log(sortToys(toys, positions));
// ['puzzle', 'car', 'ball', 'doll']

console.log(sortToys(["pc", "xbox", "ps4", "switch", "nintendo"], [8, 6, 5, 7, 9]));
