const {
  phones,
  findPhoneByName,
  phoneHash,
  findPhoneByNameHash,
} = require("./5-collections.js");
console.log(
  'findPhoneByName("Marcus Aurelius"):',
  findPhoneByName("Marcus Aurelius")
);
console.log(
  'findPhoneByNameHash("Commodus"):',
  findPhoneByNameHash("Commodus")
);
console.log("Массив телефонов:", phones);
console.log("Хеш телефонов:", phoneHash);
