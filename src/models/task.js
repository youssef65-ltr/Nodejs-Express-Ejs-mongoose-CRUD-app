const mongoose = require('mongoose');

// 1. Define the Schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
    },
    isFinished: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 2. Compile and Export the Model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

