<template>
  <div class="comRanking">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>2019年08月06日收益榜</span>
        <div class="search">
          <el-input
            v-model="personalInfo"
            class="person"
            placeholder="请输入搜索内容"
          ></el-input>
        </div>
      </div>
      <el-table
        ref="singleTable"
        :data="
          rankingInfo.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )
        "
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column type="index" width="100"></el-table-column>
        <el-table-column
          property="title"
          label="排名"
          width="120"
        ></el-table-column>
        <el-table-column property="title" label="选手"></el-table-column>
        <el-table-column property="title" label="总收益"></el-table-column>
        <el-table-column property="title" label="月收益"></el-table-column>
        <el-table-column property="title" label="周收益"></el-table-column>
        <el-table-column property="title" label="日收益"></el-table-column>
        <el-table-column property="title" label="昨日排名"></el-table-column>
        <el-table-column property="title" label="总资产	"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { debounce } from "lodash";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      currentPage: 1, //默认显示第一页
      pageSize: 10, //默认每页显示10条
      totalNum: 1000, //总页数
      personalInfo: ""
    };
  },
  computed: {
    ...mapGetters(["rankingInfo"])
    // person: {
    //   get() {
    //     return this.$store.rankingInfo.personalInfo;
    //   },
    //   set(val) {
    //     console.log();
    //     this.$store.commit("setRankingInfo", val);
    //   }
    // }
    // masters() {
    //     return this.$store.state.masters;
    // }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    },
    ...mapActions(["fetchRankinginfo"])
    // search(val) {
    // fetch(`${SEARCH_API}${val}`)
    //   .then(rs => rs.json())
    //   .then(rs => {
    //     this.rankingInfo = rs.courses;
    //   });
    // this.rankingInfo;

    // }
  },
  watch: {
    personalInfo(val) {
      this.$store.commit("filterRankingInfo", val);
      console.log(`${val}`);
    }
  },
  created() {
    this.totalNum = this.rankingInfo.length;

    // this.searchDebounced = debounce(this.person, 500);
  },
  mounted() {
    this.fetchRankinginfo();
    // this.$store.dispatch('fetchMasters')
  }
};
</script>

<style scoped>
@import url("../styles/stylesheets/competition.css");
</style>
