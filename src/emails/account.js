//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
const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)


const sendWelcomeEmail = (email, name) =>{
   sgMail.send({
       to: email,
       from: 'rajeshsachin786@gmail.com',
       subject: 'Thanks for Joining in!',
       text: `welcome to sengrid, ${name}. let me lnow how you get along app.`
   })

}

const sendCancelatEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'rajeshsachin786@gmail.com',
        subject: 'sorry to see you go',
        text: `Goodby, ${name}. I hope to see you back some time soone`
    })
}

   module.exports = {
       sendWelcomeEmail,
       sendCancelatEmail
   }
