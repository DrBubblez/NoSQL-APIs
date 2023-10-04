const { Thought, User } = require('../models');

exports.getAllThoughts = async (req, res) => { // This gets all thoughts
    try {
        const thoughts = await Thought.find();
        res.status(200).json({ thoughts });
    } catch (error) {
        res.status(400).json({ message:'Error fetching thoughts', error });
    }
};

exports.getSingleThought = async (req, res) => { // This gets a single thought by id
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json({ thought });
    } catch (error) {
        res.status(400).json({ message:'Error fetching thought', error });
    }
};

exports.createThought = async (req, res) => { // This creates a thought
    try {
        const thought = new Thought(req.body);
        await thought.save();
        
        await  User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thought._id } },
            { new: true }
        );
        res.status(201).json({ thought });
    } catch (error) {
        res.status(400).json({ message:'Error creating thought', error });
    }
};

exports.updateThought = async (req, res) => { // This updates a thought by id
    try {
        const updatedThought = await Thought.findOneAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json({ updatedThought });
    } catch (error) {
        res.status(400).json({ message:'Error updating thought', error });
    }
};

exports.deleteThought = async (req, res) => { // This deletes a thought by id
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.id);
        if (!deletedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        
        await User.findOneAndUpdate( // This will remove the thought from the user's `thoughts` array field
            { username: deletedThought.username },
            { $pull: { thoughts: deletedThought._id } },
            { new: true }
        );
        res.status(200).json({ message:'Thought deleted', deletedThought });
    } catch (error) {
        res.status(400).json({ message:'Error deleting thought', error });
    }
};