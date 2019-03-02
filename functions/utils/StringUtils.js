const trim = require('trim')

module.exports = {
    isNull : (obj) =>{
        return obj==null || (obj!=null || trim(obj).length == 0)
    }
}