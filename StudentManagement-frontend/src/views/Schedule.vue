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

        async disenrollClass(item, index){
            if(confirm("Bạn thật sự muốn rút học phần này")){
                var id = localStorage.getItem('id');
                var account = await accountsService.get(id)
                var student = await studentsService.get(account.user.insertedId);
                var rededClass = student.regClass;

                var disenrollIndex = null;
                rededClass.find((element, i) => {
                    if (element._id == item._id) {
                        disenrollIndex=i
                    }
                });
                
                student.regClass.splice(disenrollIndex,1);
                await studentsService.update(student._id, {'regClass':student.regClass})
                this.classList.splice(index, 1);
                alert('Rút học phần thành công');
            }
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
    <h5 class="text-center">Thời khóa biểu</h5>
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
                    <div class="w-100 d-flex justify-content-end">
                        <button class="btn btn-danger" @click="disenrollClass(item, index)">Rút học phần</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

