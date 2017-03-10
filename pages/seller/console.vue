<template>
  <section class="content">
    <!--导航菜单-->
    <ul class="menu">
      <li class="menuSty menuTitle">数据统计</li>
      <li class="menuSty menuItem" v-for="item in menu" v-bind:class="{ 'active': item.type === selectMenu }" v-on:click="selectMenuItem(item.type)">{{ item.str }}</li>
    </ul>
    <!--数据总览-->
    <ul class="numberBox">
      <li class="numberItem">
        <p class="numberTitle">浏览数</p>
        <p class="numberStr">{{ number.views }}</p>
      </li>
      <li class="numberItem">
        <p class="numberTitle">收藏数</p>
        <p class="numberStr">{{ number.collect }}</p>
      </li>
      <li class="numberItem">
        <p class="numberTitle">订单</p>
        <p class="numberStr">{{ number.order }}</p>
      </li>
      <li class="numberItem">
        <p class="numberTitle">收入</p>
        <p class="numberStr moneyStr">{{ number.income | moneyStr }} 元</p>
      </li>
    </ul>
    <!--销售记录-->
    <div class="order roBox">
      <h2 class="roTitle">销售记录</h2>
      <ul class="roListBox">
        <li class="roList">
          <span class="roListTitle">还未支付</span>
          <span class="roListNum">{{ order.pay_un }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">支付失败</span>
          <span class="roListNum">{{ order.pay_error }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">还未发货</span>
          <span class="roListNum">{{ order.ship_un }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">已经发货</span>
          <span class="roListNum">{{ order.ship }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">确认收货</span>
          <span class="roListNum">{{ order.ship_get }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">申请退款</span>
          <span class="roListNum">{{ order.refund }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">退款成功</span>
          <span class="roListNum">{{ order.refund_success }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">退款失败</span>
          <span class="roListNum">{{ order.refund_error }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">关闭交易</span>
          <span class="roListNum">{{ order.close }}</span>
        </li>
      </ul>
    </div>
    <!--作品列表-->
    <div class="list roBox">
      <h2 class="roTitle">作品列表</h2>
      <ul class="roListBox">
        <li class="roList">
          <span class="roListTitle">未发布</span>
          <span class="roListNum">{{ list.publish_un }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">未审核</span>
          <span class="roListNum">{{ list.eav_un }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">审核未通过</span>
          <span class="roListNum">{{ list.eav_error }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">上架</span>
          <span class="roListNum">{{ list.on }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">缺货</span>
          <span class="roListNum">{{ list.no }}</span>
        </li>
        <li class="roList">
          <span class="roListTitle">下架</span>
          <span class="roListNum">{{ list.del }}</span>
        </li>
      </ul>
      <nuxt-link to="/seller/production/" class="theNav">管理作品</nuxt-link>
    </div>
  </section>
</template>

<style lang="less">
  @import '~assets/less/_var.less';
  .menu{margin-top: 20px;overflow: hidden;}
  .menuTitle{margin-right: 10px;}
  .menuSty{float: left;line-height: 40px;}
  .menuItem{padding: 0 16px;cursor: pointer;border: 1px solid #fff;
    &:hover{color: @publicBodyStyleColor;}
    &.active{border-color: @publicBodyStyleColor;color: @publicBodyStyleColor;}
  }
  .numberBox{width: @consoleContentWidth;margin-top: 25px;overflow:hidden;
    .numberItem{width: (@consoleContentWidth - 16 * 3 - 4 * 2) / 4;border: 1px solid @consoleBorderColor;float: left;
      &:not(:last-child){margin-right: 16px;}
    }
    .numberTitle{line-height: 40px;color: #414141;background-color: @consoleBorderColor;padding:0 20px;}
    .numberStr{font-size: 38px;line-height:60px;color: @consoleNumColr;margin-top:10px;padding:0 20px;}
    .moneyStr{font-size: 24px;}
  }
  .roBox{width:(@consoleContentWidth - 16) / 2;margin-top: 30px;float: left;
    &:not(:last-child){margin-right: 16px;}
    .roTitle{font-size: 16px;font-weight: normal;}
    .roListBox{margin-top: 10px;border: 1px solid @consoleBorderColor;}
    .roList{text-align: right;overflow:hidden;
      &:not(:last-child){border-bottom: 1px solid @consoleBorderColor;}
    }
    .roListTitle{width: 100px;display: inline-block;text-align: center;padding:10px;float:left;border-right: 1px solid @consoleBorderColor;}
    .roListNum{padding:10px;display: inline-block;}
    .theNav{line-height: 40px;padding: 0 10px;color: @publicBodyStyleColor;}
  }
</style>

<script>
  export default {
    layout: 'console',
    data () {
      return {
        menu: [ // 菜单
          { type: 0, str: '全部' },
          { type: 1, str: '今天' },
          { type: 2, str: '昨天' },
          { type: 7, str: '最近7天' },
          { type: 30, str: '最近一个月' },
          { type: 90, str: '最近三个月' }
        ],
        selectMenu: 0, // 默认选择 ‘全部’
        number: { // 数量
          views: 5, // 浏览
          collect: 15, // 收藏
          order: 0, // 订单
          income: 0.00 // 收入
        },
        order: { // 订单相关
          pay_un: 0, // 未支付
          pay_error: 1, // 支付失败
          ship: 10, // 已发货
          ship_un: 0, // 未发货
          ship_get: 15, // 已收货
          refund: 11, // 退款
          refund_pay: 1, // 退款等待支付
          refund_success: 2, // 退款成功
          refund_error: 3, // 退款失败
          close: 5 // 交易关闭
        },
        list: { // 列表相关
          publish_un: 1, // 未发布
          eav_un: 0, // 未审核
          eav_error: 2, // 审核未通过
          on: 10, // 上架
          off: 2, // 下架
          no: 1, // 缺货
          del: 3 // 已删除
        }
      }
    },
    methods: {
      /**
       * 选择菜单选项
       * prom {number} index 索引
       */
      selectMenuItem: function (index) {
        this.selectMenu = index
        this.getNumber()
      },
      getNumber: function () {
        this.number.views = this.getRandNum()
        this.number.collect = this.getRandNum()
        this.number.order = this.getRandNum()
        this.number.income = this.getRandNum(9999)
      },
      getRandNum: function (min, max) {
        return Math.floor(Math.random() * ((max || 100) - (min || 0) + 1) + (min || 0))
      }
    },
    filters: {
      // 保留两位小数
      moneyStr: function (num) {
        return num.toFixed(2)
      }
    }
  }
</script>
