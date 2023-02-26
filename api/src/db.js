// require('dotenv').config();
// const mongoose = require("mongoose");

// const {
//   DB_USER,
//   DB_PASSWORD,
//   DB_HOST,
//   DB_NAME,
// } = process.env;

// async function connectToDatabase() {
//   mongoose.set('strictQuery', true);
//   try {
//     const connection = await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Conexión establecida con éxito');
//     return connection.connection.db;
//   } catch (error) {
//     console.error('Error al conectar a la base de datos:', error);
//     throw error;
//   }
// }

// async function main() {
//   try {
//     const db = await connectToDatabase();
//     // Do something with the db instance here...
//   } catch (error) {
//     console.error('Error al conectar a la base de datos:', error);
//   }
// }

// main().catch(err => console.log(err));



require('dotenv').config();
const mongoose= require("mongoose");

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

main().catch(err => console.log(err));
console.log(DB_HOST)
console.log(DB_PASSWORD)
console.log(DB_USER)

async function main() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`);
  // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled
}