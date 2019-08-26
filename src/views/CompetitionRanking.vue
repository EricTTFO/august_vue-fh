<template>
  <div class="comRanking">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span :style="styleObject">排名</span>
        <div class="search">
          <el-input
            v-model="personalInfo"
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
        :formatter="formatter"
        :default-sort="{ prop: 'day_ranking', order: 'ascending' }"
      >
        <!-- :default-sort="{ prop: 'day_ranking', order: 'ascending' }" -->
        <!-- :class="fontCol" -->
        <!-- 'color:'+ ( (rankingInfo > 0) ? 'red' : 'green') -->
        <el-table-column
          sortable
          prop="day_ranking"
          label="排名"
          align="center"
        >
          <template slot-scope="scope">
            <span
              v-if="scope.row.day_ranking == 9999"
              style="color:#000; fontSize:18px;"
              >-</span
            >
            <span v-else>{{ scope.row.day_ranking }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable prop="user_name" label="选手" align="center">
          <template slot-scope="scope">
            <span
              v-if="scope.row.user_name"
              style="color:#D79C1D; fontSize:18px;"
              >{{ scope.row.user_name }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="sum_earnings"
          label="总收益"
          align="center"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.sum_earnings >= 0" :style="upperData"
              >{{ scope.row.sum_earnings }}%</span
            >
            <span v-else :style="downerData"
              >{{ scope.row.sum_earnings }}%</span
            >
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="month_earnings"
          label="月收益"
          align="center"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.month_earnings >= 0" :style="upperData"
              >{{ scope.row.month_earnings }}%</span
            >
            <span v-else :style="downerData"
              >{{ scope.row.month_earnings }}%</span
            >
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="week_earnings"
          label="周收益"
          align="center"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.week_earnings >= 0" :style="upperData"
              >{{ scope.row.week_earnings }}%</span
            >
            <span v-else :style="downerData"
              >{{ scope.row.week_earnings }}%</span
            >
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="day_earnings"
          label="日收益"
          align="center"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.day_earnings >= 0" :style="upperData"
              >{{ scope.row.day_earnings }}%</span
            >
            <span v-else :style="downerData"
              >{{ scope.row.day_earnings }}%</span
            >
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="yester_earnings"
          label="昨日收益"
          align="center"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.yester_earnings >= 0" :style="upperData"
              >{{ scope.row.yester_earnings }}%</span
            >
            <span v-else :style="downerData"
              >{{ scope.row.yester_earnings }}%</span
            >
          </template>
        </el-table-column>
        <el-table-column sortable prop="yester_ranking" label="昨日排名">
          <template slot-scope="scope">
            <span
              v-if="scope.row.yester_ranking == 9999"
              style="color:#000; fontSize:18px;"
              >-</span
            >
            <span v-else>{{ scope.row.yester_ranking }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="id" label="总资产	"></el-table-column> -->
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
// import { debounce } from "lodash";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      currentPage: 1, //默认显示第一页
      pageSize: 100, //默认每页显示10条
      totalNum: 1000, //总页数
      personalInfo: "",
      styleObject: {
        color: "red"
        // fontSize: "13px"
      },
      upperData: {
        color: "red",
        fontSize: "18px",
        textAlign: "center"
      },
      downerData: {
        color: "#37B328",
        fontSize: "18px",
        textAlign: "center"
      }
    };
  },
  computed: {
    ...mapGetters({
      rankingInfos: "rankingInfo"
    }),
    // fontCol() {
    //       const ck = "-";
    //       for (var k in this.rankingInfo) {
    //         if (
    //           this.rankingInfo[k].day_ranking === 0 ||
    //           this.rankingInfo[k].day_ranking === 0
    //         ) {
    //           this.rankingInfo[k].day_ranking = ck;
    //           this.rankingInfo[k].yester_ranking = ck;
    //           console.log(this.rankingInfo[k].yester_ranking);
    //         }
    //       }
    //       return this.rankingInfos;
    //     }

    rankingInfo() {
      if (this.personalInfo) {
        return this.rankingInfos.filter(item => {
          return Object.keys(item).some(key => {
            return (
              String(item[key])
                .toLowerCase()
                .indexOf(this.personalInfo) > -1
            );
          });
        });
      } else return this.rankingInfos;
    }
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
    formatter(row, column) {
      return row.rowNum + "." + row.address;
    }
  },

  created() {
    this.totalNum = this.rankingInfo.length;

    // this.searchDebounced = debounce(this.search, 500);
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
