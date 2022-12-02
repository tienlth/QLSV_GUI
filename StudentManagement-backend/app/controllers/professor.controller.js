const ProfessorService = require("../DBservices/professor.service");
const Controller = require("./controller");

class ProfessorController extends Controller{
    constructor(){
        super();
        this.service = new ProfessorService();
    }
}

module.exports = ProfessorController;

