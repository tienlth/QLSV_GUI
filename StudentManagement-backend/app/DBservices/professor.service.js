const Service = require("./service")
const MongoDB = require("../DBservices/client.service");

class ProfessorService extends Service{
    constructor(){
        super("professors");
    }

    async create(document){
        try{
            var acc = document.account;
    
            this.collection = MongoDB.client.db().collection(this.collectionName)
            document = await this.collection.insertOne(document);

            acc.user=document;
            acc.role = 'professor';
            acc = await MongoDB.client.db().collection('accounts').insertOne(acc)

            return document
        }
        catch(e){
            console.log(e)
        }
    }
    
}

module.exports = ProfessorService;