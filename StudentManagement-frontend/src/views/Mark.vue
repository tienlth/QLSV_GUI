<script>
import classService from "@/services/class.service.js";
import studentsService from "@/services/students.service.js";
import accountsService from "@/services/accounts.service.js";

export default {
    props: {
        
    },
    emits: [],
    data(){
        return {
            classList:[]
        }
    },
    methods: {
        checkRole(){
            return localStorage.getItem('uid');
        },

        async getData(){
            var id = localStorage.getItem('id');
            var account = await accountsService.get(id)
            var student = await studentsService.get(account.user.insertedId);
            this.classList = student.regClass;
        }
    },
    
    mounted() {
        this.getData();
    }
};
</script>

<template>
    <div class="mt-4" v-if="checkRole()==2">
    <h5 class="text-center">Kết quả học tập</h5>
    <table class="table mt-4 table-striped">
        <thead class="table-dark">
        <tr>
        <th scope="col">STT</th>
        <th scope="col">Ký hiệu</th>
        <th scope="col">Mã học phần</th>
        <th scope="col">Thứ</th>
        <th scope="col">Phòng</th>
        <th scope="col">Tiết</th>
        <th scope="col" class="text-center">Số tiết</th>
        <th scope="col">Điểm</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in classList">
                <td scope="row">{{(index+1)}}</td>
                <td>{{item.name}}</td>
                <td>{{item.subject}}</td>
                <td>{{item.day}}</td>
                <td>{{item.room}}</td>
                <td>{{item.time}}</td>
                <td class="text-center">{{item.long}}</td>
                <td class="pl-3">{{item.mark}}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

