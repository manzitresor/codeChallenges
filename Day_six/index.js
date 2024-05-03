  const sexyPrime = (x, y) => [x,y].sort((a,b) => a - b).reduce((acc,curr) => acc = curr - acc,0) === 6;
  console.log(sexyPrime(5, 11)) //-->  true
  console.log(sexyPrime(7, 13)) //-->  true
  console.log(sexyPrime(5, 7)) //-->  false

