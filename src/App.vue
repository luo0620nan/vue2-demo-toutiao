<template>
  <div>
    <!-- 路由占位符 -->
    <router-view></router-view>

    <!-- Tabbar 区域 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to='/user'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped></style>
