const express = require('express');
const contactsRouter = express.Router();
const ctrl = require('../../controllers/contacts')

contactsRouter.get('/', ctrl.getAll)

module.exports = contactsRouter