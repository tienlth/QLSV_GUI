<script>
import AddStudentForm from "@/components/AddStudentForm.vue";
import studentService from "@/services/students.service.js";

export default {
    components:{
        AddStudentForm
    },
    props: {
        
    },
    emits: [],
    data(){
        return {
            student: { 
                name:'',
                birth:'', 
                hometown:'', 
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

        async addStudent(){
            try {
                this.student.regClass=[];
                await studentService.create(this.student);
                alert("Thêm sinh viên thành công.")
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<template>
    <div class="mt-4" v-if="checkRole()==1">
        <AddStudentForm :student="student" @submit:student="addStudent"/>
    </div>
</template>

