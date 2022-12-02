<script>
import studentService from "@/services/students.service.js";
import accountsService from "@/services/accounts.service.js"

export default {
    props: {
        
    },
    emits: [],
    data(){
        return {
            studentList: []
        }
    },
    methods: {
        checkRole(){
            return localStorage.getItem('uid');
        },

        async deleteStudent(item, index){
            if(confirm("Bạn thật sự muốn xóa")){
                this.studentList.splice(index, 1);
                await studentService.delete(item._id);

                var account = await accountsService.check(item.account);
                if(account[0]._id) await accountsService.delete(account[0]._id);
                alert('Xóa sinh viên thành công');
            }
        },

        async getData(){
            this.studentList = await studentService.getAll();
        }
    },

    mounted() {
        this.getData();
    }
};
</script>

<template>
    <div class="mt-4" v-if="checkRole()==1">
    <router-link :to="{ name: 'add-student'}">
        <button class="btn btn-primary">Thêm sinh viên</button>
    </router-link>
    <table class="table mt-4 table-striped">
        <thead class="table-dark">
        <tr>
        <th scope="col">STT</th>
        <th scope="col">Họ tên</th>
        <th scope="col">Ngày sinh</th>
        <th scope="col">Quê quán</th>
        <th scope="col">Tài khoản</th>
        <th scope="col" class="pl-4"></th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in studentList">
            <td scope="row">{{(index+1)}}</td>
            <td>{{item.name}}</td>
            <td>{{item.birth}}</td>
            <td>{{item.hometown}}</td>
            <td class="pl-4">{{item.account.username}}</td>
            <td>
                <div class="w-100 d-flex justify-content-end pr-4">
                    <button class="btn btn-danger" @click="deleteStudent(item, index)">Xóa</button>
                </div>
            </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

