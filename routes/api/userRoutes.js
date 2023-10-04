const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// GET all users
router.get('/users', getAllUsers);

// GET a single user by its _id
router.get('/users/:id', getSingleUser);

// Create a new user
router.post('/users', createUser);

// Update a user by its _id
router.put('/users/:id', updateUser);

// Remove a user by its _id
router.delete('/users/:id', deleteUser);

// Add a friend to a user's friend list
router.post('/users/:userId/friends/:friendId', addFriend);

// Remove a friend from a user's friend list
router.delete('/users/:userId/friends/:friendId', removeFriend);

module.exports = router;