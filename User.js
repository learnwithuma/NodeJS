const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    role: String
});

module.exports = mongoose.model('User', UserSchema);


