const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')

const app = express()
app.use(cors({origin:true}))
app.use(routes)


exports.sendMail = functions.https.onRequest(app)