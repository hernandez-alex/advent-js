"use strict";
// ============================================================================
// Día Catorce
// ============================================================================
/*
Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:

Bolas de colores : B
Regalos pequeños : R
Piñas de pino : P
El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.

Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R

decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]
*/

const base = "B P R P";
function decorateTree(base) {
  const rows = base.split(" ").length;
  const tree = [base];
  for (let i = 0; i < rows - 1; i++) {
    let curRow = tree[0].split(" ");
    const newRow = [];
    for (let j = 0; j < curRow.length - 1; j++) {
      if (curRow[j] === curRow[j + 1]) {
        newRow.push(curRow[j]);
        continue;
      }
      if (curRow[j] !== "R" && curRow[j + 1] !== "R") {
        newRow.push("R");
        continue;
      }
      if (curRow[j] !== "B" && curRow[j + 1] !== "B") {
        newRow.push("B");
        continue;
      }
      if (curRow[j] !== "P" && curRow[j + 1] !== "P") {
        newRow.push("P");
        continue;
      }
    }
    tree.unshift(newRow.join(" "));
  }
  return tree;
}
console.log(decorateTree(base));
