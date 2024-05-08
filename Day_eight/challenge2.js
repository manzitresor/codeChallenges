function* nextElementGenerator(array) {
    for (let i = 0; i <= array.length; i++) {
      if( i == array.length ) i = 0
     yield array[i];
    }
  }