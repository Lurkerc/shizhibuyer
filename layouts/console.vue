<template>
  <div>
    <my-header/>
    <section class="mainBox">
      <section class="main">
        <my-nav/>
        <nuxt/>
        <div class="clearFloat"></div>
      </section>
    </section>
    <my-footer/>
  </div>
</template>

<style lang="less">
  @import '~assets/less/_var.less';
  .mainBox{background-color:#fff;min-width:@publicBodyWidth;}
  .main{width:@publicBodyWidth;margin:0 auto;margin-top:@headerMainHeight;padding:40px 0 80px 0;}
  .content{margin-left:@consoleMarginRight;float:left;}
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
