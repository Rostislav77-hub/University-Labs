// inc2.js — инкремент поля объекта
function inc(obj) {
  obj.n = obj.n + 1;
}

const obj = { n: 5 };
inc(obj);
console.dir(obj);
