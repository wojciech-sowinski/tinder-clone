const express = require('express');
const router = express.Router();
const User = require('../models/user')
const multer  = require('multer');
const formidableMiddleware = require('express-formidable')

const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
  ]

const fileStorageEngine = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'./imguploads')
    },
    
})

const upload = multer({
    storage:fileStorageEngine,
    fileFilter: (req,file,cb)=>{
        if (!whitelist.includes(file.mimetype)||!req.session.authToken) {
            return cb(null, false)
            
          }
      
          cb(null, true)
    }
    
})




router.post('/upload',upload.single("image"), (req,res)=>{

   
    
    console.log(req.file);

res.send('upload single file')

   


})


module.exports =router