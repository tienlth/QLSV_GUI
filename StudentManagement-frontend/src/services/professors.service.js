import createApiClient from "./api.service";
import Service from "./service"

class ProfessorsService extends Service{
    constructor(baseUrl = "/api/professors") {
        super();
        this.api = createApiClient(baseUrl);
    }

}

export default new ProfessorsService();
