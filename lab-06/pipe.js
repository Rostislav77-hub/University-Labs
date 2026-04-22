const pipe = (...functions) => {
  
  for (let i = 0; i < functions.length; i++) {
    if (typeof functions[i] !== 'function') {
      throw new Error(`Argument ${i} is not a function`);
    }
  }
  
  return (initialValue) => {
    let result = initialValue;
    
    for (let i = 0; i < functions.length; i++) {
      result = functions[i](result);
    }
    
    return result;
  };
};


const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5)); 
