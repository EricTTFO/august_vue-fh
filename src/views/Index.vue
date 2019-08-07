<template>
  <div class>
    <div class="container">
      <div class="row">
        <img src="../assets/images/saicheng.jpg" alt />
      </div>
      <!-- 新闻 -->
      <div class="allNews">
        <div
          class="col-1-3"
          v-for="(master, idx) in masters.slice(0, 3)"
          :key="idx"
        >
          <h2>{{ master.title }}</h2>
          <p>{{ master.title }}</p>
        </div>
      </div>
      <!-- 高手 -->
      <div class="master">
        <div class="masterTitleImg">
          <img src="../assets/images/gsjp.png" alt />
        </div>
        <div class="col-4-4">
          <div
            class="col-1-3"
            v-for="(master, idx) in masters.slice(0, 3)"
            :key="idx"
          >
            <div class="masterPersonInfo">
              <div class="masterUpper">
                <div class="masterUleft">
                  <img :src="master.cover" alt />
                </div>
                <div class="masterUright">
                  <span class="masterExplanation">{{ master.title }}</span>
                </div>
              </div>
              <div class="masterDowner">
                <div class="masterDleft">
                  <span>{{ master.price }}</span>
                  <!-- <p>{{master.title}}</p> -->
                </div>
                <div class="masterDright">
                  <button>{{ master.price }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1-4">1</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["masters"])
    // masters() {
    //     return this.$store.state.masters;
    // }
  },
  methods: {
    ...mapActions(["fetchMasters"])
  },
  mounted() {
    this.fetchMasters();
    // this.$store.dispatch('fetchMasters')
  }
};
</script>

<style>
@import url("../styles/stylesheets/index.css");
</style>
