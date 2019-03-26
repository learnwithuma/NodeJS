
const mongoose = require('mongoose');
const User = require('./User.js');

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/demo-db', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

function createUser() {
    // Create a Expense
    const user = new User({
        name: "Dave",
        role: "Author"
    });

    // Save Expense in the database
    user.save()
        .then(data => {
            console.log('Saved');
            resolve();
        }).catch(err => {
            console.log("Some error occurred while creating the User.");
        });
}

createUser();

