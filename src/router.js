import { createRouter, createWebHistory } from "vue-router";

import ListComponent from "./pages/ListComponent"
import ContactComponent from "./pages/ContactComponent"

const routes = [
    
    {
        name: 'List',
        path: '/',
        component:ListComponent
    },
    {
        name: 'contact',
        path: '/contact',
        component:ContactComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router