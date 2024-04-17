function tenGreenBottles(n) {
  let numbers = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"]
   let lyrics = ""
   for(let i = n; i > 0; i --){
       if(i != 1){
           lyrics += `${numbers[i-1]} green bottles hanging on the wall,\n${numbers[i-1]} green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be ${numbers[i-2].toLowerCase()} green ${(numbers[i-2] == "One")?"bottle":"bottles"} hanging on the wall.\n\n`;
       }
       else{
           lyrics +=`One green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere'll be no green bottles hanging on the wall.\n`;
       }
   }
   return lyrics;
}  