import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../views/auth/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // auth - rutas publicas
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import("@/views/auth/LoginView.vue"),
        },
        {
          path: 'recuperar-password',
          name: 'recuperar-password',
          component: () => import("@/views/auth/RecuperarPasswordView.vue"),
        },
      ]
    },
    // seccion usuario autenticado - rutas privadas
    {
      path: "/",
      component: () => import("@/views/user/UserLayout.vue"),
      redirect: { name: 'control-de-verificacion' },
      children: [
        {
          path: 'control-de-verificacion',
          name: 'control-de-verificacion',
          component: () => import("@/views/user/ControlDeVerificacionView.vue"),
        },
        {
          path: 'verificar-protocolos',
          name: 'verificar-protocolos',
          component: () => import("@/views/user/VerificarProtocolosView.vue"),
        },
        {
          path: 'protocolos-asignados',
          name: 'protocolos-asignados',
          component: () => import("@/views/user/ProtocolosAsignadosView.vue"),
        },
      ]
    },
    { 
      // Ruta comodín para redirigir a login cualquier ruta no definida
      path: '/:pathMatch(.*)*',
      redirect: '/auth/login'
    },
  ]
})

export default router
