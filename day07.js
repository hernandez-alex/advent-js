"use strict";

// ============================================================================
// Día Siete
// ============================================================================
function getGiftsToRefill(a1, a2, a3) {
  const allGifts = [...new Set(a1.concat(a2).concat(a3))];
  const buy = [];
  for (let i = 0; i < allGifts.length; i++) {
    let v1 = a1.includes(allGifts[i]) ? 1 : 0;
    let v2 = a2.includes(allGifts[i]) ? 1 : 0;
    let v3 = a3.includes(allGifts[i]) ? 1 : 0;
    if (v1 + v2 + v3 <= 1) buy.push(allGifts[i]);
  }
  return buy;
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']
console.log(gifts);
