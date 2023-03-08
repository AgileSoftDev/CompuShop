const {ManagementClient} = require ('auth0')
const User = require('../../models/users.js')


const auth00 = new ManagementClient({
    domain: 'dev-4x4kckwt6fai1h5p.us.auth0.com',
    clientId: '0rz7r9PL1OGWZdZtBoF04s0v0mjX72HZ',
    clientSecret: 'YOkY7GE323hK4hCMqKJDK1qHn5-IrUzdHHo3Px2tacdBAuG7g8AJhNKWxIUVdTgl',
    scope: 'read:users'
  });
  
  // Get all users
 const getAllUsers = async ()=>{
    try {
      return await auth00.users.getAll();
    } catch (error) {
      throw new Error(error.message)
    }
    
 }

 const getUser = async (useremail) => {
  try {
    return await auth00.users.getByEmail(useremail);
  } catch (error) {
    throw new Error(error.message)
  }
  
 }

 const getDB = async () => {
  try {
    return await User.find()
  } catch (error) {
    throw new Error(error)
  }
 }

 const getUserDb = async (email) => {
  try {
    return await User.findOne({email: email})
  } catch (error) {
    throw new Error(error)
  }
 }



module.exports= {getAllUsers, getUser, getDB, getUserDb}
