import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/crearCliente',
      name: 'cliente',
      component: () => import('../components/RegistrarClientes.vue')
    },
    {
      path: '/buscarCliente',
      name: 'buscarCliente',
      component: () => import('../components/BuscarClientes.vue')
    },
    {
      path: '/crearProducto',
      name: 'producto',
      component: () => import('../components/RegistrarProductos.vue')
    },
    {
      path: '/busquedaProductos',
      name: 'productos',
      component: () => import('../components/BusquedaProductos.vue')
    },
    {
      path: '/CalificarAtencion',
      name: 'calificacion',
      component: () => import('../components/CalificarAtencion.vue')
    }
  ]
})

export default router
