import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("./layout"),
      children: [
        {
          path: "/",
          redirect: "/",
          component: {
            render: h => h("router-view")
          },
          children: [
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
            {
              path: "/",
              component: () => import("./views/Index.vue")
            },
            {
              path: "/arena",
              component: () => import("./views/Arena.vue")
            },
            {
              path: "/mall",
              component: () => import("./views/PointsMall.vue")
            },
            {
              path: "/invitFriend",
              component: () => import("./views/InviteFriends.vue")
            }
          ]
        }
      ]
    }
  ]
});
