<template>
  <div>
    <div class>
      <img src="../../assets/images/banner.jpg" alt />
    </div>
    <div class="bgColor">
      <div class="menuNav">
        <ul>
          <li>
            <router-link to="/rules" class="liStyle">赛事规则</router-link>
          </li>
          <li>
            <router-link to="/setting" class="liStyle">奖项设置</router-link>
          </li>
          <li>
            <router-link to="/comRanking" class="liStyle">比赛排名</router-link>
          </li>
          <li class="indexCol">
            <router-link to="/" class="indexSize">首页</router-link>
          </li>
          <li>
            <router-link to="/arena" class="liStyle">竞技场</router-link>
          </li>
          <li>
            <router-link to="/mall" class="liStyle">积分商城</router-link>
          </li>
          <li>
            <router-link to="/invitFriend" class="liStyle"
              >邀请好友</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../../styles/stylesheets/menu-nav.css");
</style>
