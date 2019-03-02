const Response = require('./response')

module.exports = class User{
    
    constructor(body){
        this.name = body.name
        this.lastName = body.lastName
        this.user = body.user
        this.pwd = body.pwd
        this.email = body.email;
    }

    validate(){
        if(this.name == null){
            return new Response('ERROR','Name is required.',null)
        }
    }
    

}

