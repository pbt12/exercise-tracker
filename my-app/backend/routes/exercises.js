const Exercises = require('../models/exercise.model')
const router = require('express').Router()

router.route('/').get( (req,res)=>{
    Exercises.find()
    .then((exercises)=>{
         res.json(exercises);
    })
    .catch(error => {
        res.status(400).json(error);
    })
})

router.route('/add').post((req,res) => {
    const exercise = req.body.exercise;
    const username = req.body.username;
    const date = Date.parse(req.body.date);
    const duration = Number(req.body.duration);

    const newExercise = new Exercises({username,exercise, date, duration});

    newExercise.save()
    .then(()=>res.json('Exercise added succesfully'))
    .catch(err => {
        res.status(400).json(err+req);
    })
})

router.route('/:id').get((req,res) => {
    Exercises.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.json(err));
})

module.exports = router;