const mail = require('nodemailer')

let mailOptions = {
    from: 'kritchat.r@gmail.com',                // sender
    to: 'rkritchat@gmail.com',                // list of receivers
    subject: 'Hello from sender',              // Mail subject
    html: '<b>Do you receive this mail?</b>'   // HTML body
}
  
let transport = mail.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'kritchat.r@gmail.com',
        pass: 'tdjfK@66'
    } 
  })
  
const sendEmail = (res) => transport.sendMail(mailOptions, (err, info)=>{
    if(err){
        console.log('Failed..'+ err)
        return res.send(err)
    }else{
        console.log('Success..'+ info)
        return res.send(info)
    }
})

exports.send = sendEmail;