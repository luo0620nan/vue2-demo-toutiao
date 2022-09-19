<template>
  <div class="home-container">
    <van-nav-bar title="标题" :fixed="true" />

    <van-pull-refresh
      v-model="isLoading"
      :disabled="finished"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- 在使用组件的时候，如果某个属性名是“小驼峰”形式，则绑定属性的时候，建议写成“连字符”格式。例如： -->
        <!-- cmtCount 建议写成 cmt-count -->
        <ArticleInfo
          v-for="item in artlist"
          :key="item.art_id"
          :title="item.title"
          :author="item.aut_name"
          :cmt-count="item.comm_count"
          :time="item.pubdate"
          :cover="item.cover"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 这里封装了一个 API 接口，按需引入 API 接口，简化代码数量
import { getArticleListAPI } from '@/api/articleAPI.js'

import ArticleInfo from '@/components/Atricle/ArticleInfo.vue'
import { Toast } from 'vant'
export default {
  name: 'MyHome',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      artlist: [],
      // 是否在加载下一页数据，如果 loading 为 true，则不会反复触发 load 事件
      // 每当下一页数据请求回来之后，千万要记得把 loading 改为 false
      loading: true,
      // 所哟数据是否加载完毕了，如果没有更多数据了，一定要把 finished 改成 true
      finished: false,
      isLoading: false,
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    async initArticleList(isRefresh) {
      // console.log(111)
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      if (isRefresh) {
        // 证明是下拉刷新，新数据在前，旧数据在后
        // 如果是上拉加载更多，那么应该是：
        // this.artlist = [新数据在前，旧数据在后] <= 字符串拼接
        this.artlist = [...res, ...this.artlist]
        // this.isLoading = false
      } else {
        // 证明是上拉加载，旧数据在前，新数据在后
        // 如果是上拉加载更多，那么应该是：
        // this.artlist = [旧数据在前，新数据在后] <= 字符串拼接
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }
      console.log(res)

      if (res.length === 0) {
        // 证明下一页没有数据了，直接把 finished 改为 true，表示数据加载完成了
        this.finished = true
      }
    },
    // 只要 onLoad 被调用，就应该请求下一页数据
    onLoad() {
      console.log('我触发了 loading 加载事件！')
      // 上拉页数增加
      this.page++
      // 重新调用接口，渲染数据
      this.initArticleList()
    },
    // 这里判定上拉下拉是通过 vant 插件进行的
    // 下拉加载
    onRefresh() {
      console.log('我下拉加载了')
      // 下拉加载页数 +1
      this.page++
      // 重新调用接口，渲染数据
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.page++
        this.initArticleList(true)
        if (this.finished === true) {
          this.isLoading = false
          Toast('没有更多了')
        }
      }, 200)
    },
  },
  components: {
    ArticleInfo,
  },
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;

  //   .van-nav-bar {
  //     background-color: #007bff;
  //   }

  //   /deep/ .van-nav-bar__title {
  //     color: #fff;
  //   }
}
</style>
