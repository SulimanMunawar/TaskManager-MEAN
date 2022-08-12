// This will handle connection logic to the MongoDb database
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager').then(() => {
    console.log("Connected to MongoDb Successfuly...")
}).catch((e) => {
    console.log("OOps Something bad happend...");
    console.log(e);
})


module.exports = {
    mongoose
};