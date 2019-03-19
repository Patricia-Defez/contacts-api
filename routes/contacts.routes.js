var express = require('express');
var router = express.Router();

const uploader = require('../configs/storage.config')
const contactsController = require('../controllers/contactsController')

/* GET users listing. */
router.get('/', contactsController.list);
router.get('/:id', contactsController.getOne);
router.post('/', uploader.single('attachement'), contactsController.create);
router.delete('/:id', contactsController.deleteOne);
router.put('/:id', uploader.single('attachement'), contactsController.update);

module.exports = router;
