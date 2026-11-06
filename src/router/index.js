import { createRouter, createWebHistory } from "vue-router";
import TheLogin from "../views/authorisation/TheLogin.vue";
import TheRegister from "../views/authorisation/TheRegister.vue";
import TheHome from "../views/TheHome.vue";
import TheOneDogDetails from "@/views/dogs/TheOneDogDetails.vue";
import AdminSection from "@/views/authorisation/AdminSection.vue";

const routes = [
    {
        path : "/",
        name : "Home",
        component : TheHome
    },
    {
        path : "/login",
        name : "Login",
        component : TheLogin,
        beforeEnter : (to, from, next)=>{
            const LoggedCustomer = JSON.parse(localStorage.getItem("LoggedCustomer"));
            if (LoggedCustomer) {
                next('/');
            }
            else{
                next();
            }
        }
    },
    {
        path : "/register",
        name : "Register",
        component : TheRegister
    },
    {
        path: "/dog/:id",
        name:"OneDogDetails",
        component : TheOneDogDetails,
        props:true
    },
    {
        path : "/adminSection",
        name : "AdminSection",
        component : AdminSection
    }
];

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});

export default router;