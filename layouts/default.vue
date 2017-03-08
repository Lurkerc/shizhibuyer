<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<style lang="less">
  @import '~assets/less/_var.less';
  .main{width:1200px;margin:0 auto;margin-top:@headerMainHeight;}
</style>

<script>
import MyHeader from '~components/header.vue'
import MyFooter from '~components/footer.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
