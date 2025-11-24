function store(value) {
  return function() {
    return value;
  };
}

console.log('\n=== Задача 2: store ===');
const read = store(5);
const value = read();
console.log(value); 

const read2 = store('Hello');
console.log(read2());
