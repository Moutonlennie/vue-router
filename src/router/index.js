import { createRouter, createWebHashHistory } from "vue-router";
import homeView from "@/views/homeView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import CartView from "@/views/CartView.vue";
import ContactView from "@/views/ContactView.vue";
import ProductsView from "@/views/ProductsView.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/", 
            component: homeView
        },
        {
            path: '/Product',
            component: ProductsView
        },
        {
            path: '/Cart',
            component: CartView
        },
        {
            path: '/AboutUs',
            component: AboutUsView
        },
        {
            path: '/Contact',
            component: ContactView
        },
        {
            // Altijd als laatste zetten
            path: '/:notFound(.*)',
            component: PageNotFoundView
        },
    ]
})

export default router;