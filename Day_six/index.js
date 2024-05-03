function sexyPrime(x, y){
    let sorted = [x,y].sort((a,b) => a - b);
    let result = sorted.reduce((acc,curr) => {
         acc = curr - acc;
       return acc;
    },0);
    
  if (result === 6) {
        return true
    } 
    else {
      return false
    }
  }

  console.log(sexyPrime(5, 11)) //-->  true
  console.log(sexyPrime(7, 13)) //-->  true
  console.log(sexyPrime(5, 7)) //-->  false

