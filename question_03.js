function sortedSquares(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
  
    for (let i = n - 1; i >= 0; i--) {
      const squareLeft = nums[left] ** 2;
      const squareRight = nums[right] ** 2;
  
      if (squareLeft >= squareRight) {
        result[i] = squareLeft;
        left++;
      } else {
        result[i] = squareRight;
        right--;
      }
    }
  
    return result;
  }