const admin = require('firebase-admin')
const CONFIG = require('../constant/BeConstant')

admin.initializeApp(CONFIG.DATABASE_CONFIG)

module.exports = {
    createUser: async (userInfo)=> { //uu, json
        //{firstname: userInfo.firstname, lastname: userInfo.lastname}
        let data = JSON.parse(JSON.stringify(userInfo))
        admin.database().ref('/users').child(data.user).set(data,
            function(error) {
                if (error) {
                    console.log("ERROR ===>> " + error)
                } 
                else {
                    console.log("Data saved successfully.")
                }
            })
    },

    validateUsername: async (username)=>{
        admin.database().ref('/users').on(username, (r,e)=>{
            
        })
    }
}