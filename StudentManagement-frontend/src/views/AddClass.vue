<script>
import AddClassForm from "@/components/AddClassForm.vue";
import classService from "@/services/class.service.js";

export default {
    components:{
        AddClassForm
    },
    props: {
        
    },
    emits: [],
    data(){
        return {
            classes: { 
                name:'',
                subject:'',
                day:'',
                room:'',
                time:'',
                long:'',
            },
        }
    },
    methods: {
        checkRole(){
            return localStorage.getItem('uid');
        },

        async addClass(){
            try {
                await classService.create(this.classes);
                alert("Thêm lớp học phần thành công.")
            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>

<template>
    <div class="mt-4 mb-5" v-if="checkRole()==1">
        <AddClassForm :classes="classes" @submit:class="addClass"/>
    </div>
</template>

