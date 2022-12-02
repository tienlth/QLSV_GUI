const Service = require("./service")
const MongoDB = require("../DBservices/client.service");

class StudentService extends Service{
    constructor(){
        super("students");
    }

    async create(document){
        try{
            var acc = document.account;
    
            this.collection = MongoDB.client.db().collection(this.collectionName)
            document = await this.collection.insertOne(document);

            acc.user=document;
            acc.role = 'student';
            acc = await MongoDB.client.db().collection('accounts').insertOne(acc)

            return document
        }
        catch(e){
            console.log(e)
        }
    }
    
}

module.exports = StudentService;