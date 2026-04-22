const random = require("./random");
const generateKey = require("./generateKey");
const ipToInt = require("./ipToInt");
const introspect = require("./introspect");

// Тест random
console.log("random(5, 10):", random(5, 10));
console.log("random(10):", random(10));

// Тест generateKey
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
console.log("generateKey(16, characters):", generateKey(16, characters));

// Тест ipToInt
console.log("127.0.0.1 ->", ipToInt("127.0.0.1"));
console.log("10.0.0.1 ->", ipToInt("10.0.0.1"));
console.log("192.168.1.10 ->", ipToInt("192.168.1.10"));
console.log("165.225.133.150 ->", ipToInt("165.225.133.150"));
console.log("0.0.0.0 ->", ipToInt("0.0.0.0"));
console.log("8.8.8.8 ->", ipToInt("8.8.8.8"));

// Тест introspect
const iface = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
  prop: 42,
};
console.log("introspect:", introspect(iface));
