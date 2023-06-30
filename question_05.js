let findTheDistanceValue = function(arr1, arr2, d) {
  let distance = 0;

  for (let i = 0; i < arr1.length; i++) {
    let isValid = true;
    
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      distance++;
    }
  }

  return distance;
};