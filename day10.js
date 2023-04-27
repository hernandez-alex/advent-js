"use strict";
// ============================================================================
// Día Diez
// ============================================================================
/*
Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.

Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando. Veamos unos ejemplos:
*/

function checkJump(heights) {
  let change = 0;
  let path = "";
  if (heights[0] > heights[1]) return false;
  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i] < heights[i + 1] && path !== "up") {
      change++;
      path = "up";
    }
    if (heights[i] > heights[i + 1] && path !== "down") {
      change++;
      path = "down";
    }
  }
  return change === 2 ? true : false;
}

let heights = [1, 3, 8, 5, 2];
console.log(checkJump(heights)); // true

heights = [1, 7, 3, 5];
console.log(checkJump(heights)); // true
