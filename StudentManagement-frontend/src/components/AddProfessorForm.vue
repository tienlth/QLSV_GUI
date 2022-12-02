<script>

export default {
    props: {
        professor: { type: Object , required: true},
    },
    
    emits: ["submit:professor"],
    data(){
        return {professorLocal: this.professor}
    },
    methods: {
        submit() {
            this.$emit("submit:professor", this.professorLocal);
        },
    },
};
</script>

<template>
    <h4 class="text-center">Thêm giảng viên</h4>
    <div class="w-50 mx-auto py-4 px-5 bg-light login-form">
        <div class="mb-3">
            <label for="" class="form-label">Họ tên</label>
            <input v-model="professorLocal.name" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Tên tài khoản</label>
            <input v-model="professorLocal.account.username" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Mật khẩu</label>
            <input v-model="professorLocal.account.password" type="password" class="form-control">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Ngày sinh</label>
            <input v-model="professorLocal.birth" type="date" class="form-control">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Quê quán</label>
            <input v-model="professorLocal.hometown" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Khoa</label>
            <select v-model="professorLocal.college" class="custom-select" aria-label="Default select example">
                <option value="Trường Kinh Tế">Trường Kinh Tế</option>
                <option value="Trường Công Nghệ Thông Tin & Truyền Thông">Trường Công Nghệ Thông Tin & Truyền Thông</option>
                <option value="Trường Bách Khoa">Trường Bách Khoa</option>
                <option value="Khoa Luật">Khoa Luật</option>
                <option value="Khoa Chính Trị">Khoa Chính Trị</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Bộ môn</label>
            <select v-model="professorLocal.unit" class="custom-select" aria-label="Default select example">
                <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                <option value="Tin học ứng dụng">Tin học ứng dụng</option>
                <option value="Mạng máy tính và truyền thông">Mạng máy tính và truyền thông</option>
                <option value="Công nghệ phần mềm">Công nghệ phần mềm</option>
                <option value="Khoa học máy tính">Khoa học máy tính</option>
            </select>
        </div>
        <div class="d-flex justify-content-end">
            <a><button @click="submit" type="submit" class="btn btn-primary">Thêm</button></a>
        </div>
    </div>
</template>

