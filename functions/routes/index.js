const app = module.exports = require('express')()

app.get('/', (req,res)=>{
    res.send('Server running...')
})

app.use('/email', require('./email'))

app.use('/user', require('./user'))