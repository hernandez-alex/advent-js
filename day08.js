"use strict";

// ============================================================================
// Día Ocho
// ============================================================================
function checkPart(part) {
  if (part === part.split("").reverse().join("")) return true;
  for (let i = 0; i < part.length; i++) {
    let part1 = part.slice().split("");
    part1.splice(i, 1);
    part1 = part1.join("");
    if (part1 === part1.split("").reverse().join("")) return true;
  }
  return false;
}

console.log(checkPart("uwu")); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")); // false
