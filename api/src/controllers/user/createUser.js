const User = require('../../models/users.js')
const {getUser} = require('../../controllers/user/getUser.js')


const createUser = async (email) => {
    const data = await getUser(email.email)
    
    const userdata = {
        nickname: data[0].nickname,
        email: data[0].email,
        userid: data[0].user_id
    }
    
     const user = new User(userdata);
     const savedUser = await user.save();
     return savedUser;
}

module.exports = createUser