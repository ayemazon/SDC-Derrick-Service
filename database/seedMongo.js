const deleteDB = require('./mongoDB').deleteDB;
const insertIntoMongoDb = require('./mongoDB').insertIntoMongoDb;


deleteDB();
insertIntoMongoDb();