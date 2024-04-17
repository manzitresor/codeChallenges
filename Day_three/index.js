function solution(string) {
    let result = '';
    if(string.length === 0){
        return "";
    }
    for( let i = 0; i < string.length; i++) {
        string[i] == string[i].toUpperCase() ? result +=" "+string[i] : result += string[i];
    }
    return result;
}


// console.log(solution(""));
console.log(solution("camelCasing"));