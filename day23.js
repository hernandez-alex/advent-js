"use strict";
// ============================================================================
// Día Veintitres
// ============================================================================
/*
Estamos probando una nueva CPU para el trineo de Papá Noel. Pero todavía tenemos que programar el software para que funcione.

La CPU tiene 8 registros disponibles, que se llaman V00..V07. Al comienzo del programa, todos los registros contienen 0. La CPU admite las siguientes instrucciones:

-1. MOV Vxx,Vyy: copia el valor del registro Vxx al registro Vyy;
-2. MOV n,Vxx: asigna la constante numérica n al registro Vxx (sobrescribe si ya tiene un valor);
3. ADD Vxx,Vyy: calcula (Vxx + Vyy) y almacena el resultado en Vxx;
4. DEC Vxx: decrementa el valor de Vxx en 1.
5. INC Vxx: incrementa el valor de Vxx en 1.
6. JMP i: salta a la instrucción número i si V00 es diferente de 0. i está garantizado que sea un número de instrucción válido y 0 sería la primera instrucción.

Como la CPU es de 8 bits, el número que podría representar va desde 0 hasta 255. Si incrementas el número 255 causa un desbordamiento y resulta en 0. Y si decrementas 0, resulta en 255. Ten en cuenta, entonces, que el número 280 sería 24 en la CPU.

Después de que se haya ejecutado la última instrucción, debes devolver una matriz con el resultado para cada registro. De V00 a V07. 
*/

function executeCommands(commands) {
  const res = [0, 1, 2, 3, 4, 5, 6, 7];
  console.log(res);
  const arrCom = [];
  for (let i = 0; i < commands.length; i++) {
    const comm = [];
    comm.push(commands[i].split(" ")[0]);
    if (commands[i].split(" ")[1].includes(",")) {
      comm.push(commands[i].split(" ")[1].split(",")[0]);
      comm.push(commands[i].split(" ")[1].split(",")[1]);
    } else {
      comm.push(commands[i].split(" ")[1]);
    }
    arrCom.push(comm);
  }
  console.log("arrCom", arrCom);
  for (let j = 0; j < arrCom.length; j++) {
    const cm = arrCom[j];
    // (1- MOV Vxx,Vyy) & (2- MOV n,Vxx)
    if (cm[0] === "MOV" && cm[1].charAt(0) === "V") {
      res[+cm[1].charAt(2)] = res[+cm[2].charAt(2)];
    } else if (cm[0] === "MOV" && cm[1].charAt(0) !== "V") {
      res[+cm[2].charAt(2)] = +cm[1];
    }
    // (3- ADD Vxx,Vyy)
    if (cm[0] === "ADD") {
      res[+cm[1].charAt(2)] = res[+cm[1].charAt(2)] + res[+cm[2].charAt(2)];
    }
  }
  console.log("Res", res);
  return [];
}

// console.log("Alex".charAt(0));

executeCommands([
  "ADD V06,V07", // Alex
  "MOV V00,V07", // Alex
  "MOV 5,V00", // V00 es 5
  "MOV 10,V01", // V01 es 10
  "DEC V00", // V00 ahora es 4
  "ADD V00,V01", // V00 = V00 + V01 = 14
]);

// executeCommands([
//   "MOV 5,V00", // V00 es 5
//   "MOV 10,V01", // V01 es 10
//   "DEC V00", // V00 ahora es 4
//   "ADD V00,V01", // V00 = V00 + V01 = 14
// ]);
// executeCommands([
//   "MOV 255,V00", // V00 es 255
//   "INC V00", // V00 es 256, desborda a 0
//   "DEC V01", // V01 es -1, desborda a 255
//   "DEC V01", // V01 es 254
// ]);
// executeCommands([
//   "MOV 10,V00", // V00 es 10
//   "DEC V00", // decrementa V00 en 1  <---┐
//   "INC V01", // incrementa V01 en 1      |
//   "JMP 1", // bucle hasta que V00 sea 0 ----┘
//   "INC V06", // incrementa V06 en 1
// ]);
/*
executeCommands([
  'MOV 5,V00',  // V00 es 5
  'MOV 10,V01', // V01 es 10
  'DEC V00',    // V00 ahora es 4
  'ADD V00,V01' // V00 = V00 + V01 = 14
])

// Output: [14, 10, 0, 0, 0, 0, 0]

executeCommands([
  'MOV 255,V00', // V00 es 255
  'INC V00',     // V00 es 256, desborda a 0
  'DEC V01',     // V01 es -1, desborda a 255
  'DEC V01'      // V01 es 254
])

// Output: [0, 254, 0, 0, 0, 0, 0]

executeCommands([
  'MOV 10,V00', // V00 es 10
  'DEC V00',    // decrementa V00 en 1  <---┐
  'INC V01',    // incrementa V01 en 1      |
  'JMP 1',      // bucle hasta que V00 sea 0 ----┘
  'INC V06'     // incrementa V06 en 1
])

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
*/
