import createApiClient from "./api.service";
import Service from "./service"

class ClassService extends Service{
    constructor(baseUrl = "/api/classes") {
        super();
        this.api = createApiClient(baseUrl);
    }

}

export default new ClassService();
