function* nextElementGenerator(array) {
    for (let x of array) {
     yield x;
    }
  }