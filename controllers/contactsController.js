const Contact = require('../models/contacts.models');

const createError = require('http-errors');

module.exports.list = (req, res, next) => {
    Contact.find()
        .then(contact => res.json(contact))
        .catch(next);
}

module.exports.get = (req, res, next) => {
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

    contact.save()
        .then(contact => res.status(201).json(contact))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
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