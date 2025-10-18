function generateKey(length, characters) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters[random(characters.length - 1)];
  }
  return result;
}

const random = require("./random");
module.exports = generateKey;
