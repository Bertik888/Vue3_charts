import { createRouter, createWebHashHistory } from 'vue-router'
import OverviewView from '../views/OverviewView.vue'
import ExportView from '../views/ExportView.vue'

const routes = [
  {
    path: '/',
    name: 'overview',
    component: OverviewView
  },
  {
    path: '/export',
    name: 'export',
    component: ExportView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
