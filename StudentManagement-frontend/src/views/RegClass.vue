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

        async regClass(item, index){
            var id = localStorage.getItem('id');
            var account = await accountsService.get(id)
            var student = await studentsService.get(account.user.insertedId);
            student.regClass.push(item)
            await studentsService.update(student._id, {'regClass':student.regClass})
            alert('Đăng ký thành công')
            
            document.getElementsByClassName('btn')[index].setAttribute('disabled','disabled')
            document.getElementsByClassName('btn')[index].innerHTML="Đã đăng ký"
        },

        async getData(){
            this.classList = await classService.getAll();
            var id = localStorage.getItem('id');
            var account = await accountsService.get(id)
            var student = await studentsService.get(account.user.insertedId);
            var regedClass = student.regClass;

            for(var i in this.classList){
                regedClass.find(element => {
                    if (element._id == this.classList[i]._id) {
                        document.getElementsByClassName('btn')[i].innerHTML="Đã đăng ký"
                        document.getElementsByClassName('btn')[i].setAttribute('disabled','disabled')
                    }
                });
            }
        }
    },
    
    mounted() {
        this.getData();
    }
};
</script>

<template>
    <div class="mt-4" v-if="checkRole()==2">
    <h5 class="text-center">Đăng ký học phần</h5>
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
                        <button class="btn btn-info" @click="regClass(item, index)">Đăng ký</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

