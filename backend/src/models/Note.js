const {Schema, model} = require('mongoose');

const nota = new Schema({
    title: String,
    descrip: {
        type: String,
        required: true,
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

module.exports = model('Nota', nota);