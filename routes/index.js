const { Router } = require('express');
console.log("이거 되나1?");
const todos = require('./todos');


const router = Router();

router.use('/todos', todos);
module.exports = router;