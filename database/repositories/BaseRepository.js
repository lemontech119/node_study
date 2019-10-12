const connector = require('../connertor')

class BaseRepository {
    constructor(columnName){
        this.columnName = columnName;
        this.models = connector.get(this.columnName);
    }

    create(data){
        return this.models.push(data).write();
    }

    find(){
        return this.models.value();
    }
    
    fingById(id){
        return this.models.find({id}).value();
    } 

    update(id, data){
        return this.models.find({ id }).assign(data).write();
    }

    delete(deleteId){
        return this.models.remove({ id : deleteId }).write();
    }
}

module.exports = BaseRepository;

