const {Router} = require('express');
const send = require('../controllers/nodemailer');
const nodemailer = Router();

nodemailer.post('/', async(req, res) => {
    try {
        const { fromMail, toMail, name } = req.body;
        res.send(await send(fromMail, toMail, name));
    } catch (error) {
        res.send({error: 'Pago no autorizado'})
    }
})

module.exports = nodemailer;