import { createRouter, createWebHashHistory } from "vue-router";
import homeView from "@/views/homeView.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/", component: homeView
        }
    ]
})

export default router;