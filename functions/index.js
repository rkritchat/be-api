const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const send = require('./service/SendEmailService')
const User = require('./model/Users')
const BeResponse = require('./model/response')
//const admin = require('firebase-admin')

//admin.initializeApp(functions.config().firebase)
const app = express()
app.use(cors({origin:true}))
app.get('/send', (req,res)=>{
    return send.send(res)
});
let test = {'name':'earl'}

app.post('/register', (req,res)=>{
    let user = new User(req.body)
    console.log(user)
    return res.send(new BeResponse('Success', 'Register Successfully', user))
})

exports.sendMail = functions.https.onRequest(app)