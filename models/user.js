const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ToDo', require: false }],

}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('User', userSchema);