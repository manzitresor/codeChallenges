/*
 1. vowels as input
 2. loop through the string
 3. check for vowels
 4.if vowels found replace accordingly
*/

function encode(string) {
  let result = ''
  for( let i = 0; i < string.length; i++) {
    switch(string[i]) {
      case 'a': result += '1'
      break;
      case 'e': result += '2'
      break;
      case 'i': result += '3'
      break;
      case 'o': result += '4'
      break;
      case 'u': result += '5'
      break;
      default: result += string[i];
      break;
    }
  }
  return result;
}

function decode(string) {
  let result = ''
  for( let i = 0; i < string.length; i++) {
    switch(string[i]) {
      case '1': result += 'a'
      break;
      case '2': result += 'e'
      break;
      case '3': result += 'i'
      break;
      case '4': result += 'o'
      break;
      case '5': result += 'u'
      default: result += string[i];
    }
  }
  return result;
}

console.log(encode('How are you today?')) //'H4w 1r2 y45 t4d1y?'