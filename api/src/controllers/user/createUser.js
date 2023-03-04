const User = require('../../models/users.js')
const {getUser} = require('../../controllers/user/getUser.js')


const createUser = async (email) => {
    const data = await getUser(email.email)
    
    const userData = {
        nickname: data[0].nickname,
        email: data[0].email,
        userid: data[0].user_id
    }
    
     const user = await User.findOneAndUpdate(
      { email: userData.email },
      userData,
      { upsert: true, new: true }
    );
    return user;
}

module.exports = createUser