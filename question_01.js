function construct2DArray(original, m, n) {
  const totalElements = original.length;
  if (totalElements !== m * n) {
    // Not enough elements to fill the 2D array
    return [];
  }
  
  const result = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(original[i * n + j]);
    }
    result.push(row);
  }
  
  return result;
}