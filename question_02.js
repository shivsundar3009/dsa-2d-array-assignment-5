function arrangeCoins(n) {
    let k = 1;
    while ((k * (k + 1)) / 2 <= n) {
      k++;
    }
    return k - 1;
  }