<script>
import AddProfessorForm from "@/components/AddProfessorForm.vue";
import professorsService from "@/services/professors.service.js";

export default {
    components:{
        AddProfessorForm
    },
    props: {
        
    },
    emits: [],
    data(){
        return {
            professor: { 
                name:'',
                birth:'', 
                hometown:'', 
                unit:'',
                college:'',
                account:{
                    username: '',
                    password: ''
                }
        },
        }
    },
    methods: {
        checkRole(){
            return localStorage.getItem('uid');
        },

        async addProfessor(){
            try {
                await professorsService.create(this.professor);
                alert("Thêm giảng viên viên thành công.")
            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>

<template>
    <div class="mt-4 mb-5" v-if="checkRole()==1">
        <AddProfessorForm :professor="professor" @submit:professor="addProfessor"/>
    </div>
</template>

