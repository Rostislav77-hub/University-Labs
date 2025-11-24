function seq(...funcs) {
  return (arg) => {
    if (typeof arg === 'number') {
      let result = arg;
      for (let fn of funcs) {
        result = fn(result);
      }
      return result;
    }
    return seq(...funcs, arg);
  };
}

console.log('=== Тесты для seq() ===');
console.log('seq(x => x + 7)(x => x * 2)(5) =', 
  seq(x => x + 7)(x => x * 2)(5)); 

console.log('seq(x => x * 2)(x => x + 7)(5) =', 
  seq(x => x * 2)(x => x + 7)(5)); 

console.log('seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7) =', 
  seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));
