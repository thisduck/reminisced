import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/Home.vue'
import Bookmark from './pages/Bookmark.vue'

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/bookmarks", name: "Bookmarks", component: Home },
  { path: "/bookmarks/:id", name: "Bookmark", component: Bookmark },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
