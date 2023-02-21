function cleanPathname(string){;
    const result = string[string.length-1] === "/" ? string.slice(0,-1) : string;
    return result
};

export function paginationArray(array, num) {
    let resultArray = [];
    let count = 0;
    let numArray = [];
  
    for (const element of array) {
      if(count === num){
        resultArray.push(numArray);
        count = 0;
        numArray = [];
      }
      numArray.push(element)
      count++;
    }
    resultArray.push(numArray);
    return resultArray;
}

export function orderArray(array, option) {
  function SortArrayByAsc(x, y){
    if (x.price < y.price) {return -1;}
    if (x.price > y.price) {return 1;}
    return 0;
  }

  function SortArrayByDesc(x, y){
    if (x.price > y.price) {return -1;}
    if (x.price < y.price) {return 1;}
    return 0;                                                                                                                                                                                                                        
  }

  // function SortArrayByHealthScore(x, y){
  //   if (x.health_score < y.health_score) {return 1;}
  //   if (x.health_score > y.health_score) {return -1;}
  //   return 0;
  // }

  switch (option) {
    case 'asc':
      return array.sort(SortArrayByAsc);
    case 'desc':
      return array.sort(SortArrayByDesc);
    // case 'health_score':
    //   return array.sort(SortArrayByHealthScore);
    default:
      break;
  }
}

export{
    cleanPathname,
}
