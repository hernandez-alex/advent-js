"use strict";
// ============================================================================
// Día Dieciseis
// ============================================================================
/*
Papá Noel está empezando a recibir un montón de cartas pero tienen un montón de problemas de formato. Para mejorar la lectura, va a escribir un programa que, dado un texto, lo formatea de acuerdo a las siguientes reglas:

- Eliminar espacios al inicio y al final
- Eliminar múltiples espacios en blanco y dejar sólo uno
- Dejar un espacio después de cada coma
- Quitar espacios antes de coma o punto
- Las preguntas sólo deben terminar con un signo de interrogación
- La primera letra de cada oración debe estar en mayúscula
- Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
Poner un punto al final de la frase si no tiene puntuación
*/

function fixLetter(letter) {
  // Eliminar espacios al pricipio
  let arrLetter = letter.trim().split("");

  // Eliminar multiples espacios en blanco
  const arrLetter2 = [];
  for (let i = 0; i < arrLetter.length; i++) {
    if (arrLetter[i] === arrLetter[i + 1] && arrLetter[i] === " ") continue;
    arrLetter2.push(arrLetter[i]);
  }
  arrLetter = arrLetter2.map((el) => el);
  // console.log(arrLetter);

  // Dejar un espacio después de cada coma
  const arrLetter3 = [];
  for (let i = 0; i < arrLetter.length; i++) {
    arrLetter3.push(arrLetter[i]);
    if (arrLetter[i] === "," && arrLetter[i + 1] !== " ") arrLetter3.push(" ");
  }
  arrLetter = arrLetter3.map((el) => el);
  // console.log(arrLetter);

  // Quitar espacios antes de coma o punto
  const arrLetter4 = [];
  for (let i = 0; i < arrLetter.length; i++) {
    if (
      arrLetter[i] === " " &&
      (arrLetter[i + 1] === "," ||
        arrLetter[i + 1] === "." ||
        arrLetter[i + 1] === "?" ||
        arrLetter[i + 1] === "!")
    )
      continue;
    arrLetter4.push(arrLetter[i]);
  }
  arrLetter = arrLetter4.map((el) => el);
  // console.log(arrLetter);

  // Las preguntas sólo deben terminar con un signo de interrogación
  const arrLetter5 = [];
  for (let i = 0; i < arrLetter.length; i++) {
    if (arrLetter[i] === "?" && arrLetter[i + 1] === "?") continue;
    arrLetter5.push(arrLetter[i]);
  }
  arrLetter = arrLetter5.map((el) => el);
  // console.log(arrLetter);

  // La primera letra de cada oración debe estar en mayúscula
  const arrLetter6 = [];
  for (let i = 0; i < arrLetter.length; i++) {
    if (i === 0) {
      arrLetter6.push(arrLetter[0].toUpperCase());
      continue;
    }
    if (
      arrLetter[i - 1] === " " &&
      (arrLetter[i - 2] === "." || arrLetter[i - 2] === "?" || arrLetter[i - 2] === "!")
    ) {
      arrLetter6.push(arrLetter[i].toUpperCase());
      continue;
    }
    arrLetter6.push(arrLetter[i]);
  }
  arrLetter = arrLetter6.map((el) => el);
  // console.log(arrLetter.join(""));

  // Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
  arrLetter = arrLetter.join("").replaceAll("santa", "Santa");
  arrLetter = arrLetter.replaceAll("claus", "Claus");
  // console.log(arrLetter);

  // Poner un punto al final de la frase si no tiene puntuación
  if (![".", "?", "!"].includes(arrLetter[arrLetter.length - 1])) arrLetter = arrLetter.concat(".");
  console.log(arrLetter);
  return letter;
}

fixLetter(
  "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
);

/*
fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.
*/
