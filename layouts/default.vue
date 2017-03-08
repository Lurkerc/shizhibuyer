<template>
  <div>
    <MyHeader/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<style lang="less">
  @import '~assets/less/_var.less';
  .main{width:1200px;margin:0 auto;margin-top:@headerMainHeight;}
</style>

<script>
import MyFooter from '~components/footer.vue'
import MyHeader from '~components/header.vue'

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>
