<script>

export default {
    props: {
        classes: { type: Object , required: true},
    },
    
    emits: ["submit:class"],
    data(){
        return {classLocal: this.classes}
    },
    methods: {
        submit() {
            this.$emit("submit:class", this.classLocal);
        },
    },
};
</script>

<template>
    <h4 class="text-center">Thêm lớp học phần</h4>
    <div class="w-50 mx-auto py-4 px-5 bg-light login-form">
        <div class="mb-3">
            <label for="" class="form-label">Học phần</label>
            <select v-model="classLocal.subject" class="custom-select" aria-label="Default select example">
                <option value="Máy học ứng dụng">Máy học ứng dụng</option>
                <option value="Lập trình căn bản">Lập trình căn bản</option>
                <option value="Lập trình hướng đối tượng">Lập trình hướng đối tượng</option>
                <option value="Giao diện người máy">Giao diện người máy</option>
                <option value="Vi tích phân">Vi tích phân</option>
                <option value="Toán rời rạc">Toán rời rạc</option>
                <option value="Xác suất thống kê">Xác suất thống kê</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Ký hiệu</label>
            <input v-model="classLocal.name" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Thứ</label>
            <select v-model="classLocal.day" class="custom-select" aria-label="Default select example">
                <option value="Thứ hai">Thứ hai</option>
                <option value="Thứ ba">Thứ ba</option>
                <option value="Thứ tư">Thứ tư</option>
                <option value="Thứ năm">Thứ năm</option>
                <option value="Thứ sáu">Thứ sáu</option>
                <option value="Thứ bảy">Thứ bảy</option>
                <option value="Chủ nhật">Chủ nhật</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Phòng</label>
            <select v-model="classLocal.room" class="custom-select" aria-label="Default select example">
                <option value="Phòng 101">Phòng 101</option>
                <option value="Phòng 102">Phòng 102</option>
                <option value="Phòng 302">Phòng 302</option>
                <option value="Phòng 201">Phòng 201</option>
                <option value="Phòng 205">Phòng 205</option>
                <option value="Phòng 202">Phòng 202</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Tiết</label>
            <select v-model="classLocal.time" class="custom-select" aria-label="Default select example">
                <option value="Tiết 1">Tiết 1</option>
                <option value="Tiết 2">Tiết 2</option>
                <option value="Tiết 3">Tiết 3</option>
                <option value="Tiết 4">Tiết 4</option>
                <option value="Tiết 5">Tiết 5</option>
                <option value="Tiết 6">Tiết 6</option>
                <option value="Tiết 7">Tiết 7</option>
                <option value="Tiết 8">Tiết 8</option>
                <option value="Tiết 9">Tiết 9</option>
                <option value="Tiết 10">Tiết 10</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Số tiết</label>
            <input v-model="classLocal.long" type="number" class="form-control">
        </div>
        
        <div class="d-flex justify-content-end">
            <a><button @click="submit" type="submit" class="btn btn-primary">Thêm</button></a>
        </div>
    </div>
</template>

