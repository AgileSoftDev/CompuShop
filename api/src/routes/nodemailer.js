const {Router} = require('express');
const send = require('./../controllers/nodemailer.js')

const nodemailer = Router();

nodemailer.post('/', (req, res) => {
    try {
        const { fromMail, toMail, name } = req.body;
        send(fromMail, toMail, name)
        res.status(200).send({status: 'Correo enviado con éxito'});
    } catch (error) {
        res.send({error: 'El correo no ha posido ser enviado'});
    }
})

module.exports = nodemailer