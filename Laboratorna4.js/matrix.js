function max(matrix) {
  let maxValue = -Infinity;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const value = matrix[i][j];
      if (value > maxValue) {
        maxValue = value;
      }
    }
  }

  return maxValue;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); 
