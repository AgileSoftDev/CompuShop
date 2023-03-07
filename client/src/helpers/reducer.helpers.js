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

function fusionarProductos(arr) {
    const resultado = {};
  
    for (const producto of arr) {
      if (producto._id in resultado) {
        resultado[producto._id].quantity += producto.quantity;
      } else {
        resultado[producto._id] = { ...producto };
      }
    }
  
    return Object.values(resultado);
  }


export {
    sortByPrice,
    fusionarProductos,
}


