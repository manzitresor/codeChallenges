function solve(arr){
    let reversedArr = arr.reverse();

  return reversedArr.map((cur,index,target)=>{
    if(index === 0) {
        return cur.replace(/(Left|Right)/,'Begin');
    }
    if (target[index - 1].includes('Left')) {
        return cur.replace(/Left|Right|Begin/,'Right')
    }
    if (target[index - 1].includes('Right')) {
        return cur.replace(/Left|Begin|Right/,'Left');
    }
  })
}

console.log(solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]))