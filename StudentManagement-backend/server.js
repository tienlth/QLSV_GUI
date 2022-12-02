const app = require("./app");
const config = require("./app/config/main");
const MongoDB = require("./app/DBservices/client.service");

async function startServer(){
    try{
        await MongoDB.connect(config.db.uri);
        console.log("Đã kết nối database!");

        const PORT = config.app.port;
        app.listen(PORT, ()=>{
            console.log(`Server đang lắng nghe ở cổng ${PORT}`);
        })
    }
    catch(error){
        console.log("Không thể kết nối database!", error);
        process.exit();
    }
}
    

startServer();

