const AccountsService = require("../DBservices/accounts.service");
const Controller = require("./controller");
const customError = require("../error.custom")

class AccountsController extends Controller{
    constructor(){
        super();
        this.service = new AccountsService();
    }

    check = async (req, res, next)=>{
        let documents = [];

        try{
            if(req.body.username!="" && req.body.passowrd!=""){
                documents = await this.service.find(req.body);
                console.log(documents)
                return res.json(documents)
            }
        }
        catch(error){
            return next(new customError(500, "Lỗi khi check"));
        }
    
        return res.json(documents);
    };

}

module.exports = AccountsController;

