import Vue from "vue";
import Router from "vue-router";
// import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "requestList",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/RequestList.vue")
    },
    {
      path: "/requestform",
      name: "requestForm",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ViewRequestForm.vue")
    }
  ]
});
