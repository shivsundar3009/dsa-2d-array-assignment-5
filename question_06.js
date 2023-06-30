function findDuplicates(nums) {
    const duplicates = [];
  
    for (let i = 0; i < nums.length; i++) {
      const absNum = Math.abs(nums[i]);
      if (nums[absNum - 1] < 0) {
        duplicates.push(absNum);
      } else {
        nums[absNum - 1] *= -1;
      }
    }
  
    return duplicates;
  }