const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/FaceMetaDB')

module.exports = connection;
