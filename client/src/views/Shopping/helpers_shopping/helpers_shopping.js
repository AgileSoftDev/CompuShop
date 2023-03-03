const validators = (target,value) =>{
    let result;

    switch (target) {
        case "name":
            value.length<40?result=true:result=false;
            break;
      case "city":
            value.length<20?result=true:result=false;

            break;
      case "direction":
            value.length<40?result=true:result=false;

            break;      
        case "phone":
            if(value.length<15 ){
                if(value[0]==="+"||!isNaN(value[0])){
                    const test = !isNaN(value.substring(1))
                    if (test) {
                        result=true
                    }
                }
            }
            if (value.length===0)result=true
            break;      
        case "references":
            value.length<130?result=true:result=false;

            
            break;            

        default:
            break;
    }

    return result;
};

export{
    validators,
}