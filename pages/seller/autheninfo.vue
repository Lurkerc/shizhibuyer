<template>
  <section class="content">
    <table class="autheninfoTable">
      <tbody>
        <tr class="autheninfoTableTitle">
          <th class="autheninfoTableName">姓名</th>
          <th class="autheninfoTableCard">身份证</th>
          <th class="autheninfoTableAddr">联系地址</th>
          <th class="autheninfoTablePhone">联系手机</th>
          <th class="autheninfoTableAdopt">认证状态</th>
          <th class="autheninfoTableTodo">操作</th>
        </tr>
        <tr class="autheninfoTableItem">
          <td>{{ autheninfo.name }}</td>
          <td>{{ autheninfo.card }}</td>
          <td>{{ autheninfo.addr }}</td>
          <td>{{ autheninfo.phone }}</td>
          <td v-bind:class="{ 'adopt': autheninfo.adopt }">{{ autheninfo.adopt | adoptStates }}</td>
          <td><nuxt-link class="changeInfoBtn" to="/seller/authentication/">修改资料</nuxt-link></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="less">
  @import '~assets/less/_var.less';
  .autheninfoTable{width: @consoleContentWidth - 2 * 1;border: 1px solid @consoleBorderColor;margin-top: 50px;border-collapse: collapse;text-align: center;}
  .autheninfoTableTitle{height: 40px;background-color: @consoleBgColor;line-height: 40px;}
  .autheninfoTableItem{
    a{color: @publicBodyStyleColor;}
    td{padding:30px 20px;}
    .adopt{color: #ff9c00;}
  }
  .autheninfoTableName{width: 80px;}
  .autheninfoTableCard{width: 200px;}
  .autheninfoTableAddr{width: 200px;}
  .autheninfoTablePhone{width: 140px;}
  .autheninfoTableAdopt{width: 110px;}
  .autheninfoTableTodo{width: 80px;}
</style>

<script>
  export default {
    layout: 'console',
    data () {
      return {
        autheninfo: {
          name: '名字',
          card: '522428199510000666',
          addr: '北京市朝阳区联信国际大厦A座305',
          phone: '151****00627',
          adopt: true // 是否认证通过
        }
      }
    },
    filters: {
      adoptStates: function (bol) {
        return bol ? '审核通过' : '未通过'
      }
    }
  }
</script>
