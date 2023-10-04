const e = require('express');
const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/FaceMetaDB')

exports.connection = connection;


