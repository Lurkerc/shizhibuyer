<template>
  <div>
    <my-header/>
    <div class="main">
      <my-nav/>
      <nuxt/>
      <div class="clearFloat"></div>
    </div>
    <my-footer/>
  </div>
</template>

<style lang="less">
  @import '~assets/less/_var.less';
  .main{width:1200px;margin:0 auto;margin-top:@headerMainHeight;padding:40px 0 80px 0;}
  .content{margin-left:34px;float:left;}
</style>

<script>
  import MyHeader from '~components/header.vue'
  import MyFooter from '~components/footer.vue'
  import MyNav from '~components/seller-nav.vue'

  export default{
    components: {
      MyHeader,
      MyFooter,
      MyNav
    }
  }
</script>
