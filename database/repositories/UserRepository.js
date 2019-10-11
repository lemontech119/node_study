const TestRepository = require('./TestRepository');
const User = require('../../models/User');

class UserRepository extends TestRepository{
    constructor(){
        super('users');
    }
}

module.exports = UserRepository;