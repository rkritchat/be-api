const exceptionConstant = require('../constant/ExceptionConstant')
const stringUtils = require('../utils/StringUtils')
const User = require('../model/UserModel')
const ResponseModel = require('../model/ResponseModel')
const async = require('asyncawait')
const await = require('asyncawait')
const userDao = require('../dao/UserDao')

let execute = async (req, res) =>{
    let userInfo
    try{
        await new Promise((resolve, reject) => resolve(iniUserInfo(req))).then(e=>{userInfo = e})
        await validateRequiredFiled(userInfo)
        //await userDao.validateUsername(userInfo.user)
        await userDao.createUser(userInfo)
        res.send(new ResponseModel('0000', 'Register Successfully', userInfo))
    }catch(e){
        console.log('Exception occur ===>> ' + e)
        res.send(new ResponseModel('0001', e, userInfo))
    }
    return res
}

async function iniUserInfo(req){
    return new User(req.body)
}

async function validateRequiredFiled(userInfo){
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

exports.execute=execute;