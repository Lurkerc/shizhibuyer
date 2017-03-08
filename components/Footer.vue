<template>
  <footer>
    <div class="footer">
        <div class="footerMain">
            <ul class="theFooterNav">
                <li class="theTop">关于拾指</li>
                <li class="theFooterNavList"><a href="/video/" target="_blank">学堂</a></li>
                <li class="theFooterNavList"><a href="/community/" target="_blank">发现</a></li>
                <li class="theFooterNavList"><a href="/shop/" target="_blank">商城</a></li>
                <li class="theFooterNavList"><a href="javascript:void(0);">教育</a></li>
            </ul>
            <ul class="theFooterNav">
                <li class="theTop">关于我们</li>
                <li class="theFooterNavList"><a href="javascript:void(0);">关于拾指</a></li>
                <li class="theFooterNavList"><a href="/doc/job.html">加入我们</a></li>
                <li class="theFooterNavList"><a href="javascript:void(0);">用户协议</a></li>
                <li class="theFooterNavList"><a href="javascript:void(0);">购买协议</a></li>
            </ul>
            <ul class="theFooterNav">
                <li class="theTop">客户服务</li>
                <li class="theFooterNavList"><a href="javascript:void(0);">联系我们</a></li>
                <li class="theFooterNavList"><a href="javascript:void(0);">购买流程</a></li>
                <li class="theFooterNavList"><a href="javascript:void(0);">退货流程</a></li>
            </ul>
            <ul class="theFooterNav">
                <li class="theTop">关注我们</li>
                <li class="theFooterNavList"><a href="javascript:void(0);">微信公众号号：tenplus201631</a></li>
                <li class="theFooterNavList"><a href="javascript:void(0);">新浪官方微博：@拾指</a></li>

            </ul>
            <ul class="theFooterNav">
                <li class="theTop">扫一扫</li>
                <li class="theFooterNavList"><img src="~assets/img/icon/footerLogo.jpg"/></li>
            </ul>
            <div class="clearFloat"></div>
            <ul class="footerCopy">
                <li class="footerCopyText">北京荟艺网络科技有限公司旗下网站</li>
                <li class="footerCopyText">&copy; 2016-2017 www.shizhishougong.com</li>
                <li class="footerCopyText">京ICP备16033459号-1</li>
                <li class="clearFloat"></li>
            </ul>
        </div>
    </div>
  </footer>
</template>

<style lang="less">
@import '~assets/less/_var.less';
/* 底部公共样式 */
.footer{width:100%;min-width:@publicBodyWidth;height:auto;background-color:@footerBackgroundColor;}
.footerMain{width:@publicBodyWidth;min-width:@publicBodyWidth;margin:0 auto;
    /*底部页面*/
    .theFooterNav{width:20%;float:left;margin-top:20px;padding-bottom:50px;
        .theTop{margin-top:30px;margin-bottom:40px;font-size:16px;color: #fff;font-weight:600;line-height:20px;}
        .theFooterNavList{margin-top:16px;
            img{width:180px;height:180px;background-color:#fff;}
        }
        .theFooterNavList a{display: block; font-size:14px;color: #fff;line-height:30px;}
    }
    .footerCopy{width:100%;height:90px;
        .footerCopyText{color:@publicBorderColor;text-align:center;line-height:30px;height:30px;float:left;margin-left:16px;}
    }
}
</style>
