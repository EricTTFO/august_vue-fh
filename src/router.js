import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/404.vue";
import Forbidden from "./views/403.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("./layout"),
      children: [
        {
          path: "/",
          redirect: "/comRanking",
          component: {
            render: h => h("router-view")
          },
          children: [
            // {
            //   path: "/test",
            //   component: () => import("./views/Test.vue")
            // },
            {
              path: "/setting",
              component: () => import("./views/PrizeSetting")
            },
            {
              path: "/comRanking",
              component: () => import("./views/CompetitionRanking.vue")
            },
            {
              path: "/rules",
              component: () => import("./views/RulesGame.vue")
            },
            // {
            //   path: "/table",
            //   component: () => import("./views/table.vue")
            // },
            {
              path: "/arena",
              component: () => import("./views/Arena.vue")
            },
            // {
            //   path: "/mall",
            //   component: () => import("./views/PointsMall.vue")
            // },
            {
              path: "/invitFriend",
              component: () => import("./views/InviteFriends.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/403",
      name: "403",
      hideInMenu: true,
      component: Forbidden
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFound
    }
  ]
});
