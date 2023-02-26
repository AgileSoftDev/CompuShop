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
}