var express = require('express');
var router = express.Router();

const contactsController = require('../controllers/contactsController')

/* GET users listing. */
router.get('/', contactsController.list);
router.get('/:id', contactsController.get);
router.post('/', contactsController.create);
router.delete('/:id', contactsController.delete);
router.put('/:id', contactsController.update);

module.exports = router;
