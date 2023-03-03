const sortByPrice =  (allComponents, typeOrder) =>{
    let result = []
    switch (typeOrder) {
        case "all":

            result = [...allComponents]

            break;
        
        case "asc":
            
            result = [...allComponents].sort((a,b)=> b.price - a.price)

            break;

        case "desc":
            result = [...allComponents].sort((a,b)=> a.price - b.price)

            break;

        default:
            break;
    }

   return result;
};

export {
    sortByPrice,
}