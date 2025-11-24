function contract(fn, ...types) {
  return function(...args) {

    const argTypes = types.slice(0, -1);
    const returnType = types[types.length - 1];
    
    if (args.length !== argTypes.length) {
      throw new TypeError(
        `Expected ${argTypes.length} arguments, but got ${args.length}`
      );
    }
    
    for (let i = 0; i < args.length; i++) {
      const expectedType = argTypes[i];
      const actualType = args[i].constructor;
      
      if (actualType !== expectedType) {
        throw new TypeError(
          `Argument ${i} should be ${expectedType.name}, but got ${actualType.name}`
        );
      }
    }
    
    
    const result = fn(...args);
    
    
    if (result.constructor !== returnType) {
      throw new TypeError(
        `Return value should be ${returnType.name}, but got ${result.constructor.name}`
      );
    }
    
    return result;
  };
}

console.log('\n=== Задача 3: contract ===');

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.log('addNumbers(2, 3):', res1); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.log('concatStrings("Hello ", "world!"):', res2); 

try {
  const res3 = addNumbers('2', 3); 
  console.log(res3);
} catch (e) {
  console.log('Ошибка:', e.message);
}

try {
  const res4 = addNumbers(2, 3, 5); 
  console.log(res4);
} catch (e) {
  console.log('Ошибка:', e.message);
}
