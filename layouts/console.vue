<template>
  <div>
    <my-header/>
    <div class="main">
      <my-nav/>
      <nuxt/>
    </div>
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
  import MyNav from '~components/seller-nav.vue'

  export default{
    components: {
      MyHeader,
      MyFooter,
      MyNav
    }
  }
</script>
