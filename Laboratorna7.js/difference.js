function difference(array1, array2) {
  return array1.filter(item => !array2.includes(item));
}

console.log('=== Задание 4: difference ===');

const arr1 = [7, -2, 10, 5, 0];
const arr2 = [0, 10];
const result3 = difference(arr1, arr2);
console.log('Разница [7, -2, 10, 5, 0] и [0, 10]:', result3);

const arr3 = ['Beijing', 'Kiev'];
const arr4 = ['Kiev', 'London', 'Baghdad'];
const result4 = difference(arr3, arr4);
console.log('Разница [Beijing, Kiev] и [Kiev, London, Baghdad]:', result4);
