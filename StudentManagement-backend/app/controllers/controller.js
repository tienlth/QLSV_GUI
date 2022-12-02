const customError = require("../error.custom");
 
class Controller{
    constructor(){
        this.service = null;
    }

    create = async (req, res, next)=>{
        if(!req.body?.name){
            return next(new customError(400, "Tên không được trống"));
        }
    
        try{
            const document = await this.service.create(req.body);
            return res.json(document);
        }
        catch(error){
            return next(new customError(500, "Lỗi khi thêm dữ liệu"));
        }
    };
    
    findAll = async (req, res, next)=>{
        let documents = [];

        try{
            documents = await this.service.find({});
        }
        catch(error){
            return next(new customError(500, "Lỗi khi tìm tất cả"));
        }
    
        return res.json(documents);
    };
    
    findOne = async (req, res, next)=>{
        try{
            const document = await this.service.findById(req.params.id);
            if(!document){
                return next(new customError(404, "Không có dữ liệu trùng khớp"));
            }
            return res.json(document);
        }
        catch(error){
            return next(new customError(500, 'Lỗi server khi tìm dữ liệu'));
        }
    };
    
    update = async (req, res, next)=>{
        if(Object.keys(req.body).length === 0){
            return next(new customError(400, "Dữ liệu không thể trống"));
        }
    
        try{
            const document = await this.service.update(req.params.id, req.body);
            if(!document){
                return next(new customError(404, "Không tìm thấy"));
            }
            return res.json({message: "Cập nhật thành công"});
        }
        catch(error){
            return new customError(500, `Lỗi server khi cập nhật dữ liệu`);
        }
    };
    
    delete = async (req, res, next)=>{
        try{
            const document = await this.service.delete(req.params.id);
            if(!document){
                return next(new customError(404, "Không tìm thấy"));
            }
            return res.json({message: "Xóa thành công"});
        }
        catch(error){
            return new customError(500, `Lỗi server khi Xóa dữ liệu`);
        }
    };
    
    deleteAll = async (req, res, next)=>{
        try{
            const deleteCount = await this.service.deleteAll();
            return res.send({
                message: `${deleteCount} mục xóa thành công`
            });
        }
        catch(error){
            return next(new ApiError(500, "Lỗi server khi xóa dữ liệu"));
        }
    };
}

module.exports = Controller;