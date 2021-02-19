const nodemailer = require("nodemailer");
const { Webhook } = require("discord-webhook-node")


// Sender
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "*******@gmail.com",
        pass: "*****"
    }
});

// MailOptions

function sendMail(email) {
    console.log(document.getElementById("exampleInputEmail1"))


    let MailOptions = {
        from: "******* <*******@gmail.com>",
        to: email,
        subject: "Test",
        text: "Test"
    }

    // Send

    transporter.sendMail(MailOptions, (err, data) => {
        if (err) {
            return console.log(err)
        }
        console.log(data)
        const hook = new Webhook("************")
        hook.send("Envie un mail a: "+email)
    })
}
