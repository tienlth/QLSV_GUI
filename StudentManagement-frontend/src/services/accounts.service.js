import createApiClient from "./api.service";
import Service from "./service"

class AccountsService extends Service{
    constructor(baseUrl = "/api/accounts") {
        super();
        this.api = createApiClient(baseUrl);
    }

    async check(data) {
        return (await this.api.post(`/check`, data)).data;
    }
}

export default new AccountsService();
