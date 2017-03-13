<template>
  <section class="content production">
    <!-- 时间和价格 -->
    <div class="timeAndPrice">
      <div class="timeBox">
        <span>发布时间</span>
        <input type="text" class="startTime">
        <span>至</span>
        <input type="text" class="endTime">
      </div>
      <div class="priceBox">
        <span>作品价格</span>
        <input type="text" class="startPrice">
        <span>至</span>
        <input type="text" class="endPrice">
      </div>
    </div>
    <!-- 搜索 -->
    <div class="searchBox">
      <div class="numberBox">
        <span>作品编号</span>
        <input type="text" class="searchNumber">
      </div>
      <div class="textBox">
        <span>作品名称</span>
        <input type="text" class="searchText">
        <a href="javascript:;" class="searchBtn">搜索</a>
      </div>
    </div>
    <!-- 信息 -->
    <div class="infoBox">
      <ul class="infoStates">
        <li class="infoStatesItem">已发布</li>
        <li class="infoStatesItem">未发布</li>
        <li class="infoStatesItem">审核未通过</li>
      </ul>
      <div class="todoBox">
        <a href="javascript:;" class="todoBoxBtn">发布</a>
        <a href="javascript:;" class="todoBoxBtn">删除</a>
      </div>
    </div>
    <!-- 列表 -->
    <table class="infoItem">
      <tbody>
        <!--表头-->
        <tr class="infoTr">
          <th class="infoSelectAll">全选</th>
          <th class="infoNumber">作品编号</th>
          <th class="infoName">作品名称</th>
          <th class="infoPrice">价格</th>
          <th class="infoTime">发布时间</th>
          <th class="infoStates">状态</th>
          <th class="infoTodo">操作列</th>
        </tr>
        <!--表项-->
        <tr class="infoTr">
          <td><input type="checkbox" class="infoSelectInput"></td>
          <td><span>201548621854</span></td>
          <td>
            <img src="" class="infoTitlePic">
            <span>这是名称</span>
          </td>
          <td><span>128.00元</span></td>
          <td><span>2017年2月22日 12：30</span></td>
          <td><span>未发布</span></td>
          <td>
            <a href="javascript:;">编辑</a>
            <a href="javascript:;">删除</a>
            <a href="javascript:;">发布</a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="less">
  @import "~assets/less/_var.less";
  .production{
    .timeAndPrice{}
  }
</style>

<script>
  export default {
    layout: 'console'
  }
</script>
