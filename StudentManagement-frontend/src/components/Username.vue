<script>
import accountsService from "@/services/accounts.service.js"
import professorsService from "@/services/professors.service.js"
import studentsService from "@/services/students.service.js"

export default {
    props: {
        
    },
    emits: [],
    data(){
        return {
            username:"",
            role:""
        }
    },
    methods: {
        async getInfo(){
            var id = localStorage.getItem('id');

            var account = await accountsService.get(id);
            this.role = account.role;
            if(account.role=='student'){
                var user = await studentsService.get(account.user.insertedId)
                this.username = user.name+' - ';
            }
            else if(account.role=='professor'){
                var user = await professorsService.get(account.user.insertedId)
                this.username = user.name+' - ';
            }
            else if(account.role=='admin'){
                this.username = 'Admin - ';
            }
        },
    },

    mounted(){
        this.getInfo();
    }
};
</script>

<template>
<h6>{{this.username}} {{this.role}}</h6>
</template>

