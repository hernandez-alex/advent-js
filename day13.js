"use strict";
// ============================================================================
// Día Trece
// ============================================================================
/*
Para evitar perder datos cuando el servidor se cae, Papa Noel ha decidido hacer backups incrementales. Un hacker llamado S4vitelf le esta ayudando.

Por un lado, tenemos el timestamp de cuándo se hizo el último backup.

También tenemos los cambios que se han realizado en un array de arrays. Cada array interno contiene dos elementos: el id del archivo modificado y el timestamp de la modificación.

Tienes que crear un programa que devuelva un array con las id de los archivos que tendríamos que hacer backup porque han sido modificados desde el último backup y ordenados de forma ascendente. 
*/

const lastBackup = 1546300800;
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];

function getFilesToBackup(lastBackup, changes) {
  const doBackUp = [];
  for (let i = 0; i < changes.length; i++) {
    if (changes[i][1] > lastBackup && !doBackUp.includes(changes[i][0]))
      doBackUp.push(changes[i][0]);
  }
  return doBackUp.sort((a, b) => a - b);
}

console.log(getFilesToBackup(lastBackup, changes));
