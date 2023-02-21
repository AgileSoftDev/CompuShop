require('dotenv').config();
const mongoose= require("mongoose");

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

main().catch(err => console.log(err));

async function main() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`);
  // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled
}