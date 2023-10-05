const mongoose = require('mongoose');
const { User, Thought } = require('../models');

mongoose.connect('mongodb://localhost:27017/FaceMetaDB')


const userSeedData = [
    {
        username: 'DrBubblez',
        email: 'FakeEmail@gmail.com'
    },
    {
        username: 'StinkyPete',
        email: 'StinkeyPete@gmail.com'
    },
    {
        username: 'GandalfTheGrey',
        email: 'magic@gmail.com'
    },
    {
        username: 'Alac Azam',
        email: 'Gottem@gmail.com'
    }
];


const seedDatabase = async () => {
    try {
        await User.deleteMany({});
        await Thought.deleteMany({});

        const users = await User.insertMany(userSeedData);

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDatabase();
