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
router.get('/', getAllUsers);

// GET a single user by its _id
router.get('/:id', getSingleUser);

// Create a new user
router.post('/', createUser);

// Update a user by its _id
router.put('/:id', updateUser);

// Remove a user by its _id
router.delete('/:id', deleteUser);

// Add a friend to a user's friend list
router.post('/:userId/friends/:friendId', addFriend);

// Remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;