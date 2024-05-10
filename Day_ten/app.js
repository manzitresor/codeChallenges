function factory(x) {
  function mult(arr) {
    let result = [];
    for(let i of arr) {
      result.push(i*x);
    }
   return result;
  };
  return mult
}

let fives = factory(5);
let myArr = [1,2,4]
fives(myArr)