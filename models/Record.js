const {Schema, model} = require('mongoose');

const schema = new Schema({
    date: {
        type: Date
    },
    studID: {
        type: String
    },
    fullName: {
        type: String
    },
    facility: {
        type: String
    },
    typeFacility: {
        type: String
    },
    time: {
        type: String
    }
});

module.exports = model('Record', schema);