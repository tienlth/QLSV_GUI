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
    <div class="mt-4" v-if="checkRole()==3">
    <h5 class="text-center">Nhập điểm</h5>
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
                        <router-link :to="{ name: 'input-mark-class', params: { id: item._id }}">
                            <button class="btn btn-info">Nhập</button>
                        </router-link> 
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

