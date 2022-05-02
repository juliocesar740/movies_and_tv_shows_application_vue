import { createRouter, createWebHistory } from "vue-router";

const lazyLoad = (view) => {
  return () => import(`@/views/${view}.vue`);
};

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyLoad("Home"),
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: lazyLoad("Movie"),
  },
  {
    path: "/tvShow/:id",
    name: "tv",
    component: lazyLoad("TvShow"),
  },
  {
    path: "/popularMovies/:page",
    name: "popularMovies",
    component: lazyLoad("PopularMovies"),
  },
  {
    path: "/popularTvShows/:page",
    name: "popularTvShows",
    component: lazyLoad("PopularTvShows"),
  },
  {
    path: "/search/:type/:query/:page",
    name: "search",
    component: lazyLoad("Search"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 300);
    });
  },
});

export default router;
