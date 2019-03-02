
module.exports = class User{
    constructor(body){
        this.firstName = body.firstName
        this.lastName = body.lastName
        this.user = body.user
        this.pwd = body.pwd
        this.email = body.email;
    }
}