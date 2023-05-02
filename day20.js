"use strict";
// ============================================================================
// Día Veinte
// ============================================================================
/*
Papá Noel se ha dado cuenta de que ni con la colaboración de todos los elfos va a poder entregar todos los regalos a tiempo. Por eso va a pedir ayuda a sus amigos de Autentia.

Desde Autentia nos han indicado que necesitan un programa para saber qué equipo de renos enviar a cada país. Hay diferentes tipos de renos y cada uno de ellos puede llevar un peso de regalos. Por ejemplo:

const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]
En el listado de regalos que tiene Papá Noel se expresa cuánto pesa cada regalo y cuál es su país destino. El peso de los regalos siempre es un número natural. Por ejemplo:

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'Spain', weight: 7 },
  { country: 'France', weight: 17 }
]
*/

function howManyReindeers(reindeerTypes, gifts) {
  const countries = [];

  const reTyCap = reindeerTypes.map((obj, i, arr) => {
    return {
      type: obj.type,
      weightCapacity: obj.weightCapacity,
      weightCapAcum: arr.reduce((sum, el) => sum + el.weightCapacity, 0),
    };
  });

  for (let i = 1; i < reTyCap.length; i++) {
    reTyCap[i].weightCapAcum = reTyCap[i - 1].weightCapAcum - reTyCap[i - 1].weightCapacity;
  }

  for (let i = 0; i < gifts.length; i++) {
    countries.push({ country: gifts[i].country, reindeers: [] });
  }

  for (let i = 0; i < countries.length; i++) {
    let wCap = gifts[i].weight;

    while (wCap > 0) {
      for (let j = 0; j < reTyCap.length; j++) {
        if (wCap >= reTyCap[j].weightCapAcum) {
          const busca = countries[i].reindeers.map((obj) => obj.type);

          if (!busca.includes(reTyCap[j].type)) {
            countries[i].reindeers.push({ type: reTyCap[j].type, num: 1 });
          } else {
            for (let k = 0; k < countries[i].reindeers.length; k++) {
              if (countries[i].reindeers[k].type === reTyCap[j].type) {
                countries[i].reindeers[k].num++;
              }
            }
          }
          wCap -= reTyCap[j].weightCapacity;
        }
      }
    }
  }
  return countries;
}

const reindeerTypes = [
  { type: "Nuclear", weightCapacity: 50 },
  { type: "Electric", weightCapacity: 10 },
  { type: "Gasoline", weightCapacity: 5 },
  { type: "Diesel", weightCapacity: 1 },
];

const gifts = [
  { country: "Spain", weight: 30 },
  { country: "France", weight: 17 },
  { country: "Italy", weight: 50 },
];

console.log(howManyReindeers(reindeerTypes, gifts));
