// typeCount.js — подсчёт типов в массиве
const arr = [
  true,
  "hello",
  5,
  12,
  -200,
  false,
  false,
  "word",
  null,
  undefined,
  {},
  [],
  3.14,
  Symbol("s"),
  function () {},
];

const typeCounts = {};

for (const el of arr) {
  const type = typeof el;
  if (!(type in typeCounts)) {
    typeCounts[type] = 0;
  }
  typeCounts[type]++;
}

console.dir(typeCounts);
