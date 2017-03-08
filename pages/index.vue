<template>
  <section class="main">
    <div class="btnBox">
      <nuxt-link class="button" to="/seller/authentication/">前往认证页面</nuxt-link>
    </div>
  </section>
</template>

<style lang="less">
  @import '~assets/less/_var.less';
  .btnBox{padding:210px;}
  .button{width:100px;height:40px;display:block;line-height:40px;color:@publicBodyStyleColor;text-align:center;border:1px solid @publicBodyStyleColor;margin:0 auto;
    &:hover{color:#fff;background-color:@publicBodyStyleColor;}
  }
</style>
