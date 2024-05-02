function mobileKeyboard(str){
    let keys =['1234567890*#','adgjmptw','behknqux','cfilorvy','sz']
    let result = [...str].reduce(function(acc,curr) {
      return acc + keys.findIndex( index => index.includes(curr));
  },str.length)
    return result;
  }