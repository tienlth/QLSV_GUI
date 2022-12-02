import createApiClient from "./api.service";
import Service from "./service"

class StudentsService extends Service{
    constructor(baseUrl = "/api/students") {
        super();
        this.api = createApiClient(baseUrl);
    }

}

export default new StudentsService();
