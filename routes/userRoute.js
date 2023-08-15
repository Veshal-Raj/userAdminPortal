const express = require("express")
const bodyParser =  require("body-parser")
const multer = require("multer")
const path = require("path")

const user_route = express()

user_route.use(bodyParser.json())
user_route.use(bodyParser.urlencoded({extended:true}))

user_route.use(express.static('public'))

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/userImages'),function(error,sucess){
            if(error) throw error       
        })
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname
        cb(null,name,function(error1,success1){
            if(error1)throw error1
        })
    }
})

const upload = multer({storage:storage}) 

const user_controller = require("../controllers/userController")

user_route.post('/register',upload.single('image'),user_controller.registerUser)

user_route.post('/login',user_controller.user_login)

module.exports = user_route