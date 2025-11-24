function unique(array) {
  return [...new Set(array)];
}

console.log('=== Задание 3: unique ===');

const result1 = unique([2, 1, 1, 3, 2]);
console.log('Уникальные числа:', result1);

const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log('Уникальные строки:', result2);
