<template>
  <section class="main">
    <div class="authenticationTipMain">
      <h2 class="title">{{ title }}</h2>
      <p class="tipsBox">
        <span class="tipsStr" v-bind:class="{'load': adopt === -1 }">{{ getTipsStr }}</span>
      </p>
      <div class="todoBox">
        <nuxt-link v-if="adopt === 0" to="/seller/Authentication/" class="submitBtn">重新填写</nuxt-link>
        <nuxt-link v-if="adopt === 1" to="/seller/console/" class="submitBtn">进入控制台</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="less">
  @import '~assets/less/_var.less';
  @itemBoxMarginRight:15px; // 输入项右边距
  .authenticationTipMain{width:1200px - 80 - 120;margin:0 auto;margin-top:@headerMainHeight + 40px;margin-bottom:80px;background-color:#fff;padding:48px 80px 100px 120px;
    .title{font-size:24px;padding-bottom:26px;border-bottom:1px solid @publicBorderColor;font-weight:300;}
    .tipsBox{text-align:center;padding:120px 0;}
    .tipsStr{font-size:18px;font-weight:600;line-height:30px;position:relative;
      &.load{
        &:before{display:none;}
      }
      &:before{content:' ';width:26px;height:26px;display:inline-block;background-image:url(~assets/img/icon/tips.png);position:absolute;left:-36px;bottom:-2px;}
    }
    .submitBtn{width:120px;height:38px;line-height:38px;display:block;margin:0 auto;background-color:@publicBodyStyleColor;color:#fff;text-align:center;
      &:hover{background-color:@publicBodyStyleColor + 10;}
    }
  }
</style>

<script>
    export default{
      data () {
        return {
          title: '商家入驻',
          adopt: -1 // 是否审核通过 -1 加载中 | 0 审核失败 | 1 审核通过
        }
      },
      computed: {
        /**
         * 获取提示文本
         */
        getTipsStr: function () {
          return this.adopt === -1 ? '加载中...' : (!this.adopt ? '审核未通过，请重新填写' : '恭喜您，审核通过！')
        }
      },
      created () {
        // 此处需要异步请求查看是否登录
        var _this = this
        setTimeout(function () {
          _this.adopt = 1
        }, 3000)
      },
      // page head config
      head () {
        return {
          title: this.title + '审核结果',
          meta: [
            { hid: 'description', name: 'description', content: '这是商家入驻的资料审核页面' }
          ]
        }
      }
    }
</script>
