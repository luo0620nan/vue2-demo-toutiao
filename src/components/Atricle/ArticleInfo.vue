<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" class="thumb" v-if="cover.type == 1" />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type == 3">
          <img
            :src="item"
            class="thumb"
            v-for="(item, i) in cover.images"
            :key="i"
          />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span
            >作者 {{ author }} &nbsp;&nbsp; {{ cmtCount }} 评论 &nbsp;&nbsp;
            发布日期 {{ time }}</span
          >
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    // 评论数，这个比较特殊
    cmtCount: {
      // 使用数组形式，为当前属性定义多个可能的类型
      type: [Number, String],
      default: '',
    },
    // 发布日期
    time: {
      type: String,
      default: '',
    },
    // 封面的信息对象
    cover: {
      type: Object,
      // 通过 default 函数，返回 cover 属性的默认值
      default: function () {
        // 这个 return 的对象就是 cover 属性的默认值
        return { type: 0 }
      },
    },
  },
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
