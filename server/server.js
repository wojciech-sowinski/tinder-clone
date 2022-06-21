const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const express = require('express')
const cors = require("cors");
const config = require('./config')


const User = require('./models/user')



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


app.post('/register', (req, res) => {

    const userExistsFind = User.findOne({
        email: req.body.email
    })
    userExistsFind.exec((err, data) => {
        if (err) {
            console.log('exists user search error', err);
        }

        if (data) {
            res.json({
                result: "user exists"
            })
        } else {

            const user = new User(req.body)
            user.save()

            res.json({
                result: "account created"
            })
        }
    })

})

app.post('/login', (req, res) => {

    console.log(req.body);
    const {
        email,
        password
    } = req.body

    const userExistsFind = User.findOne({
        email,
        password
    })
    userExistsFind.exec((err, data) => {
        if (err) {
            console.log('login user search error', err);
        }
        if (data) {

            req.session.authToken = data.id

            res.redirect('/islogged')

        } else {

            req.session = null

            res.json({

                logged: false
            })
        }
    })




})

app.get('/islogged', (req, res) => {

    if (req.session.authToken) {
        User.findById(req.session.authToken, {
            firstName: 1,
            imgUrl: 1,
            gender: 1,
            interest: 1,
            aboutMe: 1,
            email: 1,
            matches: 1
        }, (err, data) => {
            if (err) {
                console.log('get user data failed');
            }
            res.json({
                logged: true,
                userData: data
            })
        })
    } else {
        res.json({
            logged: false
        })
    }

})

app.get('/logout', (req, res) => {
    req.session = null
    res.redirect('islogged')
})

app.get('/users', (req, res) => {

    User.find({}, {
        firstName: 1,
        imgUrl: 1,
        gender: 1,
        interest: 1,
        aboutMe: 1
    }).sort({
        created: -1
    }).exec((err, data) => {
        if (err) {
            console.log('user catalog fail');
        } else {
            res.json(data)

        }
    })


})

app.post('/user', (req, res) => {

    if (req.session.authToken) {

        const userDataUpdate = User.findByIdAndUpdate(req.session.authToken, req.body)
        userDataUpdate.exec((err, data) => {
            if (err) {
                console.log(err);

            }
            if (data) {
                res.json({
                    result: 'user data updated'
                })
            }

        })
    }

})