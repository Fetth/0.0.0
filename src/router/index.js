import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
    ]
})

export default router
