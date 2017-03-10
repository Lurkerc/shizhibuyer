<template>
  <header id="header" class="header active">
    <div class="headerMain">
      <div class="headerBox">
        <div class="logoBox">
            <a href="/"><img src="~assets/img/logo.png" /></a>
        </div>
        <ul class="theNavMain">
          <li class="navItem">
            <a href="/">首页</a>
          </li>
          <li class="navItem">
            <a href="/video/">学堂</a>
          </li>
          <li class="navItem">
            <a href="/community/">发现</a>
          </li>
          <li class="navItem">
            <a href="/shop/">商城</a>
          </li>
          <li class="clearFloat"></li>
        </ul>
        <div class="searchMain">
          <input type="text" id="searchInput" value="" placeholder="请输入搜索内容" maxlength="10" />
          <a href="JavaScript:void(0);" class="searchBtn" id="searchBtn"></a>
        </div>
        <div class="loginMain" id="loginMain">
          <a href="javascript:void(0);" class="openLogin">登录</a>
          <a href="javascript:void(0);" class="openReg">注册</a>
        </div>
        <div class="clearFloat"></div>
      </div>
    </div>
  </header>
</template>

<style lang="less">
@import '~assets/less/_var.less';
/* 顶部公共样式 */
.header{width:100%;min-width:@publicBodyWidth;position:fixed;top:0;z-index:99;background-color:#fff;}
.headerTop{width:100%;height:@headerTopBarHeight;background-color:@headerTopBarBackgroundColor;overflow:hidden;}
.hederTopMain{width:@publicBodyWidth;height:@headerTopBarHeight;margin:0 auto;line-height:@headerTopBarHeight;
  .leftText{.floatLeft;}
  .rightTips{.floatRight;padding-right:(@headerTopLoginWidth + 40);}
}
.headerMain{width:100%;height:@headerMainHeight;border-bottom:2px solid @publicBorderColor;
    /* 头部内容 */
    .headerBox{width:@publicBodyWidth;margin:0 auto;position:relative;
        /* logo */
        .logoBox{
          .floatLeft;
          img{height:@headerLogoHeight;margin-top:(@headerMainHeight - @headerLogoHeight)/2;}
        }
        /* 导航条 */
        .theNavMain{height:@headerMainHeight;line-height:@headerMainHeight - 2;padding:@headerMainMarginLeftForLogo;margin-bottom:0;
          .floatLeft;
          li {.floatLeft;
            a {text-decoration:none;padding:@headerMainNavAPadding;margin:@headerMainNavAMargin;font-size:14px;color:@publicFontColor;display:inline-block;}
          }
          li.active{
            a{font-size:16px;color:@publicBodyStyleColor;font-weight:600;border-bottom:2px solid @publicBodyStyleColor;}
          }
          .navItem:hover{background-color:@headerHoverStateColor;height:@headerMainHeight - 2;}
          .navItem.active:hover{height:@headerMainHeight;background-color:#fff;border-bottom:2px solid @publicBorderColor;}
        }
        /* 搜索框 */
        .searchMain{width:@headerSearchWidth;height:@headerSearchHeight;
            .floatRight;
            margin-right:(@headerTopLoginWidth + 40);
            margin-top:(@headerMainHeight - 40)/2;
            position:relative;
            #searchInput {width:@headerSearchWidth;height:@headerSearchHeight;line-height:@headerSearchHeight;border:1px solid @publicBorderColor;text-indent:1em;font-family: "微软雅黑";}
            .searchBtn{
                .iconBackgroundImg;
                width:@headerSearchHeight;height:@headerSearchHeight;background-position:-130px -4px;position:absolute;top:0;right:5px;display:block;
            }
        }
        .searchMain:hover #searchInput{
            background-color:@headerHoverStateColor;
        }
        .searchMain #searchInput:focus{background-color:#fff;}
        /* 登录提示 */
        .loginMain{/*width:@headerTopLoginWidth;*/height:40px;position:absolute;top:-35px;right:0;line-height:40px;
            a{color:@publicFontColorOrange;margin:0 4px;}
            .userInfo{width:32px;height:32px;line-height:normal;margin-right:0;margin-top:4px;display: block;
                img{width:32px;height:32px;}
            }
            .theCutBox{/*width:60px;*/margin-right:10px;
                .cutIcon{width:30px;height:30px;background-position:-50px -3px;display:block;margin-top:5px;}
                .theNum{margin-left:4px;color:@publicBodyStyleColor;font-size:18px;}
            }
            .userInfoMain{width:32px;position:relative;
                .userImg{margin:0;padding:0;border-radius:16px;}
                .userInfo{margin:0;margin-top:4px;}
                .theUserNav{width:@headerTopLoginWidth;margin:0;margin-top:10px;display:none;border:1px solid @publicBorderColor;background-color:#fff;position:absolute;right:0;top:40px;
                  &:before{content:'';position:absolute;top:-20px;right:5px;border-width:10px;border-style: dashed dashed solid dashed;border-color: transparent transparent @publicBorderColor transparent;line-height: 0;font-size: 0;;}
                  &:after{content:'';position:absolute;top:-19px;right:5px;border-width:10px;border-style: dashed dashed solid dashed;border-color: transparent transparent #FFF transparent;line-height: 0;font-size: 0;;}
                  .theUserNavList{line-height:38px;
                    a{color:@publicFontColor;margin-left:20px;
                      span{color:@publicBodyStyleColor;}
                      &:hover{color:@publicBodyStyleColor;}
                    }
                  }
                }
                &:hover{
                    & .theUserNav{display:block;}
                }
            }
        }
    }
}
</style>
