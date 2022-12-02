<script>

export default {
    props: {
        account: { type: Object , required: true},
    },
    
    emits: ["submit:account"],
    data(){
        return {accountLocal: this.account}
    },
    methods: {
        submit() {
            this.$emit("submit:account", this.accountLocal);
        },
    },
};
</script>

<template>
    <div class="w-50 mx-auto mt-5 py-4 px-5 bg-light login-form">
        <div class="mb-3">
        <label for="" class="form-label">Tên tài khoản</label>
        <input v-model="accountLocal.username" type="text" class="form-control">
        </div>
        <div class="mb-3">
        <label for="" class="form-label">Mật khẩu</label>
        <input v-model="accountLocal.password" type="password" class="form-control">
        </div>
        <div class="d-flex justify-content-end">
            <!-- <router-link :to="{ name: 'me'}"> -->
                <a href="/thong-bao">
                    <button @click="submit" type="submit" class="btn btn-primary">Đăng nhập</button>
                </a>
            <!-- </router-link> -->
        </div>
    </div>
</template>

