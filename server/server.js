const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const express = require('express')
const cors = require("cors");
const config = require('./config')
// const fs = require('fs')
const path = require('path')
// const multer  = require('multer');
// const formidableMiddleware = require('express-formidable')
// const {GridFsStorage} = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream')
// const methodOverride = require('method-override')
const bodyParser = require('body-parser')





//routes
const router = express.Router()

const uploadRoute =require('./routes/uploadRoute')
const messagesRoute = require('./routes/messagesRoute')
const userRoute = require('./routes/userRoute')
const usersRoute = require('./routes/usersRoute')


const {
    serverPort,
    cookieKeys,
    cookieMaxAge,
    cookieSessionName,
    mongoDbUrl
} = config.module

const app = express()
app.listen(serverPort)



mongoose.connect(mongoDbUrl)


//middleware
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json())
app.use(cookieSession({
    name: cookieSessionName,
    keys: cookieKeys,
    maxAge: cookieMaxAge
}))

app.use('/',uploadRoute)
app.use('/',messagesRoute)
app.use('/',userRoute)
app.use('/',usersRoute)

app.get('/userimgs/:name',(req,res)=>{

    if (req.session.authToken&&req.params.name){
        
        res.sendFile(path.join(__dirname,'./userimgs', req.params.name))
    }


}
)


