const express = require('express');
const passport = require('passport')
const controller = require('../controllers/cart')
const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.post('/:id', passport.authenticate('jwt', {session: false}), controller.createElem);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.delete('/', passport.authenticate('jwt', {session: false}), controller.checkOut);

module.exports = router;