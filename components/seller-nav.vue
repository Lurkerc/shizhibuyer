<template>
  <div class="navMain">
    <h2 class="pageTitle">{{ pageTitle }}</h2>
    <ul class="navBox">
      <nuxt-link class="navItem" v-for="item in nav" v-bind:to="{ path: item.to }" active-class="active" tag="li">
        <a v-bind:href="{ path: item.to }" class="navItemTo">{{ item.str }}</a>
      </nuxt-link>
    </ul>
  </div>
</template>

<style lang="less">
  @import '~assets/less/_var.less';
  .navMain{float: left;
    .pageTitle{font-size:18px;font-weight:normal;padding-bottom: 50px;}
  }
  .navBox{width: @consoleNavWidth;padding: 20px 0;background-color:@consoleBgColor;
    .navItem{padding:20px 30px;font-size: 14px;
      &.active{background-color:#fff;}
    }
  }
</style>

<script>
  export default{
    data () {
      return {
        nav: [
          { str: '首页', to: '/seller/console/' },
          { str: '认证信息', to: '/seller/autheninfo/' },
          { str: '作品列表', to: '/seller/production/' },
          { str: '添加作品', to: '/seller/productions/add/' },
          { str: '运费模版', to: '/seller/freight-template/' },
          { str: '订单管理', to: '/seller/order/' },
          { str: '退款管理', to: '/seller/refundment/' },
          { str: '结算管理', to: '/seller/accounts/' },
          { str: '信息评价', to: '/seller/assess/' }
        ],
        pageTitle: '买家管理中心'
      }
    }
  }
</script>
