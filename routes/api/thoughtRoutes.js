const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// GET all thoughts
router.get('/', getAllThoughts);

// GET a single thought by its id
router.get('/:id', getSingleThought);

// Create a new thought
router.post('/', createThought);

// Update a thought by its id
router.put('/:id', updateThought);

// Remove a thought by its id
router.delete('/:id', deleteThought);

// Add a reaction to a thought
router.post('/:thoughtId/reactions', addReaction);

// Remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;