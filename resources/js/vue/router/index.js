import { createRouter, createWebHistory } from "vue-router";

// Rutas del Proyecto
import home from "../pages/auth/AuthPage.vue";

import admin from "../pages/projects/HomePage.vue";

// Page 404
import notFound from "../components/NotFound.vue";

const routes = [
    {
        path: "/",
        component: home,
    },
    {
        path: "/admin",
        component: admin,
    },
    {
        path: "/:pathMatch(.*)*",
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes,
});

export default router;
