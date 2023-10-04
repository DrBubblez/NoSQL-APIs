const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => { // This will throw an error if the endpoint doesn't exist
    return res.send('Wrong Route!');
});

module.exports = router;