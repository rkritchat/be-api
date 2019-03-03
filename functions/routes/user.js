const app = module.exports = require('express')()
const register = require('../service/RegisterService')

app.post('/register', (req,res)=>{
    return register.execute(req,res)
})