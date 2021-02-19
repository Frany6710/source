const nodemailer = require("nodemailer");
const { Webhook } = require("discord-webhook-node")


// Sender
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "automaticmail.frany6710@gmail.com",
        pass: "gatonto18"
    }
});

// MailOptions

function sendMail(email) {
    console.log(document.getElementById("exampleInputEmail1"))


    let MailOptions = {
        from: "Sistema automatico de mails de frany6710 <automaticmail.frany6710@gmail.com>",
        to: email,
        subject: "Frany lo contactara pronto",
        text: "Dentro de 24 horas frany lo contactara"
    }

    // Send

    transporter.sendMail(MailOptions, (err, data) => {
        if (err) {
            return console.log(err)
        }
        console.log(data)
        const hook = new Webhook("https://discord.com/api/webhooks/812137564097085492/RmVQqyCNwbEN8Uvv2itlz3eFb7lK6gVA50L1ZregtPXKKLHYDkabhHVc0ko3WyECqBqL")
        hook.send("Envie un mail a: "+email)
    })
}
