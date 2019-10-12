const { Router } = require('express');
const auth = require('../middlewares/auth');
const todos = require('./todos');
const users = require('./users');
const books = require('./books');

const router = Router();

console.log("이거 나오나0");

router.use(auth);
router.use('/todos', todos);
router.use('/users', users);
router.use('/books', books);

module.exports = router;