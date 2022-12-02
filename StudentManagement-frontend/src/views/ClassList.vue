<script>
import classService from "@/services/class.service.js";

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

        async deleteClass(item, index){
            if(confirm("Bạn thật sự muốn xóa")){
                this.classList.splice(index, 1);
                await classService.delete(item._id);
                alert('Xóa giảng viên thành công');
            }
        },

        async getData(){
            this.classList = await classService.getAll();
        }
    },
    
    mounted() {
        this.getData();
    }
};
</script>

<template>
    <div class="mt-4" v-if="checkRole()==1">
    <router-link :to="{ name: 'add-class'}">
        <button class="btn btn-primary">Thêm lớp học phần</button>
    </router-link>
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
        <th scope="col"></th>
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
                <td>
                    <div class="w-100 d-flex justify-content-end pr-4">
                        <button class="btn btn-danger" @click="deleteClass(item, index)">Xóa</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

