const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({ msg: 'GET all workouts' })
})

// GET a single workouts
router.get('/:id', (req, res) => {
    res.json({ msg: 'GET a single workout' })
})

// POST a new workout
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// DELETE workout
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a workout' })
})

// UPDATE workout
router.patch('/:id', (req, res) => {
    res.json({ msg: 'UPDATE a workout' })
})

module.exports = router