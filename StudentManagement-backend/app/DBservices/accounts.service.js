const Service = require("./service")

class AccountsService extends Service{
    constructor(){
        super("accounts");
    }
}

module.exports = AccountsService;