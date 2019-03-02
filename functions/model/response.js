module.exports = class response{
    
    constructor(status, desc, obj){
        this.status = status
        this.desc = desc
        this.obj = obj
    }
}