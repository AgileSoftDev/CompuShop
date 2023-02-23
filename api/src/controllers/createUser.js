const User = require('./../models/users.js')

const createUser = async data => {
    console.log(data)
    if(!data.userName) throw 'Atributo «Nombre» es requerido';
    if(!data.userCategory) throw 'Atributo «Categoría» es requerido';
    if(!data.email) throw 'Atributo «Email» es requerido';
    if(!data.password) throw 'Atributo «Password» es requerido';
    if(!data.wallet) throw "Atributo «Wallet» es requerido";
    if(!data.phoneNumber) throw 'Atributo «PhoneNumber» es requerido';
    const user = new User(data);
    const savedUser = await user.save();
    return savedUser;
}

module.exports = createUser