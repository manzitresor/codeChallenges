function filter_list(l) {
    let newArr = []
    for(let i = 0; i < l.length; i++) {
      if(Number.isInteger(l[i])) {
        newArr.push(l[i])
      }
    }
    return newArr;
  }