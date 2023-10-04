const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// GET all thoughts
router.get('/thoughts', getAllThoughts);

// GET a single thought by its id
router.get('/thoughts/:id', getThoughtById);

// Create a new thought
router.post('/thoughts', createThought);

// Update a thought by its id
router.put('/thoughts/:id', updateThought);

// Remove a thought by its id
router.delete('/thoughts/:id', deleteThought);

// Add a reaction to a thought
router.post('/thoughts/:thoughtId/reactions', addReaction);

// Remove a reaction from a thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;