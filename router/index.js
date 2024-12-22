import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: {
      layout: 'home-layout',
      meta: { title: 'Home Page' },
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/about.vue'),
    meta: {
      layout: 'about-layout', 
      title: 'About • Aleh Vaitulevich'
      
    },
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../pages/work.vue'),
    meta: {
      layout: 'work-layout', 
      title: 'Work • Aleh Vaitulevich'
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Применение middleware для каждого маршрута
router.beforeEach((to, from, next) => {
  loadLayoutMiddleware(to).then(() => {
    next();
  }).catch(err => {
    console.error(err);
    next();
  });
});

export default router;




