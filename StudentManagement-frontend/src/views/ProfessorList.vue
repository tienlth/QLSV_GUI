<script>
import professorsService from "@/services/professors.service.js";
import accountsService from "@/services/accounts.service.js";

export default {
    props: {
        
    },
    emits: [],
    data(){
        return {
            professorList:[]
        }
    },
    methods: {
        checkRole(){
            return localStorage.getItem('uid');
        },

        async deleteProfessor(item, index){
            if(confirm("Bạn thật sự muốn xóa")){
                this.professorList.splice(index, 1);
                await professorsService.delete(item._id);

                var account = await accountsService.check(item.account);
                if(account[0]._id) await accountsService.delete(account[0]._id);

                alert('Xóa giảng viên phần thành công');
            }
        },

        async getData(){
            this.professorList = await professorsService.getAll();
        }
    },

    mounted() {
        this.getData();
    }
};
</script>

<template>
    <div class="mt-4" v-if="checkRole()==1">
        <router-link :to="{ name: 'add-professor'}">
            <button class="btn btn-primary">Thêm giảng viên</button>
        </router-link>

        <table class="table mt-4 table-striped">
            <thead class="table-dark">
            <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Ngày sinh</th>
            <th scope="col">Quê quán</th>
            <th scope="col">Bộ môn</th>
            <th scope="col">Khoa</th>
            <th scope="col">Tài khoản</th>
            <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in professorList">
                    <td scope="row">{{(index+1)}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.birth}}</td>
                    <td>{{item.hometown}}</td>
                    <td>{{item.unit}}</td>
                    <td>{{item.college}}</td>
                    <td>{{item.account.username}}</td>
                    <td>
                        <div class="w-100 d-flex justify-content-end pr-4">
                            <button class="btn btn-danger" @click="deleteProfessor(item, index)">Xóa</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

