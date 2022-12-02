<script>

export default {
    props: {
        student: { type: Object , required: true},
    },
    
    emits: ["submit:student"],
    data(){
        return {studentLocal: this.student}
    },
    methods: {
        submit() {
            this.$emit("submit:student", this.studentLocal);
        },
    },
};
</script>

<template>
    <h4 class="text-center">Thêm sinh viên</h4>
    <div class="w-50 mx-auto py-4 px-5 bg-light login-form">
        <div class="mb-3">
            <label for="" class="form-label">Họ tên</label>
            <input v-model="studentLocal.name" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Tên tài khoản</label>
            <input v-model="studentLocal.account.username" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Mật khẩu</label>
            <input v-model="studentLocal.account.password" type="password" class="form-control">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Ngày sinh</label>
            <input v-model="studentLocal.birth" type="date" class="form-control">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Quê quán</label>
            <input v-model="studentLocal.hometown" type="text" class="form-control">
        </div>
        <div class="d-flex justify-content-end">
            <a><button @click="submit" type="submit" class="btn btn-primary">Thêm</button></a>
        </div>
    </div>
</template>

