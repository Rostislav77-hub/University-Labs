function array() {
  let arr = [];
  
  function get(index) {
    return arr[index];
  }
  
  get.push = (value) => arr.push(value);
  get.pop = () => arr.pop();
  
  return get;
}

console.log('\n=== Тесты для array() ===');
const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log('arr(0) =', arr(0)); 
console.log('arr(1) =', arr(1)); 
console.log('arr(2) =', arr(2));

console.log('arr.pop() =', arr.pop()); 
console.log('arr.pop() =', arr.pop()); 
console.log('arr.pop() =', arr.pop()); 
console.log('arr.pop() =', arr.pop()); 


console.log('\n=== Дополнительный тест для array() ===');
const arr2 = array();
arr2.push(1);
arr2.push(2);
arr2.push(3);
console.log('arr2(0) =', arr2(0)); 
console.log('arr2(1) =', arr2(1)); 
console.log('arr2(2) =', arr2(2));
