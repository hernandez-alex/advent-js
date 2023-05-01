"use strict";
// ============================================================================
// Día Diecinueve
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

  const reindeerTypesCap = reindeerTypes.map((obj, i, arr) => {
    return {
      type: obj.type,
      weightCapacity: obj.weightCapacity,
      weightCapAcum: arr.reduce((sum, el) => sum + el.weightCapacity, 0),
      num: 0,
    };
  });

  for (let i = 1; i < reindeerTypesCap.length; i++) {
    reindeerTypesCap[i].weightCapAcum =
      reindeerTypesCap[i - 1].weightCapAcum - reindeerTypesCap[i - 1].weightCapacity;
  }
  console.log("reindeerTypesCap", reindeerTypesCap);

  for (let i = 0; i < gifts.length; i++) {
    countries.push({ country: gifts[i].country, reindeers: [] });
  }

  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i].country, gifts[i].weight, "delete when completed");
    let wCap = gifts[i].weight;

    for (let j = 0; j < reindeerTypesCap.length; j++) {
      let n = 0;
      while (n < 10) {
        //wCap > 0 ||
        // console.log(
        //   reindeerTypesCap[j].weightCapAcum,
        //   wCap,
        //   reindeerTypesCap[j].weightCapAcum <= wCap
        // );
        if (reindeerTypesCap[j].weightCapAcum >= wCap) {
          countries[i].reindeers.push({ type: reindeerTypesCap[j].type, num: 1 }); //{ type: reindeerTypesCap[j].type, num: 1 }
          wCap = reindeerTypesCap[j].weightCapacity - wCap;
          console.log(wCap, n);
        }
        n++;
      }
    }
  }
  console.log("countries", countries);
  return [];
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

howManyReindeers(reindeerTypes, gifts);
