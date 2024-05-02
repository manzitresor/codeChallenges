function longestWord(stringOfWords) {
  let splittedWord = stringOfWords.split(' ');
 return splittedWord.reduce((acc,curr) => acc.length > curr.length ? acc : curr,'')
}

/* Test cases
longestWord("red blue gold") => white
longestWord("red blue gold") => gold
*/