<template>
    <LoginForm :account="account" @submit:account="login"/>
</template>


<script>
import LoginForm from "@/components/LoginForm.vue";
import accountsService from "@/services/accounts.service.js"

export default {
    components: {
        LoginForm
    },
    props:{
        
    },
    data() {
        return {
            account: { username:'', password:'' },
        };
    },
    watch: {
       
    },
    computed: {},
    methods: {
        async login(){
            localStorage.setItem('uid',0);
            localStorage.setItem('id','');
            var document = await accountsService.check(this.account)
            var role = document[0]?.role

            if(role==='admin'){
                localStorage.setItem('uid',1);
                localStorage.setItem('id',document[0]._id);
            }else if(role==='student'){
                localStorage.setItem('uid',2);
                localStorage.setItem('id',document[0]._id);
            }else if(role==='professor'){
                console.log('a')
                localStorage.setItem('uid',3);
                localStorage.setItem('id',document[0]._id);
            }else{
                localStorage.setItem('uid',0);
            }
        }
    },
    mounted() {
        
    },
};
</script>

<style>

</style>