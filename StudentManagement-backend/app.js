const express = require("express");
const cors = require("cors");
const mainRouter = require("./app/routes/main.route");
const customError = require("./app/error.custom");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/", mainRouter);

app.get("/", (req, res)=>{
    res.json({ message: "App quản lý sinh viên đang hoạt động."});
})

app.use((req, res, next)=>{
    return next(new customError(404, "Không tìm thấy"));
})

app.use((error, req, res, next)=>{
    return res.status(error.statusCode || 500).json({
        message: error.message || "Lỗi server"
    })
});

module.exports = app;