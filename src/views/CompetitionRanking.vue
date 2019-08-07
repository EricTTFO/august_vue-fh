<template>
  <div class="comRanking">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>2019年08月06日收益榜</span>
        <div class="search">
          <el-input v-model="text" placeholder="请输入搜索内容"></el-input>
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
        @current-change="handleCurrentChange"
        style="width: 100%"
      >
        <el-table-column type="index" width="100"></el-table-column>
        <el-table-column
          property="title"
          label="选手"
          width="120"
        ></el-table-column>
        <el-table-column property="title" label="地址"></el-table-column>
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
          :page-sizes="[1, 3, 5, 8]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
const SEARCH_API =
  "https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1";
import { debounce } from "lodash";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      currentPage: 1, //默认显示第一页
      pageSize: 10, //默认每页显示10条
      totalNum: 1000, //总页数
      text: ""
    };
  },
  computed: {
    ...mapState(["rankingInfo"])
    // masters() {
    //     return this.$store.state.masters;
    // }
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    },
    ...mapActions(["fetchRankinginfo"]),
    search(val) {
      fetch(`${SEARCH_API}${val}`)
        .then(rs => rs.json())
        .then(rs => {
          console.log(rs.courses);
        });
    }
  },
  watch: {
    text(val) {
      this.searchDebounced(val);
    }
  },
  created() {
    this.totalNum = this.rankingInfo.length;

    this.searchDebounced = debounce(this.search, 500);
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
