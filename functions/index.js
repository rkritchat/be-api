const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const app = express()
const send = require('./service/SendEmailService')
//const admin = require('firebase-admin')

//admin.initializeApp(functions.config().firebase)
app.use(cors({origin:true}))
app.get('/send', (req,res)=>{
    return send.send(res)
});

exports.sendMail = functions.https.onRequest(app)