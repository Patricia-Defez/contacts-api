const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    msisdn: {
        type: String,
        required: true
    },
    avatarURL:  String
    
    
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }

});

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact;