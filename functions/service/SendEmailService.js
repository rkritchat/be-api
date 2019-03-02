const mail = require('nodemailer')
const ResponseModel = require('../model/ResponseModel')

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
        res.send(new ResponseModel('0001','ERROR', err))
    }else{
        console.log('Success..'+ info)
        res.send(new ResponseModel('0000','SUCCESS', info))
    }
    return res
})

exports.send = sendEmail;