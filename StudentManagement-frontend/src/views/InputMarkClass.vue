<script>
import studentService from "@/services/students.service.js";
import classService from "@/services/class.service.js";


export default {
    props: {
        
    },
    emits: [],
    data(){
        return {
            studentList: [],
            filterStudents: [],
        }
    },
    methods: {
        checkRole(){
            return localStorage.getItem('uid');
        },

        async inputMark(item, index){
            
        },

        async getData(){
            var id = this.$route.params.id
            this.studentList = await studentService.getAll();
            for(var j in this.studentList){
                var check = false;
                for(var i in this.studentList[j].regClass){
                    if(this.studentList[j].regClass[i]._id==id){
                        this.studentList[j].markClassIndex=i;
                        this.filterStudents.push(this.studentList[j]);
                        check=true;
                        break;
                    }
                }
            }
        },

        async inputChange(e, item){
           item.regClass[item.markClassIndex].mark = e.target.value
           await studentService.update(item._id,{'regClass':item.regClass})
        }
    },

    mounted() {
        this.getData();
    }
};
</script>

<template>
    <div class="mt-4" v-if="checkRole()==3">
    <h5 class="text-center">Nhập điểm</h5>
    <table class="table mt-4 table-striped">
        <thead class="table-dark">
        <tr>
        <th scope="col">STT</th>
        <th scope="col">Họ tên</th>
        <th scope="col">Ngày sinh</th>
        <th scope="col" class="pl-4">Điểm</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in filterStudents">
            <td scope="row">{{(index+1)}}</td>
            <td>{{item.name}}</td>
            <td>{{item.birth}}</td>
            <td>
                <div class="w-75 d-flex justify-content-end pr-4">
                    <input class="form-control" value="{{this.class.mark[item._id]}}" type="number" @input="inputChange($event, item)">
                </div>
            </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

