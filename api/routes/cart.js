const express = require('express');
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/cart')
const router = express.Router();

//localhost:5000/api/product/ get
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.post('/:id', passport.authenticate('jwt', {session: false}), controller.createElem);

router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.delete('/', passport.authenticate('jwt', {session: false}), controller.checkOut);
//localhost:5000/api/product/cart post {id:'1',total:'1',UserId:'1'}
//localhost:5000/api/product/cart delete {id:'1',total:'1',UserId:'1'}
module.exports = router;