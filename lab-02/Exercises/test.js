// Тесты для лабораторной работы №2
const identifiers = require("./1-identifiers.js");
const range = require("./2-range.js");
const functions = require("./3-functions.js");
const objects = require("./4-objects.js");
const collections = require("./5-collections.js");

console.log("--- Идентификаторы ---");
console.log("Имя:", identifiers.myName);
console.log("Год рождения:", identifiers.birthYear);
identifiers.greet(identifiers.myName);

console.log("\n--- Диапазоны ---");
console.log("range(15, 30):", range.range(15, 30));
console.log("rangeOdd(15, 30):", range.rangeOdd(15, 30));

console.log("\n--- Функции ---");
console.log("average(2, 4):", functions.average(2, 4));
console.log("square(5):", functions.square(5));
console.log("cube(3):", functions.cube(3));
console.log("calculate():", functions.calculate());

console.log("\n--- Объекты ---");
console.log("fn():", objects.fn());
console.log(
  "createUser('Marcus Aurelius', 'Roma'):",
  objects.createUser("Marcus Aurelius", "Roma")
);

console.log("\n--- Коллекции ---");
console.log(
  'findPhoneByName("Marcus Aurelius"):',
  collections.findPhoneByName("Marcus Aurelius")
);
console.log(
  'findPhoneByNameHash("Commodus"):',
  collections.findPhoneByNameHash("Commodus")
);
console.log("Массив телефонов:", collections.phones);
console.log("Хеш телефонов:", collections.phoneHash);
