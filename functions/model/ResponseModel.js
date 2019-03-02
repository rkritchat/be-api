module.exports = class ResponseModel{
    constructor(statusCode, statusDesc, obj){
        this.statusCode = statusCode
        this.statusDesc = statusDesc
        this.obj = obj
    }
}