import { createRouter, createWebHistory } from "vue-router";
import New from "../views/New.vue";
import Tasks from "../views/Tasks.vue";
import Task from "@/views/Task.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/new",
      component: New,
    },
		{
      path: "/",
      component: Tasks,
    },
		{
      path: "/task/:id",
			name: 'Task',
      component: Task,
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router
