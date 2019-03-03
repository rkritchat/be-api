const exceptionConstant = require('../constant/ExceptionConstant')
const stringUtils = require('../utils/StringUtils')
const User = require('../model/UserModel')
const ResponseModel = require('../model/ResponseModel')

let execute = (req, res) =>{
    let userInfo
    try{
        userInfo = new Promise(new User(req.body)).then( 
        console.log("====>" + userInfo.firstName),
        validateRequiredFiled(userInfo),
        validateDuplicateUser(userInfo.user),
        res.send(new ResponseModel('0000', 'Register Successfully', userInfo)))
    }catch(e){
        console.log('Exception occur' + e)
        res.send(new ResponseModel('0001', e, userInfo))
    }
    return res
}

function validateRequiredFiled(userInfo){
    if(stringUtils.isNull(userInfo.firstName)){
        throw exceptionConstant.NAME_IS_REQUIRED
    }else if(stringUtils.isNull(userInfo.lastName)){
        throw exceptionConstant.LASTNAME_IS_REQUIRED
    }else if(stringUtils.isNull(userInfo.user)){
        throw exceptionConstant.USERNAME_IS_REQUIRED
    }else if(stringUtils.isNull(userInfo.pwd)){
        throw exceptionConstant.PASSWORD_IS_REQUIRED
    }else if(stringUtils.isNull(userInfo.email)){
        throw exceptionConstant.EMAIL_IS_REQUIRED
    }
}

function validateDuplicateUser(username){
    console.log('Username is ' + username)
}

exports.execute=execute;