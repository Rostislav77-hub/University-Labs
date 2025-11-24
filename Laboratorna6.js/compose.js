const compose = (...functions) => {
 
  for (let i = 0; i < functions.length; i++) {
    if (typeof functions[i] !== 'function') {
      throw new Error(`Аргумент на позиції ${i} не є функцією`);
    }
  }
  
  const composedFunction = (initialValue) => {
    let result = initialValue;
    
    for (let i = functions.length - 1; i >= 0; i--) {
      try {
        result = functions[i](result);
      } catch (error) {
        
        if (composedFunction.errorHandler) {
          composedFunction.errorHandler(error);
        }
       
        return undefined;
      }
    }
    
    return result;
  };
  
  composedFunction.on = (event, callback) => {
    if (event === 'error') {
      composedFunction.errorHandler = callback;
    }
  };
  
  return composedFunction;
};

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = compose(cube, twice, inc);
console.log(f1(5)); 
const throwError = x => {
  throw new Error('Error occurred');
};

const f2 = compose(cube, throwError, inc);
console.log(f2(5)); 

const f3 = compose(cube, throwError, inc);
f3.on('error', e => {
  console.log('Error:', e.message);
});
console.log(f3(5)); 
