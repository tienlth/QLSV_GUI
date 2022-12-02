import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import OwnerInfo from "@/views/OwnerInfo.vue";
import StudentList from "@/views/StudentList.vue";
import ProfessorList from "@/views/ProfessorList.vue";
import ClassList from "@/views/ClassList.vue";
import AddStudent from "@/views/AddStudent.vue";
import AddProfessor from "@/views/AddProfessor.vue";
import AddClass from "@/views/AddClass.vue";
import Login from "@/views/Login.vue";
import RegClass from "@/views/RegClass.vue";
import Schedule from "@/views/Schedule.vue";
import InputMark from "@/views/InputMark.vue";
import InputMarkClass from "@/views/InputMarkClass.vue";
import Mark from "@/views/Mark.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/dang-nhap",
        name: "login",
        component: Login,
    },
    {
        path: "/thong-bao",
        name: "me",
        component: OwnerInfo,
    },
    {
        path: "/danh-sach-sinh-vien",
        name: "student-list",
        component: StudentList,
    },
    {
        path: "/danh-sach-giang-vien",
        name: "professor-list",
        component: ProfessorList,
    },
    {
        path: "/danh-sach-hoc-phan",
        name: "class-list",
        component: ClassList,
    },
    {
        path: "/them-sinh-vien",
        name: "add-student",
        component: AddStudent,
    },
    {
        path: "/them-giang-vien",
        name: "add-professor",
        component: AddProfessor,
    },
    {
        path: "/them-lop-hoc-phan",
        name: "add-class",
        component: AddClass,
    },
    {
        path: "/dang-ky-hoc-phan",
        name: "reg-subject",
        component: RegClass,
    },
    {
        path: "/xem-thoi-khoa-bieu",
        name: "schedule",
        component: Schedule,
    },
    {
        path: "/nhap-diem",
        name: "input-mark",
        component: InputMark,
    },
    {
        path: "/nhap-diem/:id",
        name: "input-mark-class",
        component: InputMarkClass,
    },
    {
        path: "/xem-diem/",
        name: "mark",
        component: Mark,
    },

];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
