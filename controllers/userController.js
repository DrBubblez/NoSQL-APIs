// This imports the User model for use in the controller
const { User } = require('../models');

exports.getAllUsers = async (req, res) => { // This gets all users
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(400).json({ message:'Error fetching users', error });
    }
};

exports.getSingleUser = async (req, res) => { // This gets a single user by id
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ message:'Error fetching user', error });
    }
};

exports.createUser = async (req, res) => { // This creates a user
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ message:'Error creating user', error });
    }
};

exports.updateUser = async (req, res) => { // This updates a user by id
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ updatedUser });
    } catch (error) {
        res.status(400).json({ message:'Error updating user', error });
    }
};

exports.deleteUser = async (req, res) => { // This deletes a user by id
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ deletedUser });
    } catch (error) {
        res.status(400).json({ message:'Error deleting user', error });
    }
};