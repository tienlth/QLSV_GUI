const ClassesService = require("../DBservices/classes.service");
const Controller = require("./controller");

class ClassesController extends Controller{
    constructor(){
        super();
        this.service = new ClassesService();
    }
}

module.exports = ClassesController;

