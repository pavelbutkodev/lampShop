const express = require('express');
const router = express.Router();
const controller = require('../controllers/product')

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
// router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);

module.exports = router;
