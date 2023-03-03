// const { faker } = require('@faker-js/faker');


// const assignType = (id) => {
//   if(id<6){
//     return "motherboard"
//   }else if(id>=6&&id<12||id==12){
//     return "processor"
//   }else if(id>12&&id<18||id==18){
//     return "air_cooling"
//   }else if(id>18&&id<24||id==24){
//     return "RAM"
//   }else if(id>24&&id<30||id==30){
//     return "power_supply"
//   }else if(id>30&&id<36||id==36){
//     return "HDD"
//   }else if(id>36&&id<42||id==42){
//     return "SSD"
//   }else if(id>42&&id<48||id==48){
//     return "liquid_cooling"
//   }else if(id>48&&id<50){
//     return "GPU"
//   }else return "error"
// }

// function generateComponents () {
//   var components = []
//   for (var id = 0; id < 50; id++) {
//     var name = faker.commerce.productName()
//     var type = assignType(id)
//     var price = faker.commerce.price()
//     var model = faker.random.numeric()
//     components.push({
//       "id": id,
//       "name": name,
//       "type": type,
//       "price": price,
//       "model": model
//     })
//   }
//   return { "components": components }
// }
// module.exports = generateComponents
