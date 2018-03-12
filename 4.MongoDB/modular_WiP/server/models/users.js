var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date },
    quotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quote' }]
}, { timestamps: true });

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');