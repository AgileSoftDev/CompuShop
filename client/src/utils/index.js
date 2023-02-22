function cleanPathname(string){;
    const result = string[string.length-1] === "/" ? string.slice(0,-1) : string;
    return result
};

function paginationArray (array, num) {
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


export{
    cleanPathname,
    paginationArray,
}



// export function orderArray(array, option) {
//   function SortArrayByAsc(x, y){
//     if (x.price < y.price) {return -1;}
//     if (x.price > y.price) {return 1;}
//     return 0;
//   }

//   function SortArrayByDesc(x, y){
//     if (x.price > y.price) {return -1;}
//     if (x.price < y.price) {return 1;}
//     return 0;                                                                                                                                                                                                                        
//   }


//   switch (option) {
//     case 'asc':
//       return array.sort(SortArrayByAsc);
//     case 'desc':
//       return array.sort(SortArrayByDesc);

//     default:
//       break;
//   }
// }
