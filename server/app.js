const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const express = require('express')
const cors = require("cors");
const config = require('./config')
const path = require('path')
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


const corsOption = {
    // origin: 'http://localhost:3000',
    origin: 'http://owliedev.pl',
    credentials: true
}

//middleware
app.use(cors(corsOption));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.header('Origin'));
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });



app.use(express.json())
app.use(cookieSession({
    name: cookieSessionName,
    keys: cookieKeys,
    maxAge: cookieMaxAge
}))

app.use('/',cors(corsOption),uploadRoute)
app.use('/',cors(corsOption),messagesRoute)
app.use('/',cors(corsOption),userRoute)
app.use('/',cors(corsOption),usersRoute)

app.get('/userimgs/:name',cors(corsOption),(req,res)=>{

    // if (req.session.authToken&&req.params.name){
        
    // }
    
    res.sendFile(path.join(__dirname,'./userimgs', req.params.name))

}
)


