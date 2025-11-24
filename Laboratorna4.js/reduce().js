function sum(...args) {
  if (args.length === 0) {
    return 0;
  }

  return args.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3));            // 6
console.log(sum(0));                  // 0
console.log(sum());                   // 0
console.log(sum(1, -1, 1));           // 1
console.log(sum(10, -1, -1, -1));   
