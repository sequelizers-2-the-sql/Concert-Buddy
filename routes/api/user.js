const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const passport = require('../../passport')
const Concert = require('../../models/Concert')


router.post('/signup', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            console.log("Username already existss")
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})


router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    //execute the code in the local strategy defined in localStrategy.js
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

router.get('/:id', (req, res) => {
    let userId = req.params.id;
    User.findOne({
        _id: userId
    })
    .populate("concerts")
    .then(dbUser => res.json(dbUser))
    .catch(err => res.json(err))
  })

router.put('/:id', (req, res) => {
    User.findOneAndUpdate({
        _id: req.params.id
    }, {
        $pull: {concerts: req.body.id}
    }, {
        new: true
    })
    .then(dbUser => {
        Concert.findOneAndUpdate({
            _id: req.body.id
        }, {
            $pull: {attendees: req.params.id}
        }, {
            new: true
        }).then(dbModel => {console.log(dbModel); res.json(dbModel)})
    })    
    .catch(err => res.json(err))
}) 
module.exports = router
