const functions = require('firebase-functions');
const mail = require('nodemailer')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({origin:true}))

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

app.get('/send', (req,res)=>{
  transport.sendMail(mailOptions, (err, info)=>{
    if(err){
        console.log('Failed..'+ err)
        return res.send(err)
    }else{
        console.log('Success..'+ info)
        return res.send(info)
    }
  })
});
exports.sendMail = functions.https.onRequest(app)

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   transport.sendMail(mailOptions, (err, info)=>{
//     if(err){
//         console.log('Failed..'+ err)
//         return response.send(err)
//     }else{
//         console.log('Success..'+ info)
//         return response.send(info)
//     }
//   })
// });