"use strict";

// ============================================================================
// Día Cinco
// ============================================================================
/*
Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.

Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. [12, 3, 11, 5, 7]. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.

Como no quiere dejar una ciudad a medias, si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.

Crea un programa que le diga la suma más alta de regalos que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar:

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

getMaxGifts(giftsCities, maxGifts, maxCities) // 20
Si no se puede realizar ningún viaje que satisface los requerimientos, el resultado debe ser 0. Más ejemplos:

getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100
A tener en cuenta:

maxGifts >= 1
giftsCities.length >= 1
maxCities >= 1
El número de maxCities puede ser mayor a giftsCities.length
*/

/*
Funciona
const swaps = [];
const createArr = (arrInput) => {
  arrInput.forEach((el, i, arr) => {
    if (
      arr.filter((valFil) => valFil !== el).length !== 0 &&
      !swaps.includes(arr.filter((valFil) => valFil !== el).toString())
    ) {
      swaps.push(arr.filter((valFil) => valFil !== el).toString());
      createArr(arr.filter((valFil) => valFil !== el));
    }
  });
  return swaps;
};

console.log(createArr([12, 3, 11, 5, 7]));
*/

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let swaps = [giftsCities.toString()];
  const createArr = (arrInput) => {
    arrInput.forEach((el, i, arr) => {
      if (
        arr.filter((elem) => elem !== el).length !== 0 &&
        !swaps.includes(arr.filter((elem) => elem !== el).toString())
      ) {
        swaps.push(arr.filter((elem) => elem !== el).toString());
        createArr(arr.filter((elem) => elem !== el));
      }
    });
    return swaps;
  };

  const maxSwaps = createArr(giftsCities)
    .map((str) => str.split(","))
    .filter((arr) => arr.length <= maxCities)
    .filter((arr) => {
      return arr.reduce((sum, el) => sum + +el, 0) <= maxGifts;
    })
    .map((arr) => arr.reduce((sum, el) => sum + +el, 0));
  return maxSwaps.length > 0 ? Math.max(...maxSwaps) : 0;
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3));

// getMaxGifts([12, 3, 11, 5, 7], 20, 3); // 20

// getMaxGifts([12, 3, 11, 5, 7], 20, 3); // 20
// getMaxGifts([50], 15, 1) // 0
// getMaxGifts([50], 100, 1) // 50
// getMaxGifts([50, 70], 100, 1) // 70
// getMaxGifts([50, 70, 30], 100, 2) // 100
// getMaxGifts([50, 70, 30], 100, 3) // 100
// getMaxGifts([50, 70, 30], 100, 4) // 100

// [
//   "11-12-3-5-7",
//   "11-12-3-5",
//   "11-12-5-7",
//   "12-3-5-7",
//   "11-12-3-7",
//   "11-3-5-7",
//   "11-12-3",
//   "11-12-5",
//   "12-5-7",
//   "11-3-5",
//   "3-5-7",
//   "12-3-7",
//   "11-5-7",
//   "11-12-7",
//   "12-3-5",
//   "11-3-7",
//   "12-3",
//   "11-12",
//   "11-3",
//   "3-5",
//   "11-5",
//   "11-7",
//   "5-7",
//   "12-5",
//   "12-7",
//   "3-7",
//   "12",
//   "3",
//   "11",
//   "5",
//   "7",
// ];

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
