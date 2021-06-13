import Vue from "vue"
import VueRouter from "vue-router"
import Result from "../views/Result.vue"
import About from "../views/About.vue"
import Retry from "../views/Retry.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Result",
    component: Result,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/retry-page",
    name: "Retry",
    component: Retry,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
