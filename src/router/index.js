import { createRouter, createWebHistory } from "vue-router";

const lazyLoad = (view) => {
  return () => import(`@/views/${view}.vue`);
};

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyLoad("Home"),
    meta: { title: "Home" },
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: lazyLoad("Movie"),
    meta: { title: "Movie" },
  },
  {
    path: "/tvShow/:id",
    name: "tv",
    component: lazyLoad("TvShow"),
    meta: { title: "TvShow" },
  },
  {
    path: "/popularMovies/:page",
    name: "popularMovies",
    component: lazyLoad("PopularMovies"),
    meta: { title: "Popular Movies" },
  },
  {
    path: "/popularTvShows/:page",
    name: "popularTvShows",
    component: lazyLoad("PopularTvShows"),
    meta: { title: "Popular Tv Shows" },
  },
  {
    path: "/search/:type/:query/:page",
    name: "search",
    component: lazyLoad("Search"),
    meta: { title: "Search" },
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
