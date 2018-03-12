const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name: String,
}, { timestamps: true });


mongoose.model('User', UserSchema);