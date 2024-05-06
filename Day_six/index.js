
function primeChecker(a) {
   if( a <= 1) return false;
   if( a === 2) return true;
   const maxDivisor = Math.sqrt(a);
   for(let i = 2; i <= maxDivisor;i++) {
    if( a % i === 0) {
      return false
    }
   }
   return true
}

function sexyPrime(x, y){
    let result = [x,y].sort((a,b) => a - b).reduce((acc,curr) => acc = curr - acc,0);
    return result === 6 && (primeChecker(x)&&primeChecker(y));
  }

  console.log(sexyPrime(5, 11)) //-->  true
  console.log(sexyPrime(7, 13)) //-->  true
  console.log(sexyPrime(5, 7)) //-->  false
  console.log(sexyPrime(1, 7)) //-->  false