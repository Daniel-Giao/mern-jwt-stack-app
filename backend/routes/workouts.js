const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Protecting API routes
router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

// GET a single workouts
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE workout
router.delete('/:id', deleteWorkout)

// UPDATE workout
router.patch('/:id', updateWorkout)

module.exports = router