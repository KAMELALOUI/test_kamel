const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect("mongodb+srv://kamel:1234@cluster0.enmqbck.mongodb.net/?retryWrites=true&w=majority", (err) => {
=======
mongoose.connect('mongodb://127.0.0.1:27017/test_mohamed', (err) => {
>>>>>>> f9b0a0191d1fe8de3cdb2c11f20bb3a771a49c7f
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

<<<<<<< HEAD
module.exports = mongoose;
=======
module.exports = mongoose;
>>>>>>> f9b0a0191d1fe8de3cdb2c11f20bb3a771a49c7f
