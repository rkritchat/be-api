const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const send = require('./service/SendEmailService')
const registerService = require('./service/RegisterService')
//const admin = require('firebase-admin')

//admin.initializeApp(functions.config().firebase)
const app = express()
app.use(cors({origin:true}))

app.get('/send', (req,res)=>{
    return send.send(res)
});

app.post('/register',(req, res)=>{
    return registerService.execute(req, res)
})

exports.sendMail = functions.https.onRequest(app)