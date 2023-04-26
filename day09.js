"use strict";
// ============================================================================
// Día Ocho
// ============================================================================
/*
Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

Tienen unas tiras led que son como un Array. Cada posición es un led y puede ser estar encendido (1) o apagado (0).

Cada 7 segundos, los leds cambian de estado de esta forma:

Si el led está apagado, se enciende si el led de su izquierda (index - 1) estaba encendido antes.
Si el led está encendido, se mantiene siempre encendido.
Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. Los segundos se expresan en un número entero. Por ejemplo:
*/
function countTime(leds) {
  // All leds on, don't do anything
  if (leds.length === leds.reduce((sum, led) => sum + led, 0)) return 0;

  // All leds off, don't do anything
  if (leds.reduce((sum, led) => sum + led, 0) === 0) return 0;

  // Logic begin
  let time = 0;
  const ledsChg = leds.slice();

  while (ledsChg.reduce((sum, led) => sum + led, 0) !== ledsChg.length) {
    const ledsAux = ledsChg.slice();
    ledsAux.unshift(ledsChg[ledsChg.length - 1]);

    for (let i = 1; i <= ledsChg.length; i++) {
      if (ledsAux[i] === 0 && ledsAux[i - 1] === 1) {
        ledsChg[i - 1] = 1;
      }
    }

    time += 7;
  }

  return time;
}

const leds = [0, 1, 1, 0, 1];
countTime(leds); // 7

console.log(countTime(leds)); // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

//countTime([0, 0, 0, 1]); // 21
console.log(countTime([0, 0, 0, 1]));
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

//countTime([0, 0, 1, 0, 0]); // 28
console.log(countTime([0, 0, 1, 0, 0]));
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
