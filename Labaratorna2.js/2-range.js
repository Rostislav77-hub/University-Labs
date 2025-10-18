function range(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
}

function rangeOdd(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) if (i % 2 !== 0) arr.push(i);
  return arr;
}

module.exports = { range, rangeOdd };
