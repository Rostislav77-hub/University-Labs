function removeElements(array, ...items) {
  items.forEach(item => {
    let index;
    while ((index = array.indexOf(item)) !== -1) {
      array.splice(index, 1);
    }
  });
}

console.log('=== Задание 2: removeElements ===');

const array3 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array3, 5, 1, 6);
console.log('Удалили 5, 1, 6:', array3);

const array4 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array4, 'Lima', 'Berlin', 'Kiev');
console.log('Удалили Lima, Berlin, Kiev:', array4);
