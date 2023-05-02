"use strict";
// ============================================================================
// Día Veinte
// ============================================================================
/*
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************

*/

function printTable(gifts) {
  let lenG = 4;
  let lenQ = 8;
  for (let i = 0; i < gifts.length; i++) {
    if (gifts[i].name.length > lenG) lenG = gifts[i].name.length;
    if (gifts[i].quantity.toString().length > lenQ) {
      lenQ = gifts[i].quantity.toString().length;
    }
  }
  const lenT = 2 + lenG + 3 + lenQ + 2;
  // Table Head
  let strTab = "+".repeat(lenT) + "\n";
  strTab += "| " + "Gift " + " ".repeat(lenG - 4);
  strTab += "| " + "Quantity " + " ".repeat(lenQ - 8) + "|" + "\n";
  strTab += "| " + "-".repeat(lenG) + " | " + "-".repeat(lenQ) + " |" + "\n";
  // Table Body
  const tBody = [];
  for (let j = 0; j < gifts.length; j++) {
    strTab +=
      "| " +
      gifts[j].name +
      " " +
      " ".repeat(lenG - gifts[j].name.length) +
      "| " +
      gifts[j].quantity.toString() +
      " " +
      " ".repeat(lenQ - gifts[j].quantity.toString().length) +
      "|" +
      "\n";
  }
  strTab += "*".repeat(lenT);

  return strTab;
}

const gifts = [
  { name: "PlayStation 5", quantity: 9234782374892 },
  { name: "Book Learn Web Dev", quantity: 23531 },
];

printTable(gifts);
