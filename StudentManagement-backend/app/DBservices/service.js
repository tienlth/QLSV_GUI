const {ObjectId, CURSOR_FLAGS} = require("mongodb");
const MongoDB = require("../DBservices/client.service");

class Service{
    constructor(collectionName){
        this.collection = null;
        this.collectionName = collectionName;
    }

    async create(document){
        this.collection = MongoDB.client.db().collection(this.collectionName)

        document = await this.collection.insertOne(document);
        return document
    }

    async find(filter){
        this.collection = MongoDB.client.db().collection(this.collectionName)

        const cusor = await this.collection.find(filter);
        return await cusor.toArray();
    }

    async findByName(name){
        this.collection = MongoDB.client.db().collection(this.collectionName)

        return await this.find({
            name: {$regex: new RegExp(name), $options: "i"}
        });
    }

    async findById(id){
        this.collection = MongoDB.client.db().collection(this.collectionName)

        return await this.collection.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null
        });
    }

    async update(id, document){
        this.collection = MongoDB.client.db().collection(this.collectionName)

        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null
        };

        console.log(filter)

        const result = await this.collection.findOneAndUpdate(
            filter,
            {$set: document},
            {returnDocument: "after"}
        );
        return result.value;
    }

    async delete(id){
        this.collection = MongoDB.client.db().collection(this.collectionName)

        const result = await this.collection.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null
        });
        return result.value;
    }

    async deleteAll(){
        this.collection = MongoDB.client.db().collection(this.collectionName)

        const result = await this.collection.deleteMany({});
        return result.deletedCount;
    }

}

module.exports = Service;
