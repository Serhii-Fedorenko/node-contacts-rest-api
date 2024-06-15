const express = require('express');
const contactsRouter = express.Router();
const ctrl = require('../../controllers/contacts')

contactsRouter.get('/', ctrl.getAll)

contactsRouter.get('/:id', ctrl.getById)

module.exports = contactsRouter