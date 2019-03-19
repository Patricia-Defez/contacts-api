const Contact = require('../models/contacts.models');

const createError = require('http-errors');

module.exports.list = (req, res, next) => {
    Contact.find()
        .then(contact => res.json(contact))
        .catch(next);
}

module.exports.getOne = (req, res, next) => {
    Contact.findById(req.params.id)
        .then(contact => {
            if(!contact){
                throw createError(404, 'contact not found')
            } else {
                res.json(contact);
            }
        })
        .catch(next);
}

module.exports.create = (req, res, next) => {
    const contact = new Contact(req.body);
    
    console.log(req.file)
    if (req.file) {
        contact.avatarURL = req.file.secure_url;
    }
    contact.save()
        .then(contact => res.status(201).json(contact))
        .catch(next);
}

module.exports.deleteOne = (req, res, next) => {
    Contact.finByIdAndDelete(req.params.id)
        .then(contact => {
            if(!contact){
                throw createError(404, 'contact not found')
            } else {
                res.status(204).json()
            }
        })
        .catch(next);
}

module.exports.update = (req, res, next) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(contact => {
            if(!contact){
                throw createError(404, 'contact not found')
            } else {
                res.json(contact);
            }
        })
        .catch(next)
}