let counter = {
  [Symbol.iterator](){
    let counter = 1;
    return { 
      next(){  
          return { done: false, value: counter++}
      }
    }
  }
}
