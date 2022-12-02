const StudentService = require("../DBservices/student.service");
const Controller = require("./controller");

class StudentController extends Controller{
    constructor(){
        super();
        this.service = new StudentService();
    }
}

module.exports = StudentController;

