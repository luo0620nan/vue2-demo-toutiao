<template>
  <div class="card">
    <img src="@/assets/logo.png" alt="" />
    <van-cell-group inset class="form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </van-cell-group>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'myLogin',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit(values) {
      if (values.username === 'admin' && values.password === '666666') {
        localStorage.setItem('token', 'Bearer xxxxxx')
        this.$router.push('/home')
      } else {
        localStorage.removeItem('token')
        Toast('用户名或者密码错误')
      }
      console.log(values)
    },
  },
}
</script>

<style lang="less" scoped>
.card {
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
}
</style>
