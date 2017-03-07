<template>
    <section>
        <div class="main">
            <h2 class="title">{{ title }}</h2>
            <ul class="inputItem">
                <li class="item">
                    <div class="itemBox">
                        <p class="itemTitle">手机号</p>
                        <input class="itemInputText" type="text" v-model="phone" placeholder="请输入手机号" maxlength="11">
                    </div>
                    <div class="itemBox">
                        <p class="itemTitle">验证码</p>
                        <input class="itemInputText" type="text" v-model="code" placeholder="六位数" maxlength="6">
                    </div>
                    <div class="itemBox noMargin">
                        <p class="tips error">{{ tips }}</p>
                    </div>
                    <div class="clearFloat"></div>
                </li>
                <li class="item">
                    <div class="itemBox">
                        <p class="itemTitle">真实姓名</p>
                        <input class="itemInputText long" type="text" v-model="name" placeholder="请输入与身份证一致的姓名" maxlength="10">
                    </div>
                    <div class="itemBox noMargin">
                        <p class="tips error">{{ tips }}</p>
                    </div>
                    <div class="clearFloat"></div>
                </li>
                <li class="item">
                    <div class="itemBox">
                        <p class="itemTitle">结算银行卡号</p>
                        <input class="itemInputText long" type="text" v-model="card" placeholder="请输入与结算的银行卡卡号" maxlength="19">
                    </div>
                    <div class="itemBox">
                        <p class="itemTitle">开户银行</p>
                        <input class="itemInputText small" type="text" v-model="accountName" placeholder="例：农业银行" maxlength="30">
                    </div>
                    <div class="itemBox">
                        <p class="itemTitle">开户网点</p>
                        <input class="itemInputText small" type="text" v-model="accountAddr" placeholder="例：雨花亭支行" maxlength="30">
                    </div>
                    <div class="itemBox noMargin">
                        <p class="tips error">{{ tips }}</p>
                    </div>
                    <div class="clearFloat"></div>
                </li>
                <li class="item">
                    <div class="itemBox">
                        <p class="itemTitle">上传身份证</p>
                        <div class="uploadBox">点击上传身份证正面照</div>
                    </div>
                    <div class="itemBox">
                        <p class="itemTitle"></p>
                        <div class="uploadBox">点击上传身份证背面照</div>
                    </div>
                    <div class="clearFloat"></div>
                </li>
            </ul>
            <div class="todoBox">
                <div class="agreementBox">
                    <input type="checkbox" class="checkbox" id="agreementInput"/>
                    <label for="agreementInput" class="agreementInput">阅读并接受<a href="">《拾指商家入驻协议》</a></label>
                </div>
                <nuxt-link to="/" class="submitBtn">提交审核</nuxt-link>
            </div>
        </div>
    </section>
</template>

<style lang="less">
@import '~assets/less/_var.less';
@itemBoxMarginRight:15px; // 输入项右边距
body{background-color:#dedede;}
.main{width:1200px - 80 - 120;margin:0 auto;margin-top:@headerMainHeight + 40px;margin-bottom:80px;background-color:#fff;padding:48px 80px 100px 120px;
    .title{font-size:24px;padding-bottom:26px;border-bottom:1px solid @publicBorderColor;font-weight:300;}
    .inputItem{padding-top:10px;}
    .item{margin-top:20px;}
    .tips{max-width:300px;height:18px;padding-top:54px;overflow:hidden;}
    .error{color:red;}
    .itemBox{float:left;margin-right:30px;position:relative;
        &.noMargin{margin:0;}
    }
    .itemTitle{font-size:16px;margin-bottom:16px;height:24px;}
    .itemInputText{width:285px - @itemBoxMarginRight * 2;padding:15px;border:1px solid @publicBorderColor;
        &:focus{border-color:@publicBodyStyleColor;}
        &.long{width:420px - @itemBoxMarginRight * 2;}
        &.small{width:194px - @itemBoxMarginRight * 2;}
    }
    .uploadBox{width:420px;height:220px;line-height:220px;border:1px solid @publicBorderColor;text-align:center;color:@publicBorderColor;}
    .todoBox{margin-top:120px;}
    .agreementBox{margin-bottom:18px;text-align:center;margin-left:78px;}
    .checkbox{line-height:1;}
    .agreementInput{margin-left:6px;cursor:pointer;
        a{color:@publicBodyStyleColor;}
    }
    .submitBtn{width:120px;height:38px;line-height:38px;display:block;margin:0 auto;background-color:@publicBodyStyleColor;color:#fff;text-align:center;
        &:hover{background-color:@publicBodyStyleColor + 10;}
    }
}
</style>

<script>
    import Vue from "vue";

    export default{
        data () {
            return {
                    title:"商家入驻",
                    phone:'',
                    code:'',
                    name:'',
                    card:'',
                    accountName:'',
                    accountAddr:'',
                    tips:'提示文本',
            }
        }
    }
</script>
