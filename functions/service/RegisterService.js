const exceptionConstant = require('../constant/ExceptionConstant')
const stringUtils = require('../utils/StringUtils')
const User = require('../model/UserModel')
const ResponseModel = require('../model/ResponseModel')

let execute = (req, res) =>{
    let user = new User(req.body)
    console.log("User is "+ User)
    try{
        validateRequiredFiled(User);
        validateDuplicateUser(User.user);
        res.send(new ResponseModel('0000', 'Register Successfully', user))
    }catch(e){
        console.log('Exception occur' + e)
        res.send(new ResponseModel('0001', e, user))
    }
    return res
}

function validateRequiredFiled(User){
    if(stringUtils.isNull(User.firstName)){
        throw exceptionConstant.NAME_IS_REQUIRED
    }else if(stringUtils.isNull(User.lastName)){
        throw exceptionConstant.LASTNAME_IS_REQUIRED
    }else if(stringUtils.isNull(User.user)){
        throw exceptionConstant.USERNAME_IS_REQUIRED
    }else if(stringUtils.isNull(User.pwd)){
        throw exceptionConstant.PASSWORD_IS_REQUIRED
    }else if(stringUtils.isNull(User.email)){
        throw exceptionConstant.EMAIL_IS_REQUIRED
    }
}

function validateDuplicateUser(username){

}

exports.execute=execute;