function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[right]) {
        // The minimum element is in the right half
        left = mid + 1;
      } else {
        // The minimum element is in the left half or mid itself
        right = mid;
      }
    }
  
    return nums[left];
  }