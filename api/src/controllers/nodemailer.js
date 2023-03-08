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
        from: 'CompuShop',
        to: toMail,
        subject: '¡Compra realizada!',
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body style="width: 320px; margin: 0 auto;">
            <div style="background-color: rgb(44, 44, 37); padding: 16px 0;">
                <a href="https://compu-shop-front-a788cu0ls-compushop.vercel.app"><img src="https://compu-shop-front-a788cu0ls-compushop.vercel.app/static/media/compu-shop_logo.cea18768.png" alt="" style="width: 70%; margin: 0 auto; display: block;"></a>
            </div>
            <div>
                <p>Hola, ${name}.</p>
                <p>Agradecemos tu compra y esperamos disfrutes mucho tus productos.</p>
            </div>
            <hr>
            <div>
                <p style="text-align: center; font-size: 12px;">Todos los derechos reservados a CompuShop y sus desarrolladores</p>
            </div>
        </body>
        </html>`
    }

    const transporter = nodemailer.createTransport(transport);

    const info = await transporter.sendMail(mensaje);

    console.log(info)
}

module.exports = send