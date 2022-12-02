<script>

export default {
    props: {
        
    },
    emits: [],
    methods: {
        checkRole(){
            return localStorage.getItem('uid');
        }
    },
};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark text-white px-0 pt-4">
        <div class="container-fluid flex-column p-0 m-0">
            <div class="w-100 pl-3">
                <router-link :to="{ name: 'home'}">
                    <a class="navbar-brand mb-3">Trang chủ</a>
                </router-link> 
            </div>
            <div class="collapse navbar-collapse w-100" id="navbarNavDropdown">
                <ul class="navbar-nav flex-column w-100">
                    <li class="nav-item pl-2">
                        <router-link :to="{ name: 'login'}">
                        <a class="nav-link active" arxia-current="page">Đăng nhập</a>
                        </router-link> 
                    </li>
                    <div v-if="checkRole()==0">
                    </div>
                    <div v-if="checkRole()==1">
                        <li class="nav-item pl-2">
                            <router-link :to="{ name: 'student-list'}">
                                <a class="nav-link">Danh sách sinh viên</a>
                            </router-link> 
                        </li>
                        <li class="nav-item pl-2">
                            <router-link :to="{ name: 'professor-list'}">
                                <a class="nav-link">Danh sách giảng viên</a>
                            </router-link> 
                        </li>
                        <li class="nav-item pl-2">
                            <router-link :to="{ name: 'class-list'}">
                            <a class="nav-link">Danh sách lớp học phần</a>
                            </router-link> 
                        </li>
                    </div>
                    <div v-if="checkRole()==2">
                        <li class="nav-item pl-2">
                            <router-link :to="{ name: 'mark'}">
                                <a class="nav-link">Xem điểm</a>
                            </router-link> 

                        </li>
                        <li class="nav-item pl-2">
                            <router-link :to="{ name: 'reg-subject'}">
                                <a class="nav-link">Đăng ký học phần</a>
                            </router-link> 
                        </li>
                        <li class="nav-item pl-2">
                            <router-link :to="{ name: 'schedule'}">
                                <a class="nav-link">Xem thời khóa biểu</a>
                            </router-link> 
                        </li>
                    </div>
                    <div v-if="checkRole()==3">
                        <li class="nav-item pl-2">
                            <router-link :to="{ name: 'input-mark'}">
                                <a class="nav-link">Nhập điểm</a>
                            </router-link> 
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>



</template>

