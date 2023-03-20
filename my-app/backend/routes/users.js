const Users = require('../models/users.model')
const router = require('express').Router()

router.route('/').get( (req,res)=>{
    Users.find()
    .then((users)=>{
        res.json(users);
    })
    .catch(error => {
        res.status(400).json('error in get req' + error);
    })
})

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new Users({username})
    newUser.save()
    .then(()=>res.json('User added succesfully'))
    .catch(err => {
        res.json(`Error in post request : ${err}`);
    })
})

router.route('/:id').get((req,res) => {
    Users.findById(req.params.id)
    .then((user) => res.json(user))
    .catch(err => res.json(err));
})

module.exports = router;