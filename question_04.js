function findDifference(nums1, nums2) {
    let ans = [];
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
  
    let ans1 = new Set();
    let ans2 = new Set();
  
    for (let i = 0; i < nums2.length; i++) {
      if (!set1.has(nums2[i])) {
        ans1.add(nums2[i]);
      }
    }
  
    for (let i = 0; i < nums1.length; i++) {
      if (!set2.has(nums1[i])) {
        ans2.add(nums1[i]);
      }
    }
  
    let list1 = Array.from(ans2);
    let list2 = Array.from(ans1);
  
    ans.push(list1);
    ans.push(list2);
  
    return ans;
  }