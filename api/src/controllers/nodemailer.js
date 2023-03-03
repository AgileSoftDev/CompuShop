const nodemailer = require('nodemailer')

const send = async(fromMail, toMail, name) => {

    const transport ={
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: fromMail,
            pass: 'kisnieriqqkuaxwm'
        }
    }

    const mensaje = {
        from: fromMail,
        to: toMail,
        subject: 'Compra (no) realizada',
        text: '(No) Has realizado tu compra satisfactoriamente con CompuShop; ¡(no) agradecemos tu preferencia!'
    }

    const transporter = nodemailer.createTransport(transport);

    const info = await transporter.sendMail(mensaje);

    console.log(info)
}

module.exports = send