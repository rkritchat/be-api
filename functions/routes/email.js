const app = module.exports = require('express')()
const mail = require('../service/SendEmailService')

app.get('/send', (req,res)=>{
    return mail.send(res)
});
